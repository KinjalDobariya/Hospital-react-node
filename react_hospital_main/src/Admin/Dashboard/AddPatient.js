import React from 'react'
import Nav from './Nav'

export default function AddPatient() {
  return (
    <div>
      <Nav />
      <div style={{ margin: '50px 70px' }}>
        <div className='wrapper'>
          <section className="content">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h3 className='text-center py-1 hed-color' >Add Patient Form</h3>

                  <div className="card">
                    <div class="header">
                      <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                    </div>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone No." />
                          </div>
                        </div>
                      </div>
                      <div className="row clearfix">
                        <div className="col-sm-3">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="zmdi zmdi-calendar" />
                            </span>
                            <input type="date" className="form-control" placeholder="Enter date" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Age" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <select className="form-control show-tick">
                            <option value>- Gender -</option>
                            <option value={10}>Male</option>
                            <option value={20}>Female</option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Email" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea rows={4} className="form-control no-resize" placeholder="Description" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5 mb-3">
                          <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone file-color py-4" method="post" encType="multipart/form-data">
                            <div className="dz-message">
                              <div className="drag-icon-cph"> <i className="material-icons h1">touch_app</i> </div>
                              <h3>Drop files here or click to upload.</h3>
                            </div>
                            <div className="fallback">
                              <input name="file" type="file" multiple />
                            </div>
                          </form>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>

                    </div>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Doctor Name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Staff on Duty" />
                          </div>
                        </div>
                      </div>
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ward No." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="zmdi zmdi-calendar" />
                            </span>
                            <input type="date" className="datetimepicker form-control" placeholder="Please choose date & time..." />
                          </div>
                        </div>
                        <div className="text-center col-sm-12 mt-4">
                          <button type="submit" className="btn btn-primary btn-round mx-1">Submit</button>
                          <button type="submit" className="btn btn-default btn-round btn-simple mx-1">Cancel</button>
                        </div>
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
