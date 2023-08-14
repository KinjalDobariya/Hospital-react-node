import React from 'react'

function Aboutbanner() {
    return (
        <div>
            <div class="wrapper">
                {/* start hero */}
                <section id="hero">
                    <div className="inner-banner" style={{ backgroundImage: 'url(assets/images/banner-about.jpg)' }}>
                        <div className="container">
                            <h3 className="title">About Us<br /><big>Oreo <strong>Hospital</strong></big></h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Aboutbanner
