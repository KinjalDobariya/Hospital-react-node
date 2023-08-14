import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    let user = window.localStorage.getItem('userId');
    let user2 = user.toUpperCase()
    
    const signOutuser = () =>
    {
        localStorage.clear();
        window.location = '/admin'
    }


    return (
        <div>
            <div className='wrapper'>
                <div className="main_header">
                    <section id="top-nav">
                        <div className="container">
                            <div className="top">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7">
                                        <div className="left">
                                            <ul className="list-unstyled m-b-0">
                                                <li><Link to="#" className="btn btn-link"><i className="zmdi zmdi-email m-r-5" />info@example.com</Link>
                                                    <Link to="#" className="btn btn-link"><i className="zmdi zmdi-phone m-r-5" />+
                                                        202-555-0191</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5">
                                        <div className="text-right d-none d-md-block">
                                            <ul className="list-unstyled m-b-0">
                                                <li><Link to="/dashboard" className="btn btn-link theme-color">WelCome {user2}</Link> <Link to="/admin" className=" theme-color btn btn-link" onClick={signOutuser} >Sign Out</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <header id="header">
                        <div className="container">
                            <div className="head">
                                <div className="row">
                                    <div className="col-lg-5 col-sm-5">
                                        <div className="left">
                                            <Link to="/dashboard" className="navbar-brand"><img src="assets/images/logo.svg" alt="logo" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-sm-7">
                                        <div className="text-right d-none d-md-block">
                                            <p className="col-white m-b-0 p-t-5"><i className="zmdi zmdi-time" /> Mon - Sat: 9:00 - 18:00
                                                Sunday CLOSED </p>
                                            <p className="col-white m-b-0"><i className="zmdi zmdi-pin" /> 1422 1st St. Santa Rosa CA
                                                94559. United States </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="navbar" data-aos="fade-down">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarMenu">
                                    <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/appointment">Appointment</Link></li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department</Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/adddepartment">Add Departments</Link>
                                                <Link className="dropdown-item" to="/viewdepartment">View Departments</Link>
                                            </div>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors</Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/adddoctor">Add Doctors</Link>
                                                <Link className="dropdown-item" to="/viewdoctor">View Doctors</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Patient</Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/addpatient">Add Patient</Link>
                                                <Link className="dropdown-item" to="/viewpatients">View Patients</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Payment</Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/addpayment">Add Payment</Link>
                                                <Link className="dropdown-item" to="/viewpayment">View Payment</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item d-md-none d-lg-none d-xl-none"><Link className="nav-link" to="/signin">Sign in</Link></li>
                                        <li className="nav-item d-md-none d-lg-none d-xl-none"><Link className="nav-link" to="/signup">Sign up</Link></li>
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

