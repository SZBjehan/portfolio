import React, { useState } from "react";



const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { contactName, contactEmail, contactSubject, contactMessage } = e.target.elements;
        let details = {
            contactName: contactName.value,
            contactEmail: contactEmail.value,
            contactSubject: contactSubject.value,
            contactMessage: contactMessage.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div class="contact" id="Contact">
            <div>
                <div class="contact-title container"> Contact Me </div>
                {/* <div class="container">
                    <div class="grid-container">
                        <h2>Location</h2>
                    </div>
                    <div class="grid-container">
                        <h2></h2>
                    </div>
                    <div class="grid-container"></div>
                </div> */}
            </div>
            <div class="con-div">
                {/* <div class="contact-form">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div >
                                <label htmlFor="contactName" class="contact-text">
                                    Name:  <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactName"
                                    name="contactName"
                                    class="contact-box"
                                />
                            </div>
                            <br />
                            <div >
                                <label htmlFor="contactEmail" class="contact-text">
                                    Email Address: <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactEmail"
                                    name="contactEmail"
                                    class="contact-box"
                                />
                            </div>
                            <br />
                            <div >
                                <label htmlFor="contactSubject" class="contact-text">
                                    Subject: <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size="35"
                                    id="contactSubject"
                                    name="contactSubject"
                                    class="contact-box"
                                />
                            </div>
                            <br />
                            <div >
                                <label htmlFor="contactMessage" class="contact-text">
                                    Message: <span className="required">*</span>
                                </label>
                                <textarea
                                    name="contactMessage"
                                    id="contactMessage"
                                    cols="40"
                                    rows="3"
                                    class="contact-box"
                                >

                                </textarea>
                            </div>
                            <br />
                            <br />
                            <div>
                                <button class="contact-submit" type="submit">{status}</button>
                            </div>
                        </fieldset>
                    </form>
                </div> */}
                <div class="contact-footer">
                    <h2 class="foot-h2"> Syed Ziaul Bin Bashar </h2>
                    <p class="foot-p">ziaulbinbashar@gmail.com</p>
                    <p class="foot-p">+88 01711692450</p>
                    <div class="contact-social">
                        <a href="https://www.linkedin.com/in/syed-ziaul-bin-bashar" class="fa fa-linkedin"></a>
                        <a href="https://github.com/SZBjehan" class="fa fa-github"></a>
                        <a href="https://www.facebook.com/szb.jehan" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/szb_jehan/" class="fa fa-instagram"></a>
                        <a href="https://www.instagram.com/szb_jehan/" class="fa fa-fiver"></a>
                    </div>
                </div>
            </div>
            <div>
                <p class="copyright">©2021 copyright | all right reserved</p>
            </div>
        </div>
    );
}
export default Contact;