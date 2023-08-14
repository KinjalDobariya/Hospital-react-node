import React from 'react'

function Loader() {
    return (
        <div> <div class="wrapper">
            <div id="loading" className="page-loader-wrapper">
                <div className="loader">
                    <div className="m-t-30"><img className="zmdi-hc-spin" src="assets/images/loader.svg" width={48} height={48} alt="Oreo" /></div>
                    <p>Please wait...</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Loader
