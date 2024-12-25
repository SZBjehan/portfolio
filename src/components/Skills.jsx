
import BUCC from '../assets/BUCC.jpg';
import BUFC from '../assets/bufc.jpg';
import BRAClogo from '../assets/brac_logo.png';
import NMSU from '../assets/NM_State_University_logo_sm.png';
import RobiLogo from '../assets/robi.png';
import BRACUlogo2 from '../assets/bracu_logo2.png';
import TripeGate from '../assets/logoTripegate.png'
import Quantsys from '../assets/Quantsys.png'
import Unilever from '../assets/Unilever.png'
import { Fade, Slide } from "react-reveal";
import ParticlesBg from 'particles-bg'

const Skills = () => {
    return (
        <div>
            <div>
                <div class="pbg">
                    <ParticlesBg color="#222222" background-color="#000000" num={150} type="cobweb" />
                </div>
                <div class="skills" id="Skills">
                    <div class="skills-title">Skills :</div>
                    <Slide left duration={1500}>
                        <div>
                            <div class="s-box">

                                <div class="skills-box">
                                    <h2 class="container skills-text bd-grid">Languages</h2>
                                    <ul class="skills-text">
                                        <li>JAVA</li>
                                        <li>Python</li>
                                        <li>Julia</li>
                                        <li>C, C++</li>
                                        <li>JavaScript</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                                <div class="skills-box">
                                    <h2 class="container frontend skills-text">FrontEnd</h2>
                                    <ul class="skills-text">
                                        <li>ReactJS</li>
                                        <li>AngularJS</li>
                                        <li>VueJS</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>

                                <div class="skills-box">
                                    <h2 class="container backend skills-text">BackEnd</h2>
                                    <ul class="skills-text">
                                        <li>Spring Boot</li>
                                        <li>Laravel</li>
                                        <li>MongoDB</li>
                                        <li>Express</li>
                                        <li>NodeJS</li>
                                        <li>MySQL, NoSQL</li>
                                    </ul>
                                </div>

                                <div class="skills-box">
                                    <h2 class="container backend skills-text">Others</h2>
                                    <ul class="skills-text">
    
                                        <li>PyTorch</li>
                                        <li>Tensorflow</li>
                                        <li>REST API</li>
                                        <li>Latex</li>
                                        <li>Jira</li>
                                        <li>GIT, BitBucket</li>
                                        <li>Microsoft Office</li>
                                        <li>Power BI</li>
                                        <li>Agile & Scrum</li>
                                        <li>WordPress, Wix</li>
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
                                    <a href="https://nmsu.edu/"> <img class="skill-pic" src={NMSU} alt="NMSU logo" /> </a>
                                    <div class="exp-des">
                                        <a href="https://nmsu.edu/" class="work-link"> New Mexico State University </a>
                                        <p class="exp-info">Las Cruces, NM, US</p>
                                        <p class="exp-info">Graduate Research Assistant</p>
                                        <p class="exp-info">September, 2024 - Present</p>
                                    </div>
                                </div>
                                <div class="work-section">
                                    <a href="https://www.unilever.com/ucl-bd/"> <img class="skill-pic" src={Unilever} alt="Unilever logo" /> </a>
                                    <div class="exp-des">
                                        <a href="https://www.unilever.com/ucl-bd//" class="work-link"> Unilever Bangladesh Limited </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Supply Chain Data Automation, IT</p>
                                        <p class="exp-info">February, 2023 - August, 2024</p>
                                    </div>
                                </div>
                                <div class="work-section">
                                    <a href="https://www.Quantsys.com/"> <img class="skill-pic" src={Quantsys} alt="Quantsys logo" /> </a>
                                    <div class="exp-des">
                                        <a href="http://www.Quantsys.com/" class="work-link"> Quantsys </a>
                                        <p class="exp-info">USA - Remote</p>
                                        <p class="exp-info">Java Developer</p>
                                        <p class="exp-info">February, 2023 - April, 2023</p>
                                    </div>
                                </div>

                                <div class="work-section">
                                    <a href="https://www.reddotdigitalit.com/"> <img class="skill-pic" src={RobiLogo} alt="ROBI logo" /> </a>
                                    <div class="exp-des">
                                        <a href="https://www.reddotdigitalit.com/" class="work-link"> RedDot Digital IT - ROBI </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Software Developer Intern</p>
                                        <p class="exp-info">September, 2022 - January, 2023</p>
                                    </div>
                                </div>
                                <div class="work-section">
                                    <a href="http://www.brac.net/"> <img class="skill-pic" src={BRAClogo} alt="BRAC logo" /> </a>
                                    <div class="exp-des">
                                        <a href="http://www.brac.net/" class="work-link"> BRAC </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Intern - Operations IT</p>
                                        <p class="exp-info">April, 2022 - June, 2022</p>
                                    </div>
                                </div>
                                <div class="work-section">
                                    <a href="https://www.bracu.ac.bd/"> <img class="skill-pic" src={BRACUlogo2} alt="BRACU logo" /> </a>
                                    <div class="exp-des">
                                        <a href="https://www.bracu.ac.bd/" class="work-link"> BRAC University </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Student Tutor - MNS Department</p>
                                        <p class="exp-info">February, 2022 - September, 2022</p>
                                    </div>
                                </div>
                                <div class="work-section">
                                    <a href="http://tripegate.com/"> <img class="skill-pic" src={TripeGate} alt="TRIPeGaTE Photo" /> </a>
                                    <div class="exp-des">
                                        <a href="http://tripegate.com/" class="work-link"> TRIPeGate </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Software Engineer Intern</p>
                                        <p class="exp-info">March, 2021 - June, 2021</p>
                                    </div>
                                </div>
                                {/* <div class="work-section">
                                    <a href="https://bracucc.org/"> <img class="skill-pic" src={BUCC} alt="BUCC Photo" /> </a>
                                    <div class="exp-des">
                                        <a href="https://bracucc.org/" class="work-link"> BRAC University Computer Club (BUCC) </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Senior Executive</p>
                                        <p class="exp-info">January, 2019 - March, 2021</p>
                                    </div>
                                </div>
                                <div class="work-section">
                                    <a href="https://www.facebook.com/BRACUFC/"> <img class="skill-pic" src={BUFC} alt="BUFC Photo" /> </a>
                                    <div class="exp-des">
                                        <a href="https://www.facebook.com/BRACUFC/" class="work-link"> BRAC University Film Club (BUFC) </a>
                                        <p class="exp-info">Dhaka - Bangladesh</p>
                                        <p class="exp-info">Executive </p>
                                        <p class="exp-info">January, 2019 - April, 2021</p>
                                    </div>
                                </div> */}


                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    );
}
export default Skills;