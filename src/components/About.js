import React, { Component } from "react"

export default class About extends Component {
    render() {
        return (
            <section className="sec-2">
                <div className="main-container">
                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>More about me</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consectetur error expedita,
                                saepe dolore iusto, unde veniam magnam
                                voluptatem aperiam excepturi corrupti, nam enim
                                eveniet nisi aliquam odio repellendus vero
                                animi.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consectetur error expedita,
                                saepe dolore iusto, unde veniam magnam
                                voluptatem aperiam excepturi corrupti, nam enim
                                eveniet nisi aliquam odio repellendus vero
                                animi.
                            </p>
                            <hr />
                            <h4>TOP EXPERTISE</h4>
                            <p>
                                Fullstack developer with primary focus on PHP +
                                React:{" "}
                                <a
                                    target="_blank"
                                    href="RSantillanResumeV1.pdf"
                                >
                                    Download Resume
                                </a>
                            </p>
                            <div id="skills">
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>REST API</li>
                                </ul>
                                <ul>
                                    <li>Google Maps API</li>
                                    <li>Heroku</li>
                                    <li>HTML/CSS</li>
                                    <li>Bootstrap</li>
                                    <li />
                                </ul>
                            </div>
                        </div>
                        <div className="social-links">
                            <div className="social-img">
                                <img id="about-img" src="images/IMG_01.jpg" />
                                <img id="about-img" src="images/IMG_01.jpg" />
                                <img id="about-img" src="images/IMG_01.jpg" />
                                <img id="about-img" src="images/IMG_01.jpg" />
                            </div>
                            <h3>Find me on this links:</h3>
                            <div className="link-list">
                                <a target="_blank" href="#">
                                    <i
                                        className="fa fa-linkedin-square fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a target="_blank" href="#">
                                    <i
                                        className="fa fa-facebook-square fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a target="_blank" href="#">
                                    <i
                                        className="fa fa-github-square fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a target="_blank" href="#">
                                    <i
                                        className="fa fa-skype fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
