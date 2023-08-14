import React from 'react'

function Dbanner() {
  return (
    <div>
      <div class="wrapper">
        {/* start hero */}
        <section id="hero">
          <div className="inner-banner" style={{ backgroundImage: 'url(assets/images/banner-department.jpg)' }}>
            <div className="container">
              <h3 className="title">Oreo Hospital<br /><big><strong>Departments</strong></big></h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dbanner
