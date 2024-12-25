import Photo from '../assets/CV_pic.JPG';
import pdfCV from '../assets/CV_SyedZiaulBinBashar.pdf';
import { Fade, Slide } from "react-reveal";

const About = () => {
    return (
        <div class="aboutme" id="About">
            <Fade duration={2000}>
                <div class="pro-p">
                    <img class="about-pic" src={Photo} alt="Profile Photo" />
                    <br />

                    <a href={pdfCV} download="" class="pdf-download">
                        Download Resume
                        <i className="fa fa-download"></i>
                    </a>
                </div>
            </Fade>
            <Slide top duration={1000}>
                <div>
                    <div class="about-des">
                        <h2 class="about-h2">About Me</h2>
                        <p class="about-p">
                            <br />
                            
I am a dedicated researcher and data enthusiast with experience spanning <b>Advanced Manufacturing, Data Analytics, and Cyber Security </b>. <br />
Currently, I serve as a Research Assistant at New Mexico State University, focusing on top-layer fault detection in additive manufacturing and the integration of Large Language Models (LLMs) with 6G networks. <br />
Previously, I worked as a Data Analyst at Unilever Bangladesh, where I automated workflows, forecasted inventory, and developed digital twins to optimize supply chain efficiency. <br />
With a strong foundation in Python, data-driven problem solving, and cutting-edge research, I aim to push boundaries in technology and innovation.

                        </p>
                        <br />
                        <h2 class="about-h2">Contact Details</h2>
                        <p class="about-p">
                            <div class="abt">
                                Syed Ziaul Bin Bashar
                                <br /> <a class="foot-a" href="mailto:ziaulbinbashar@gmail.com">ziaulbinbashar@gmail.com </a>
                                <br /> <a class="foot-a" href="mailto:szb@nmsu.edu">szb@nmsu.edu </a>
                                {/* <br /> +88 01791787053 */}
                            </div>
                        </p>

                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default About;