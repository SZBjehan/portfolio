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
                        <p class="about-p">My area of interest is Web Development, Website
                            Designing, working with backend and I<br />aspire to gain
                            more expertise in these fields. Working with BRAC
                            University Computer Club <br /> has allowed me to improve my
                            skills in these fields as well as helped me to develop my <br />
                            leadership and management skills.
                        </p>
                        <br />
                        <h2 class="about-h2">Contact Details</h2>
                        <p class="about-p">
                            Syed Ziaul Bin Bashar
                            <br /> <a class="foot-a" href="mailto:ziaulbinbashar@gmail.com">ziaulbinbashar@gmail.com </a>
                            <br /> +88 01711762450
                        </p>

                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default About;