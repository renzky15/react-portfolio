import React, { Component } from "react"

export default class About extends Component {
    render() {
        return (
            <section className="sec-2">
                <div className="main-container">
                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>More about me</h4>
                            <p style={{ textAlign: "justify" }}>
                                Hi I'm Renz Owen Santillan I have been creating
                                real world systems to enhance my skills. Our
                                thesis project selected as best capstone project
                                in our batch. I have experience working as a
                                freelance web developer and created a small
                                project. The last project I created when I was a
                                freelance developer is a POS system that can
                                help the business process more efficient. As of
                                now, I'm a Software Engineer in Stacktrek and
                                this is a great oppurtunity to develop my
                                skills.
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                My strength is my ability to create and convert
                                your business process into real world
                                application or system. And also all humans has
                                weaknesses too, difficulty in expressing and
                                explaning my ideas is one of my weaknesses.
                                Other weaknesses not yet been discovered lol.
                                What would I rather do If I have free time or
                                I'm stuck with an error ? First thing I will do
                                is to play basketball (PC games or real
                                basketball). Playing basketball is the only
                                sport I'm inlove with and It will be my best
                                stress reliever. Others is playing mobile games
                                and cooking.
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
                                <img
                                    id="about-img"
                                    src="images/IMG_01.jpg"
                                    alt="IMG_01"
                                />
                                <img
                                    id="about-img"
                                    src="images/IMG_02.jpg"
                                    alt="IMG_02"
                                />
                                <img
                                    id="about-img"
                                    src="images/IMG_03.jpg"
                                    alt="IMG_03"
                                />
                                <img
                                    id="about-img"
                                    src="images/IMG_02.jpg"
                                    alt="IMG_02"
                                />
                            </div>
                            <h3>Find me on this links:</h3>
                            <div className="link-list">
                                <a className="link" target="_blank" href="#">
                                    <i
                                        className="fa fa-linkedin-square fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a className="link" target="_blank" href="#">
                                    <i
                                        className="fa fa-facebook-square fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a className="link" target="_blank" href="#">
                                    <i
                                        className="fa fa-github-square fa-3x"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a className="link" target="_blank" href="#">
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
