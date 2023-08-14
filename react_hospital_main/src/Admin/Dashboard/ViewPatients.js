import React from 'react'
import Nav from './Nav'

export default function ViewPatients() {
  return (
    <div>
      <div className='bg-color'>
        <Nav/>
        <div className='wrapper'>
          <div className='mx-5 my-5 bg-color'>
            <section classname="content">
              <div classname="container-fluid">
                <h3 className='text-center py-1 hed-color' style={{ textAlign: 'center' }}>All Patient List</h3>

                <div className="row clearfix">
                  <div className="col-md-12">
                    <div className="card patients-list">
                      <div className="header">
                        <h2><strong>Patients</strong> List</h2>

                      </div>
                      <div className="body">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs padding-0">
                          <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All">All</a></li>
                          <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#USA">USA</a></li>
                          <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India">India</a></li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content m-t-10">
                          <div className="tab-pane table-responsive active" id="All">
                            <table className="table m-b-0 table-hover">
                              <thead>
                                <tr>
                                  <th>Media</th>
                                  <th>Patients ID</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Address</th>
                                  <th>Number</th>
                                  <th>Last Visit</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00598</span></td>
                                  <td>Daniel</td>
                                  <td>32</td>
                                  <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                  <td>404-447-6013</td>
                                  <td>11 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar2.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00258</span></td>
                                  <td>Alexander</td>
                                  <td>22</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>15 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar3.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00369</span></td>
                                  <td>Richard</td>
                                  <td>26</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>16 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar4.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00147</span></td>
                                  <td>Samuel</td>
                                  <td>45</td>
                                  <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                  <td>404-447-6013</td>
                                  <td>17 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar5.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00123</span></td>
                                  <td>Stephen</td>
                                  <td>55</td>
                                  <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                  <td>404-447-6013</td>
                                  <td>18 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00456</span></td>
                                  <td>Joseph</td>
                                  <td>27</td>
                                  <td>70 Bowman St. South Windsor, CT 06074</td>
                                  <td>404-447-6013</td>
                                  <td>19 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar2.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00789</span></td>
                                  <td>Cameron</td>
                                  <td>38</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>19 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar3.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00987</span></td>
                                  <td>Alex</td>
                                  <td>39</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>20 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar4.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00951</span></td>
                                  <td>James</td>
                                  <td>32</td>
                                  <td>44 Shirley Ave. West Chicago, IL 60185</td>
                                  <td>404-447-6013</td>
                                  <td>22 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00953</span></td>
                                  <td>charlie</td>
                                  <td>51</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>22 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar5.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00984</span></td>
                                  <td>William</td>
                                  <td>35</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>22 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar2.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00934</span></td>
                                  <td>thomas</td>
                                  <td>26</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>29 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane table-responsive" id="USA">
                            <table className="table m-b-0 table-hover">
                              <thead>
                                <tr>
                                  <th>Media</th>
                                  <th>Patients ID</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Address</th>
                                  <th>Number</th>
                                  <th>Last Visit</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00598</span></td>
                                  <td>Daniel</td>
                                  <td>32</td>
                                  <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                  <td>404-447-6013</td>
                                  <td>11 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar2.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00258</span></td>
                                  <td>Alexander</td>
                                  <td>22</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>15 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00456</span></td>
                                  <td>Joseph</td>
                                  <td>27</td>
                                  <td>70 Bowman St. South Windsor, CT 06074</td>
                                  <td>404-447-6013</td>
                                  <td>19 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar2.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00789</span></td>
                                  <td>Cameron</td>
                                  <td>38</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>19 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar3.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00987</span></td>
                                  <td>Alex</td>
                                  <td>39</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>20 Jan 2018</td>
                                  <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar4.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00951</span></td>
                                  <td>James</td>
                                  <td>32</td>
                                  <td>44 Shirley Ave. West Chicago, IL 60185</td>
                                  <td>404-447-6013</td>
                                  <td>22 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00953</span></td>
                                  <td>charlie</td>
                                  <td>51</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>22 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar2.jpg" alt="abc" /></span></td>
                                  <td><span className="list-name">KU 00934</span></td>
                                  <td>thomas</td>
                                  <td>26</td>
                                  <td>123 6th St. Melbourne, FL 32904</td>
                                  <td>404-447-6013</td>
                                  <td>29 Jan 2018</td>
                                  <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                              </tbody>
                            </table>
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
    </div>
  )
}
