import React from 'react'
import '../../App.css'
import Nav from './Nav'
export default function ViewDepartment() {
  return (
    <div className='bg-color'>
      <Nav />
      <div className='wrapper'>
        <div className='mx-5 my-5 bg-color'>
          <section className="content">

            <div className="container-fluid">
              <div className='text-center'>
                <h3 className='text-center py-1 hed-color' style={{ textAlign: 'center' }}>All Department List</h3>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card1 project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image1.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Cardiology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>How all this mistaken al idea of denouncing pleasure praisings pain was complete[...]</p>
                        <a href="more-Departments.html" className="btn btn-primary btn-simple btn-round">More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card1 project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image2.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Pulmonology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>Who chooses to enjoy a pleasure that has consquences, or one who avoids a pain.[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card1 project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image3.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Gynecology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>Who chooses to enjoy a pleasure that has annoying, or one who avoids a pain.[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image4.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Neurology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>How all this mistaken al idea of denouncing pleasure praisings pain was complete[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image5.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Urology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>Who chooses to enjoy a pleasure that has consquences, or one who avoids a pain.[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image6.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Gastrology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>Who chooses to enjoy a pleasure that has annoying, or one who avoids a pain.[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image7.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Pediatrician</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>There anyone loves pursue or desires to pain sed of itself because pain occasionally[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image8.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Laboratory</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>Who chooses to enjoy a pleasure that has consquences, or one who avoids a pain.[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card project_widget">
                    <div className="pw_img">
                      <img className="img-fluid" src={require('./images/image3.jpg')} alt="About the image" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>Gastrology</h6>
                        <ul className="list-unstyled team-info1 margin-0 p-t-15 d-flex">
                          <li className="m-r-15"><small>Team</small></li>
                          <li><img src="./assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                          <li><img src="./assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                          <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                        </ul>
                      </div>
                      <div className="pw_meta">
                        <p>Take a trivial example, which of ever undertake laborous physically exercise some[...]</p>
                        <button className="btn btn-primary btn-simple btn-round">More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
