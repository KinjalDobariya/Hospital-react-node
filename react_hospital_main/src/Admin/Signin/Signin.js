import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Navbar from '../Dashboard/Navbar';

function Signin() {


  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const btnHandler = () => {
    if (!email || !password) {
      alert("All Field are Mandatory.")
    }
    else {
      axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      })
        .then(function (response) {
          // handle success
          console.log(response);
          if (response.data.status === "Login Success") {
            localStorage.setItem('userId', response.data.data[0].name)
            window.location = "/dashboard";

          }
          else if (response.data.status === "Password not match") {
            alert("Sorry UserId and password are wrong...");

          }

        })

    }

  }

  return (

    <div className="theme-cyan authentication sidebar-collapse">
      <Navbar />

      {/* End Navbar */}
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: 'url(../assets/images/login.jpg)' }} />
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="card-plain">
              <form className="form" method action="#">
                <div className="header">
                  <div className="logo-container">
                    <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt />
                  </div>
                  <h5>Log in</h5>
                </div>
                <div className="content">
                  <div className="input-group">
                    <input type="text" name='email' className="form-control" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-email" />
                    </span>
                  </div>
                  <div className="input-group mb-0">
                    <input type="password" placeholder="Password" className="form-control h-0" onChange={(e) => setpassword(e.target.value)} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-lock" />
                    </span>
                  </div>
                </div>
                <div className="footer text-center">
                  <Button className="btn btn-primary btn-round btn-block mt-0 " onClick={btnHandler}>SIGN IN</Button>
                  <h5><Link to="/register" className="link"> New User Registration</Link></h5>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <nav>
              <ul>
                <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
                <li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>
                <li><a href="javascript:void(0);">FAQ</a></li>
              </ul>
            </nav>
            <div className="copyright">
              ©
              ,
              <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
            </div>
          </div>
        </footer>
      </div>
    </div>

  )
}

export default Signin
