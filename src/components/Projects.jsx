import MTphoto from "../assets/MathTech_1.PNG";
import newsPA from "../assets/NewsPA_1.PNG";
import vueLaravelCRUD from "../assets/VueLaravelCRUD.PNG";
import CraftreePic from "../assets/craftreepic.PNG";
import Nancy from "../assets/nancy.PNG";
import DemoP from "../assets/demoP.PNG";

import { Fade, Slide } from "react-reveal";


const Projects = () => {
    return (
        <div class="project" id="Projects">
            <div>
                <div class="project-title "> PROJECTS </div>
                <h2 class="pro-subtitle">Here are some of my works</h2>
            </div>
            <Slide right duration={1500}>
                <div class="pos">
                    <div class="project-card">
                        <a href="https://szbjehan.github.io/mathtech/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={MTphoto} alt="" />
                                <div class="box_title"> MathTech (React)</div>
                                <div class="box_des" >
                                    Made with ReactJS
                            <br /> Responsive Website
                            </div>
                            </div>
                        </a>
                        <div class="pro-box">
                            <img class="pro-box-pic" src={newsPA} alt="" />
                            <div class="box_title"> News (React) </div>
                            <div class="box_des" > Made with ReactJS
                            <br /> Backend created with expressJS, NodeJS
                            <br /> Database MongoDB
                            <br /> Responsive Website
                            <br /> CRUD operation
                            </div>
                        </div>
                        <a href="https://www.nancymaesimpson.com/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Nancy} alt="" />
                                <div class="box_title"> Wix Website </div>
                                <div class="box_des" > Made with Wix website builder
                            <br /> A complete e-commerce website
                            <br /> Payment Integrated
                            <br /> Responsive Website
                            <br /> CRUD operation
                            </div>
                            </div>
                        </a>
                        <div class="pro-box">
                            <img class="pro-box-pic" src={vueLaravelCRUD} alt="" />
                            <div class="box_title"> CRUD Laravel Vue Project </div>
                            <div class="box_des" > Made with Laravel and VueJS
                            <br /> Frontend using VueJS
                            <br /> Backend using Laravel, PHP
                            <br /> Responsive Website
                            <br /> CRUD operation
                            </div>
                        </div>

                    </div>
                    <div class="project-card">
                        <div class="pro-box">
                            <img class="pro-box-pic" src="" alt="" />
                            <div class="box_title"> Quiz-bizz Mobile App (Kotlin)</div>
                            <div class="box_des" > Android App
                            <br /> API integrated
                            <br /> KOTLIN (Android Studio)
                            </div>
                        </div>
                        <a href="https://szbjehan.github.io/craftree/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={CraftreePic} alt="" />
                                <div class="box_title"> CRAFTREE </div>
                                <div class="box_des" > It was made for a client <br />
                                    An e-commerce website <br />
                                    It has 7 pages <br />
                                    Responsive Website
                            </div>
                            </div>
                        </a>
                        <a href="https://szbjehan.github.io/portfolio_R/#">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={DemoP} alt="" />
                                <div class="box_title"> Demo Portfolio Project </div>
                                <div class="box_des" > HTML CSS JavaScript
                                    <br /> Responsive Website
                                    <br />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default Projects;