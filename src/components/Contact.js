import React, { Component } from "react"

export default class Contact extends Component {
    render() {
        return (
            <section className="sec-2">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>Get in touch</h3>
                    <form id="contact-form">
                        <label>Name</label>
                        <input
                            className="input-field"
                            type="text"
                            name="name"
                        />
                        <label>Subject</label>
                        <input
                            className="input-field"
                            type="text"
                            name="subject"
                        />
                        <label>Email</label>
                        <input
                            className="input-field"
                            type="text"
                            name="email"
                        />
                        <label>Message</label>
                        <textarea
                            className="input-field"
                            type="text"
                            name="message"
                            defaultValue={" "}
                        />
                        <input
                            id="submit-btn"
                            type="submit"
                            defaultValue="Send"
                        />
                    </form>
                </div>
            </section>
        )
    }
}
