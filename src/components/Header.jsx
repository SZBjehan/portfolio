import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div class="headerr" id="Header">
            <ParticlesBg color="#000011" background-color="#000000" num={170} type="lines" />
            <div class="head-info">
                <div class="header-name"> Syed Ziaul Bin Bashar</div>
                <h3>
                    <Typed
                        className="typed-text"
                        strings={["ML Researcher", "Full Stack Developer", "Video Editor", "Data Analyst", "Software Engineer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop>
                    </Typed>
                </h3>
            </div>
            <div class="about-social">
                <a href="https://scholar.google.com/citations?user=XixKCJ0AAAAJ&hl=en" class="fa fa-brands fa-google-scholar"></a>
                <a href="https://www.linkedin.com/in/syed-ziaul-bin-bashar" class="fa fa-linkedin"></a>
                <a href="https://github.com/SZBjehan" class="fa fa-github"></a>
                <a href="https://www.facebook.com/szb.jehan" class="fa fa-facebook"></a>
            </div>
        </div>
    );
}
export default Header;