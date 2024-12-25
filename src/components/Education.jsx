import BRACUlogo from '../assets/bracu_logo.png';
import NMSU from '../assets/NM_State_University_logo_sm.png';
import ipscLogo from '../assets/ipscLogo.jpg';
import { Fade, Slide } from "react-reveal";


const Education = () => {
    return (
        <div class="education" id="Education">
            <div class="edu">Education</div>
            <Fade bottom duration="1500">
                <div>

                    <div class="edu-work">
                        <div class="edu-des">
                            <a href="https://nmsu.edu/"><img class="edu-pic" src={NMSU} alt="NMSU Photo" /> </a>
                            <div>
                                <a href="https://nmsu.edu/" class="edu-link"> New Mexico State University </a>
                                <b><p class="edu-info">Doctor of Philosophy - Computer Science</p></b>
                                <p class="edu-info">1st year, CGPA <span class="number"> 4.00</span></p>
                                <i><p class="edu-info"></p></i>
                                <p class="edu-info">August, 2024 - Present</p>
                            </div>
                        </div>
                        <div class="edu-des">
                            <a href="https://www.bracu.ac.bd/"><img class="edu-pic" src={BRACUlogo} alt="BRACU Photo" /> </a>
                            <div>
                                <a href="https://www.bracu.ac.bd/" class="edu-link"> BRAC University </a>
                                <b><p class="edu-info">Bachelor of Science in Computer Science and Engineering</p></b>
                                {/* <p class="edu-info">8th Semester ongoing with CGPA <span class="number"> 3.72</span></p> */}
                                <i><p class="edu-info">Graduated</p></i>
                                <p class="edu-info">January, 2019 - December, 2022</p>
                            </div>
                        </div>
                        <div class="edu-des">
                            <a href="https://www.ipscctg.edu.bd/"><img class="edu-pic" src={ipscLogo} alt="IPSC Photo" /> </a>
                            <div>
                                <a href="https://www.ipscctg.edu.bd/" class="edu-link"> Ispahani Public School & College </a>
                                <p class="edu-info">Higher Secondary School Certificate</p>
                                {/* <p class="edu-info">GPA-4.25 (2016 - 2018)</p> */}
                                <p class="edu-info">Secondary School Certificate</p>
                                <p class="edu-info">Chittagong, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default Education;