import Photo from '../assets/CVpic.jpeg';
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
                        I am an experienced Data Engineer and a Full Stack Web Developer <br/>
                        with a demonstrated history of working in the Software Development industry. <br />
                        <br />
                        As a starter in Development, it was initially hard for me 
                        to grasp different frameworks and languages, <br />
                         but gradually I put so 
                        much effort into learning and it was incredibly satisfying for me as <br /> 
                        I found my passion in Data Science and Engineering and chose this as my major. <br />
                        <br /> 
                        Additionally, my undergraduate thesis paper is also subjected to Data Science 
                        Engineering which is still in process. <br />
                        <br />
                        My key strength is adaptability, coping up with learning and relearning different skills <br />
                        according to the preference of each organization and what they require. <br /> 
                        As I tend to surround myself around  people who are interested in learning, <br />
                        encouraging skill development, creativity and problem solving ability<br />
                        <br />
                         I plan to immerse myself devoting towards problem solving, my goal would be to overcome new challenges every now and then. <br />
                        </p>
                        <br />
                        <h2 class="about-h2">Contact Details</h2>
                        <p class="about-p">
                            <div class="abt">
                                Syed Ziaul Bin Bashar
                                <br /> <a class="foot-a" href="mailto:ziaulbinbashar@gmail.com">ziaulbinbashar@gmail.com </a>
                                <br /> +88 01791787053
                            </div>
                        </p>

                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default About;