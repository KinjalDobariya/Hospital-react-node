import React from 'react'

function MServices() {
    return (
        <div>
            <div class="wrapper">
                <section class="main-section">
                    {/* Services List */}
                    <div className="department-list services-list">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-right">
                                    <h2><span>Most </span>Popular Services</h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row" data-aos="flip-up">
                                <div className="col-md-4 col-sm-6">
                                    <div className="department-box box-img-cnt">
                                        <div className="box-img"><img src="assets/images/service-1.png" alt /></div>
                                        <div className="box-cnt">
                                            <h4>Routine CheckUp</h4>
                                            <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                                            <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="department-box box-img-cnt">
                                        <div className="box-img"><img src="assets/images/service-2.png" alt /></div>
                                        <div className="box-cnt">
                                            <h4>Medical Counseling</h4>
                                            <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                                            <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="department-box box-img-cnt">
                                        <div className="box-img"><img src="assets/images/service-3.png" alt /></div>
                                        <div className="box-cnt">
                                            <h4>Medicine Research</h4>
                                            <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                                            <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services List */}
                </section>
            </div>
        </div>
    )
}

export default MServices
