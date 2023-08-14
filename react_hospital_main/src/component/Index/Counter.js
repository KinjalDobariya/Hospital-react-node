import React from 'react'

function Counter() {
    return (
        <div>
            <div class="wrapper">

                {/* Content Area */}
                <section className="main-section">
                    {/* Home Fun Fact */}
                    <div className="fun-fact">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-account" />
                                        <span className="counter timer" data-from={0} data-to={652} data-speed={2500} data-fresh-interval={700}>652</span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-favorite" />
                                        <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
                                        <p>Heart Transplant</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-thumb-up" />
                                        <span className="counter timer" data-from={0} data-to={52} data-speed={2500} data-fresh-interval={700}>52</span>
                                        <p>Years Of Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-mood" />
                                        <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
                                        <p>Well Smiley Faces</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home Fun Fact */}
                </section>
            </div>
        </div>
    )
}

export default Counter
