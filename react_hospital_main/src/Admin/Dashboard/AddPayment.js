import React from 'react'
import Nav from './Nav'

export default function AddPayment() {
  return (
    <div >
      <Nav />
      <div style={{ margin: '50px 70px' }}>
        <div className='wrapper'>
          <section className="content">
            <div className="container-fluid">
              <h3 className='text-center pb-0 pt-4 hed-color'>Add Payment Detail</h3>
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <div className="card">
                    <div className="header">
                      <h2><strong>Patients</strong> Information <small>Description text here...</small> </h2>

                    </div>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="number" className="form-control" placeholder="Payment Number" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Patient Name" />
                          </div>
                        </div>
                        <div className="col-sm-12 ">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Doctor Name" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="header">
                      <h2><strong>Payment</strong> Information <small>Description text here...</small> </h2>

                    </div>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-12 ">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Payment Date" />
                          </div>
                        </div>
                        <div className="col-sm-12 ">
                          <div className="form-group">
                            <input type="number" className="form-control" placeholder="Total Amount" />
                          </div>
                        </div>
                        <div className="col-sm-12 ">
                          <div className="form-group">
                            <input type="number" className="form-control" placeholder="Discount" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <select className="form-control show-tick mb-3 me-5" data-live-search="true">
                            <option value>-- Payment Method --</option>
                            <option>Cash</option>
                            <option>Cheque</option>
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            <option>Netbanking</option>
                            <option>Insurance</option>
                          </select>
                        </div>
                        <div className="col-sm-12 m-t-30 text-center mt-4">
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
