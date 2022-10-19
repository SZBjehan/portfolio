import MTphoto from "../assets/MathTech_1.PNG";
import newsPA from "../assets/NewsPA_1.PNG";
import vueLaravelCRUD from "../assets/VueLaravelCRUD.PNG";
import CraftreePic from "../assets/craftreepic.PNG";
import Nancy from "../assets/nancy.PNG";
import Magpie from "../assets/Magpie.png";
import DemoP from "../assets/demoP.PNG";
import GameV from "../assets/GameV.jpg";
import Westford from "../assets/westfordPic.PNG";
import Qbizz from "../assets/QuizBizz.PNG";
import FakeNews from "../assets/FakeNews.PNG"

import { Fade, Slide } from "react-reveal";


const Projects = () => {
    return (
        <div class="project" id="Projects">
            <div>
                <div class="project-title "> PROJECTS </div>
                <h2 class="pro-subtitle">I worked on</h2>
            </div>
            <Slide right duration={1500}>
                <div class="pos">
                    
                    <div class="project-card">
                        {/* <a href="https://szbjehan.github.io/mathtech/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={MTphoto} alt="" />
                                <div class="box_title"> TechnoMath (React)</div>
                                <div class="box_des" >
                                    Made with ReactJS <br />
                                    Responsive Website <br />

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
                        <div class="pro-box">
                            <img class="pro-box-pic" src={Qbizz} alt="QuizBizz Photo" />
                            <div class="box_title"> Quiz-bizz Mobile App (Kotlin)</div>
                            <div class="box_des" > KOTLIN Android App
                                <br /> API integrated
                            </div>
                        </div>
                        <a href="https://szbjehan.github.io/demoProject/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={GameV} alt="" />
                                <div class="box_title"> Gamers Vault </div>
                                <div class="box_des" > It was made for a client <br />
                                    An e-commerce website <br />
                                    work in progress <br />
                                    Responsive Website
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
                        </div> */}

                    </div>
                    <div class="project-card">
                        <a href="https://github.com/SZBjehan/Fake_News_Detection_Data">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={FakeNews} alt="" />
                                <div class="box_title"> Fake News Detection Data </div>
                                <div class="box_des" > Data Science Project
                                    <br /> Python
                                    <br /> Jupiter Notebook
                                    <br /> SQL
                                </div>
                            </div>
                        </a>
                        <a href="https://www.hdboomerang.com/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Nancy} alt="" />
                                <div class="box_title"> Boomerang HD </div>
                                <div class="box_des" > Made with Wix website builder
                                    <br /> A complete e-commerce website
                                    <br /> Payment Integrated
                                    <br /> Responsive Website
                                    <br /> CRUD operation
                                    <br /> Client Project
                                </div>
                            </div>
                        </a>
                        <a href="https://magpieanalytics.com/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Magpie} alt="" />
                                <div class="box_title"> Magpie Analytics </div>
                                <div class="box_des" > Made with Wordpress and Elemento
                                    <br /> Responsive Website
                                    <br /> Dynamic Website
                                    <br /> CRUD operation
                                    <br /> Client Project
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/SZBjehan/westford_LaravelVue">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Westford} alt="" />
                                <div class="box_title"> Westford (Laravel Vue) </div>
                                <div class="box_des" > Made with using Laravel Framework
                                    <br /> Frontend with VueJS

                                    <br /> Responsive Website
                                    <br /> Client Project
                                </div>
                            </div>
                        </a>
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
                        <a href="https://szbjehan.github.io/demoProject/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={GameV} alt="" />
                                <div class="box_title"> Gamers Vault (React)</div>
                                <div class="box_des" > It was made for a client <br />
                                    An e-commerce website <br />
                                    work in progress <br />
                                    Responsive Website
                                </div>
                            </div>
                        </a>
                        <a href="https://szbjehan.github.io/mathtech/">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={MTphoto} alt="" />
                                <div class="pro-side">
                                    <div class="box_title"> TechnoMath (React)</div>
                                    <div class="box_des" >
                                        Made with ReactJS <br />
                                        Responsive Website <br />
                                    </div>
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
                        <a href="https://github.com/SZBjehan/Traveler_VueLaravel_CRUD_Project">
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
                        </a>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default Projects;