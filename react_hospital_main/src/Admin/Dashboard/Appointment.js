import React from 'react'
import Nav from './Nav'
import Footer from '../../component/Footer'
import { Form } from 'react-router-dom'

function Appointment() {
  return (
    <div>
      <Nav />
      <div class="wrapper">
        <section className="content">
          <div className="block-header" style={{ textAlign: 'center' }}>
            <h3 className='text-center py-1 hed-color'>Book Appointment</h3>
          </div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                  <div className="header">
                    <h2><strong>Book</strong> Appointment<small>Description text here...</small> </h2>
                    <ul className="header-dropdown">
                      <li className="remove">
                        <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                      </li>
                    </ul>
                  </div>
                  <form>
                  <div className="body">
                    <div className="row clearfix">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Date of Birth" />
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
                        <select className="form-control show-tick">
                          <option value>- Service -</option>
                          <option>Select Service</option>
                          <option>Dental Checkup</option>
                          <option>Full Body Checkup</option>
                          <option>ENT Checkup</option>
                          <option>Heart Checkup</option>
                        </select>
                      </div>
                      <div className="col-sm-3">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-calendar" />
                          </span>
                          <input type="text" className="form-control datetimepicker" placeholder="Please choose date & time..." />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Enter Your Email" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-sm-12 text-center">
                        <button type="submit" className="btn btn-primary btn-round">Submit</button>
                        <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Appointment
