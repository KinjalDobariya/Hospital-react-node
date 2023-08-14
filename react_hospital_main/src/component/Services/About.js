import React from 'react'

function About() {
    return (
        <div>
            <div class="wrapper">

                {/* Content Area */}
                <section className="main-section">
                    {/* About Us Section */}
                    <div className="service-section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-right">
                                    <h2><span>Welcome </span>Oreo Hospital</h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-sm-12">
                                    <div className="service-cnt">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="services-btn-grp">
                                        <div className="find-doctor service-btn float-left">
                                            <a href="javascript:void(0);" className="text-center">
                                                <i className="zmdi zmdi-account-add" />
                                                <h4><span>Find Search</span>A Doctor</h4>
                                            </a>
                                        </div>
                                        <div className="book-appoitntment service-btn float-left">
                                            <a href="javascript:void(0);" className="text-center">
                                                <i className="zmdi zmdi-phone" />
                                                <h4><span>Book Appointment</span>+ 44 12245 12545</h4>
                                            </a>
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

export default About
