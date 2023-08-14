import React from 'react'

function Blogbanner() {
    return (
        <div>
            <div class="wrapper">
            {/* start hero */}
            <section id="hero">
                <div className="inner-banner" style={{ backgroundImage: 'url(assets/images/banner-blog.jpg)' }}>
                    <div className="container">
                        <h3 className="title">Our <br /><big><strong>Blog</strong></big></h3>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}

export default Blogbanner
