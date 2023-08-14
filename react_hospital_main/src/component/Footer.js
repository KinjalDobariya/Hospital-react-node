import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div class="wrapper">
                <section class="main-section">
                    {/* start footer */}
                    <footer id="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form" data-aos="fade-up" data-aos-duration={3000}>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group m-b-0">
                                                    <input type="text" defaultValue placeholder="your name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group m-b-0">
                                                    <input type="text" defaultValue placeholder="your email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <button className="btn btn-primary btn-round btn-block margin-0">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-lg-4 col-md-12">
                                    <div className="fcard about">
                                        <h5 className="title">About Hospitals</h5>
                                        <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern
                                            levels in the region catering to urban &amp; rural.</p>
                                        <p>A Health Care Provider of Western Approach, Hospitals is the most trusted multispecialty
                                            hospital.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="fcard links">
                                        <h5 className="title">Usefull Links</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <ul className="list-unstyled">
                                                    <li><Link to="about.html">About Us</Link></li>
                                                    <li><Link to="javascript:void(0);">Consultants</Link></li>
                                                    <li><Link to="javascript:void(0);">Working Hours</Link></li>
                                                    <li><Link to="javascript:void(0);">Procedures</Link></li>
                                                    <li><Link to="javascript:void(0);">Special Offers</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul className="list-unstyled">
                                                    <li><Link to="javascript:void(0);">Services</Link></li>
                                                    <li><Link to="javascript:void(0);">Healthy Foods</Link></li>
                                                    <li><Link to="javascript:void(0);">Appointments</Link></li>
                                                    <li><Link to="javascript:void(0);">Latest News</Link></li>
                                                    <li><Link to="javascript:void(0);">Certificates</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="fcard contact links">
                                        <h5 className="title">Contact Details</h5>
                                        <ul className="list-unstyled">
                                            <li><i className="zmdi zmdi-pin" />Park Drive, Varick Str NY 10012, USA</li>
                                            <li><i className="zmdi zmdi-email" />Getwell@Hospitals.com</li>
                                            <li><i className="zmdi zmdi-phone" />(123) 0200 12345 &amp; 7890</li>
                                            <li><i className="zmdi zmdi-time" />Mon-Friday: 9am to 18pm</li>
                                            <li><i className="zmdi zmdi-time" />Sat-Sunday: 10am to 16pm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <small>Copyright © 2018 Oreo Theme by <Link to="http://thememakker.com/" target="_blank">ThemeMakker</Link>
                                        </small>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                        <div className="up"><Link to="#header"><i className="zmdi zmdi-caret-up-circle" /></Link></div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="social float-md-right"><Link to="#"><i className="zmdi zmdi-facebook m-r-10" /></Link> <Link to="#"><i className="zmdi zmdi-twitter m-r-10" /></Link> <Link to="#"><i className="zmdi zmdi-dribbble m-r-10" /></Link> <Link to="#"><i className="zmdi zmdi-behance m-r-10" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default Footer
