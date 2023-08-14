import React from 'react'
import Nav from './Nav'

export default function ViewPayment() {
  return (
    <div>
      <div className='bg-color'>
        <Nav/>
        <div className='wrapper'>
          <div className='mx-5 my-5 bg-color'>
            <section className="content">
              <div className="container-fluid">
                <div className='text-center'>
                  <h3 className='text-center py-1 hed-color' style={{ textAlign: 'center' }}>All Payment Details</h3>
                </div>
                {/* Basic Examples */}
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="header">
                        <h2><strong>All Payment List</strong> </h2>
                      </div>
                      <div className="body">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                            <thead>
                              <tr className='text-center'>
                                <th>Bill No</th>
                                <th>Bill date</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Charges</th>
                                <th>Tax</th>
                                <th>Discount</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>21</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>02/21/2017</td>
                                <td>Lori Perkins</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>22</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Jessica Patterson</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>105</td>
                                <td>02/21/2017</td>
                                <td>Lori Perkins</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>56</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>34</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Jessica Patterson</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>21</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>02/21/2017</td>
                                <td>Lori Perkins</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>22</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>02/21/2017</td>
                                <td>Christina Thomas</td>
                                <td>Jessica Patterson</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                              <tr>
                                <td>105</td>
                                <td>02/21/2017</td>
                                <td>Lori Perkins</td>
                                <td>Juan Freeman</td>
                                <td>102</td>
                                <td>10</td>
                                <td>10%</td>
                                <td>210</td>
                              </tr>
                            </tbody>
                          </table>
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
    </div>
  )
}
