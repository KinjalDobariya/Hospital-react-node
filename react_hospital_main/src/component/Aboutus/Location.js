import React from 'react'

function Location() {
    return (
        <div>
            <div class="wrapper">
                <section class="main-section">

                    {/* Our Location */}
                    <div className="our_location">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="section-title col-4" data-aos="fade-right">
                                    <h2><span>Our </span>Location</h2>
                                    <p>Description text here...</p>
                                </div>
                                <div className="section-title col-7" data-aos="fade-left">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div id="world-map-markers" style={{ height: 380 }} />
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <ul className="row location_list list-unstyled">
                                        <li className="col-lg-2 col-md-4 col-6">
                                            <div className="body xl-turquoise">
                                                <i className="zmdi zmdi-pin" />
                                                <h4 className="counter timer" data-from={0} data-to={453} data-speed={2500} data-fresh-interval={700}>453</h4>
                                                <span>America</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-2 col-md-4 col-6">
                                            <div className="body xl-khaki">
                                                <i className="zmdi zmdi-pin" />
                                                <h4 className="counter timer" data-from={0} data-to={124} data-speed={2500} data-fresh-interval={700}>124</h4>
                                                <span>Australia</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-2 col-md-4 col-6">
                                            <div className="body xl-parpl">
                                                <i className="zmdi zmdi-pin" />
                                                <h4 className="counter timer" data-from={0} data-to={215} data-speed={2500} data-fresh-interval={700}>215</h4>
                                                <span>Canada</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-2 col-md-4 col-6">
                                            <div className="body xl-salmon">
                                                <i className="zmdi zmdi-pin" />
                                                <h4 className="counter timer" data-from={0} data-to={155} data-speed={2500} data-fresh-interval={700}>155</h4>
                                                <span>India</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-2 col-md-4 col-6">
                                            <div className="body xl-blue">
                                                <i className="zmdi zmdi-pin" />
                                                <h4 className="counter timer" data-from={0} data-to={78} data-speed={2500} data-fresh-interval={700}>78</h4>
                                                <span>UK</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-2 col-md-4 col-6">
                                            <div className="body xl-slategray">
                                                <i className="zmdi zmdi-pin" />
                                                <h4 className="counter timer" data-from={0} data-to={55} data-speed={2500} data-fresh-interval={700}>55</h4>
                                                <span>Other</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Location */}
                </section>
            </div>
        </div>
    )
}

export default Location
