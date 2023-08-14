import React from 'react'

function About() {
    return (
        <div>
            <div class="wrapper">

                {/* Content Area */}
                <section className="main-section">
                    {/* Home About Us Section */}
                    <div className="about-us-section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-up">
                                    <h2><span>About </span>Us</h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="box-img box-shadow" data-aos="fade-up">
                                        <img src="assets/images/about-img.jpg" alt />
                                        <span className="section-line" data-aos="fade-up" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-8">
                                    <div className="common-cnt" data-aos="fade-up">
                                        <div className="section-top">
                                            <p><strong>Oreo Hospital</strong> isIt is a long established fact that a reader will be
                                                distracted by the readable content.</p>
                                        </div>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and goingered the
                                            undoubtable source.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form, by injected humour</p>
                                        <p>
                                            <a className="btn btn-primary btn-simple btn-round margin-0" data-aos="flip-up">View More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home About Us Section */}
                </section>
            </div>
        </div>
    )
}

export default About
