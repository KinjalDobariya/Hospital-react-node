import React from 'react'

function Aboutdetail() {
    return (
        <div>


            <div class="wrapper">
                <section class="main-section">
                    {/* About Us Section */}
                    <div className="about-us-section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-right">
                                    <h2><span>About </span>Us</h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-4 col-sm-6">
                                    <div className="box-img box-shadow" data-aos="fade-up">
                                        <img src="assets/images/about-page-img.jpg" alt />
                                        <span className="section-line" data-aos="fade-right" />
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-6">
                                    <div className="page-text">
                                        <div className="section-top" data-aos="fade-up" data-aos-duration={4000}>
                                            <p><strong>Oreo Hospital</strong> isIt is a long established fact that a reader will be
                                                distracted by the readable content.</p>
                                        </div>
                                        <p data-aos="fade-up" data-aos-duration={4000}>It is a long established fact that a reader will be distracted by the readable content
                                            more or less normal distribution of letters opposed.</p>
                                        <div className="mission-vision" data-aos="fade-up" data-aos-duration={4000}>
                                            <div className="grp-area mission">
                                                <i className="zmdi zmdi-favorite" />
                                                <h5>Our Mission</h5>
                                                <p>Reader will be distracted by the readable content of a page when looking at its
                                                    layout the point of using more or less normal distribution.</p>
                                            </div>
                                            <div className="grp-area vision">
                                                <i className="zmdi zmdi-eye" />
                                                <h5>Our Vision</h5>
                                                <p>Reader will be distracted by the readable content of a page when looking at its
                                                    layout the point of using more or less normal distribution.</p>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <i className="zmdi zmdi-thumb-up" />
                                                        <p>Idea of denouncing pleasure and praising.</p>
                                                    </li>
                                                    <li>
                                                        <i className="zmdi zmdi-thumb-up" />
                                                        <p>Pleasure and praising pain was complete system.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="opening-hours" data-aos="fade-up" data-aos-duration={4000}>
                                            <h6><i className="zmdi zmdi-time" /> Opening Hours</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <label><i className="zmdi zmdi-chevron-right" /> Saturday</label>
                                                    <span>9:00 - 20:00</span>
                                                </li>
                                                <li>
                                                    <label><i className="zmdi zmdi-chevron-right" /> Sunday</label>
                                                    <span>9:00 - 20:00</span>
                                                </li>
                                                <li>
                                                    <label><i className="zmdi zmdi-chevron-right" /> Monday - Friday</label>
                                                    <span>9:00 - 20:00</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About Us Section */}

                </section>


            </div>
        </div>
    )
}

export default Aboutdetail
