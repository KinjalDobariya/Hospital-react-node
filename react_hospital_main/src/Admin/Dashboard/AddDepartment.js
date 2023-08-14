import React from 'react'
import Nav from './Nav'

export default function AddDepartment() {
  return (
    <div>
      <Nav />
      <div className='wrapper'>
        <div style={{ margin: '50px 70px' }}>
          <section className="content">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h3 className='text-center py-1 hed-color'>Add Department Form</h3>
                  <div className="card">
                    <div className="header">
                      <h2><strong>Add</strong> Departments<small>Description text here...</small> </h2>
                      <ul className="header-dropdown">
                        <li className="remove">
                          <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Departments Name" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                          </div>
                        </div>
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
                      <div className="row clearfix">
                        <div className="col-sm-12 text-center mt-4">
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
