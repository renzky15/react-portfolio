import React, { Component } from "react"

export default class Projects extends Component {
    render() {
        return (
            <section className="sec-1">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>
                        Some of my projects created
                    </h3>
                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/IMG_03.jpg"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">Title</h6>
                                    <p className="post-intro">
                                        This is a sentence Test test
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/IMG_03.jpg"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">Title</h6>
                                    <p className="post-intro">
                                        This is a sentence Test test
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/IMG_03.jpg"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">Title</h6>
                                    <p className="post-intro">
                                        This is a sentence Test test
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
