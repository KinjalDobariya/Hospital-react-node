import React from 'react'

function Banner() {
    return (
        <div>
            <div className="wrapper">
                <section id="hero">
                    <div className="slider" style={{ backgroundImage: 'url(assets/images/slider1.jpg)' }}>
                        <div className="container">
                            <div className="slider_text">
                                <h3 className="title"><span>Welcome to</span> <br />
                                    Oreo <strong>Hospital</strong></h3>
                                <p className="sub-title">Contrary to popular belief, Lorem Ipsum is not simply random text.</p><br />
                                <button className="btn btn-primary btn-round">View More</button>
                            </div>
                            <div className="slider_form row">
                                <p className="col-12">Make an Appointment</p>
                                <div className="col-lg-4 col-md-6">
                                    <div className="form-group">
                                        <input type="text" defaultValue placeholder="Enter Name" className="form-control m-b-15" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <input type="text" defaultValue placeholder="Enter Mobile" className="form-control m-b-15" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <input type="text" defaultValue placeholder="Enter Date" className="form-control m-b-15" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <select className="form-control m-b-15">
                                        <option selected="selected">Select Doctor</option>
                                        <option>Marc Parcival</option>
                                        <option>Alen Bailey</option>
                                        <option>Basil Andrew</option>
                                        <option>Giles Franklin</option>
                                        <option>Edgar Denzil</option>
                                        <option>Garfield Feris</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <select className="form-control">
                                        <option selected="selected">Select Department</option>
                                        <option>Cardiology</option>
                                        <option>Pulmonology</option>
                                        <option>Gynecology</option>
                                        <option>Neurology</option>
                                        <option>Urology</option>
                                        <option>Gastrology</option>
                                        <option>Pediatrician</option>
                                        <option>Laboratory</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <button className="btn btn-primary btn-round btn-block m-t-0 m-b-0">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

            </div>
            )
}

            export default Banner
