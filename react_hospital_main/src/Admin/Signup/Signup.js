import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Dashboard/Navbar'
import { Button } from 'react-bootstrap';

function Signup() {

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const btnHandler = () => {
    axios.post('http://localhost:5000/register',{

      name:name,
      password:password,
      email:email
    })
      .then(function (response) {
        // handle success
        console.log(response);
        if(response.data.status === 'Success')
        {
          window.location = '/admin'
        }
        else
        {
          alert("data not register")
        }
      })

  }


  return (
    <div>
      <Navbar />
      <div className="page-header authentication ">
        <div className="page-header-image" style={{ backgroundImage: 'url(../assets/images/login.jpg)' }} />
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="card-plain">
              <form className="form" method action="#">
                <div className="header">
                  <div className="logo-container">
                    <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt />
                  </div>
                  <h5>Sign Up</h5>
                  <span>Register a new membership</span>
                </div>
                <div className="content">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter User Name" onChange={(e) => setname(e.target.value)} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-account-circle" />
                    </span>
                  </div>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-email" />
                    </span>
                  </div>
                  <div className="input-group">
                    <input type="password" placeholder="Password" className="form-control h-0" onChange={(e) => setpassword(e.target.value)} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-lock" />
                    </span>
                  </div>
                </div>
                <div className="checkbox">
                  <input id="terms" type="checkbox" />
                  <label htmlFor="terms">
                    I read and agree to the <a href="javascript:void(0);">terms of usage</a>
                  </label>
                </div>
                <div className="footer text-center">
                  <Button className="btn btn-primary btn-round btn-block  waves-effect waves-light btn-primary theme-cyan" onClick={btnHandler} >SIGN UP</Button>
                  <h5><a className="link" href="/admin">You already have a membership?</a></h5>
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

export default Signup
