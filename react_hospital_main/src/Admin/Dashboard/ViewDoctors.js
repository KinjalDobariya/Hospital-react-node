import React from 'react'
import Nav from './Nav'

export default function ViewDoctors() {
  return (
    <div className='bg-color'>
      <Nav />
      <div className='wrapper'>
        <div className='mx-5 my-5 bg-color'>
          <section className="content">

            <div className="container-fluid">
              <div className='text-center'>
                <h3 className='text-center py-1 hed-color' style={{ textAlign: 'center' }}>All Doctors List</h3>
              </div>

              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="body">
                      <ul className="nav nav-tabs padding-0">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Permanent">Permanent</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Consultant">Consultant</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-content m-t-10">
                    <div className="tab-pane active" id="Permanent">
                      <div className="row clearfix">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-blue member-card doctor text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member1.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. John</h4>
                                <p className="text-muted">Dentist</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-khaki member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member2.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Amelia</h4>
                                <p className="text-muted">Gynecologist</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-blue member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member3.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Jack </h4>
                                <p className="text-muted">Dentist</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-parpl member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member4.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Jessica </h4>
                                <p className="text-muted">Nursing</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-pink member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member5.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Joseph </h4>
                                <p className="text-muted">Audiology</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-seagreen member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member6.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Charlie </h4>
                                <p className="text-muted">Physical Therapy</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-blue member-card doctor text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member7.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. William </h4>
                                <p className="text-muted">Dentist</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-seagreen member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member8.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Sophie </h4>
                                <p className="text-muted">Physical Therapy</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="Consultant">
                      <div className="row clearfix">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-khaki member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member2.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Amelia</h4>
                                <p className="text-muted">Gynecologist</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-blue member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member3.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Jack </h4>
                                <p className="text-muted">Dentist</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-pink member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member5.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Joseph </h4>
                                <p className="text-muted">Audiology</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="card xl-seagreen member-card doctor  text-center">
                            <div className="body">
                              <div className="member-thumb">
                                <img src="../assets/images/doctors/member6.png" className="img-fluid" alt="profile-image" />
                              </div>
                              <div className="detail">
                                <h4 className="m-b-0">Dr. Charlie </h4>
                                <p className="text-muted">Physical Therapy</p>
                                <ul className="social-links list-inline m-t-20 d-flex" style={{ justifyContent: 'center' }}>
                                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook mx-2" /></a></li>
                                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter mx-2" /></a></li>
                                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram mx-2" /></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div></div>
    </div>
  )
}
