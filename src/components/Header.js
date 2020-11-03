import React, { Component } from "react"

export default class Header extends Component {
    render() {
        return (
            <section className="sec-1">
                <div className="main-container">
                    <div className="greeting-wrapper">
                        <h1>Howdy, I'm Renz</h1>
                    </div>
                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            <div className="dots-wrapper">
                                <div id="dot-1" className="browser-dot"></div>
                                <div id="dot-2" className="browser-dot"></div>
                                <div id="dot-3" className="browser-dot"></div>
                            </div>
                            <ul id="navigation">
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="left-column">
                            <img
                                id="profile-img"
                                src="images/IMG_00.jpg"
                                alt="IMG_00"
                            />
                            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
                                Personalize Theme:
                            </h5>
                            <div id="theme-options-wrapper">
                                <div
                                    data-mode="light"
                                    id="light-mode"
                                    className="theme-dot"
                                />
                                <div
                                    data-mode="blue"
                                    id="blue-mode"
                                    className="theme-dot"
                                />
                                <div
                                    data-mode="green"
                                    id="green-mode"
                                    className="theme-dot"
                                />
                                <div
                                    data-mode="purple"
                                    id="purple-mode"
                                    className="theme-dot"
                                />
                            </div>
                            <p id="settings-note">
                                *Theme settings will be saved for <br /> your
                                next visit
                            </p>
                        </div>
                        <div className="right-column">
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner" />
                                    <div id="corner-tr" className="corner" />
                                    <h3>What I do</h3>
                                    <p>
                                        I'm currently a Web Developer and
                                        exploring React JS framework.
                                    </p>
                                    <div id="corner-bl" className="corner" />
                                    <div id="corner-br" className="corner" />
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
