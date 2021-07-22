
import BUCC from '../assets/BUCC.jpg';
import BUFC from '../assets/bufc.jpg';
import TripeGate from '../assets/logoTripegate.png'
import { Fade, Slide } from "react-reveal";

const Skills = () => {
    return (
        <div >

            <div class="skills" id="Skills">
                <div class="skills-title">Skills :</div>
                <Slide right duration={1500}>
                    <div>
                        <div class="s-box">
                            <div class="skills-box">
                                <h2 class="container skills-text bd-grid">Languages</h2>
                                <ul class="skills-text">
                                    <li>JAVA</li>
                                    <li>KOTLIN</li>
                                    <li>C, C++</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>

                            <div class="skills-box">
                                <h2 class="container frontend skills-text">FrontEnd</h2>
                                <ul class="skills-text">
                                    <li>ReactJS</li>
                                    <li>VueJS</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>

                            <div class="skills-box">
                                <h2 class="container backend skills-text">BackEnd</h2>
                                <ul class="skills-text">
                                    <li>Laravel</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>NodeJS</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>

                            <div class="skills-box">
                                <h2 class="container backend skills-text">Others</h2>
                                <ul class="skills-text">

                                    <li>REST API</li>
                                    <li>WordPress</li>
                                    <li>Wix</li>
                                    <li>GIT, BitBucket</li>
                                    <li>Latex</li>
                                    <li>Microsoft Office</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>

            <div class="experience">
                <div class="exp-title">Experience</div>
                <Fade bottom duration="1500">
                    <div>
                        <div class="exp-work">
                            <div class="work-section">
                                <a href="http://tripegate.com/"> <img class="skill-pic" src={TripeGate} alt="TRIPeGaTE Photo" /> </a>
                                <div class="exp-des">
                                    <a href="http://tripegate.com/" class="work-link"> TRIPeGate </a>
                                    <p class="exp-info">Dhaka - Bangladesh</p>
                                    <p class="exp-info">Software Engineer Intern</p>
                                    <p class="exp-info">March, 2021 - June, 2021</p>
                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://bracucc.org/"> <img class="skill-pic" src={BUCC} alt="BUCC Photo" /> </a>
                                <div class="exp-des">
                                    <a href="https://bracucc.org/" class="work-link"> BRAC University Computer Club (BUCC) </a>
                                    <p class="exp-info">Dhaka - Bangladesh</p>
                                    <p class="exp-info">Senior Executive</p>
                                    <p class="exp-info">January, 2019 - Present</p>
                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://www.facebook.com/BRACUFC/"> <img class="skill-pic" src={BUFC} alt="BUFC Photo" /> </a>
                                <div class="exp-des">
                                    <a href="https://www.facebook.com/BRACUFC/" class="work-link"> BRAC University Film Club (BUFC) </a>
                                    <p class="exp-info">Dhaka - Bangladesh</p>
                                    <p class="exp-info">Executive </p>
                                    <p class="exp-info">January, 2019 - Present</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </Fade>
            </div>

        </div >
    );
}
export default Skills;