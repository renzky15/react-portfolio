import React, { Component } from "react"

export default class Projects extends Component {
    render() {
        return (
            <section className="sec-1">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>React Projects</h3>
                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/prac_01.png"
                                    alt="prac_01"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">
                                        React Netflix Clone
                                    </h6>
                                    <p className="post-intro">
                                        Practicing React Hooks (useState,
                                        useEffect) and I use the TMDB API for
                                        the data
                                    </p>
                                    <a href="https://owatch-app.web.app/">
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/pos-banner.png"
                                    alt="prac_02"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">
                                        Beta POS System
                                    </h6>
                                    <p className="post-intro">
                                        React Redux + Firebase Authentication
                                        Test Account Username: test123@gmail.com
                                        Password: qwerty123
                                    </p>
                                    <a href="https://epic-torvalds-fa40d7.netlify.app/">
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/MERN_app.png"
                                    alt="MERN_app.jpg"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">
                                        Rich Man's Cashflow
                                    </h6>
                                    <p className="post-intro">
                                        My first MERN stack app
                                    </p>
                                    <a href="https://cryptic-harbor-12376.herokuapp.com/">
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img
                                    className="thumbnail"
                                    src="images/IMG_04.png"
                                    alt="MERN_app.jpg"
                                />
                                <div className="post-preview">
                                    <h6 className="post-title">
                                        Task Scheduler App
                                    </h6>
                                    <p className="post-intro">
                                        React Redux CRUD API
                                    </p>
                                    <a href="https://renzky15.github.io/task-schedule/">
                                        Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
