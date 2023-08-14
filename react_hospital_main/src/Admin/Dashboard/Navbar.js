import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-transparent authentication">
                <div className="container">
                    <div className="navbar-translate n_logo">
                        <a className="navbar-brand" href="javascript:void(0);" title target="_blank">Oreo</a>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0);">Search Result</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
                                    <i className="zmdi zmdi-twitter" />
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
                                    <i className="zmdi zmdi-facebook" />
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">
                                    <i className="zmdi zmdi-instagram" />
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-white btn-round" href="/register">SIGN UP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
