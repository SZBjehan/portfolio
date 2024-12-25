import MTphoto from "../assets/MathTech_1.PNG";
import newsPA from "../assets/NewsPA_1.PNG";
import vueLaravelCRUD from "../assets/VueLaravelCRUD.PNG";
import CraftreePic from "../assets/craftreepic.PNG";
import Nancy from "../assets/nancy.PNG";
import Magpie from "../assets/Magpie.png";
import DemoP from "../assets/demoP.PNG";
import GameV from "../assets/GameV.jpg";
import Westford from "../assets/westfordPic.PNG";
import SpringBoot from "../assets/SpringJava.png";
import SpringSecurity from "../assets/SpringSecurity.png";
import JWT from "../assets/JWT.png";
import ElipticCurvePic from "../assets/elipticCurve.jpeg";
import FakeNews from "../assets/FakeNews.PNG"
import Unilever_Inventory from "../assets/Unilever_Inventory.png"
import Unilever_RPM from "../assets/Unilever_RPM.png"
import EURO_PM from "../assets/EURO_PM.png"
import { Fade, Slide } from "react-reveal";


const Projects = () => {
    return (
        <div class="project" id="Projects">
            
            <div>
                <div class="project-title "> Research and Projects </div>
                <h2 class="pro-subtitle">Research</h2>
            </div>
            <div class="pos">
                <div class="project-card">
                <a href="https://drive.google.com/file/d/13T-VDaxOF18kHOvPAjMq21Nmzwb--Vpx/view?usp=sharing">
                            <div class="research-box">
                                <div class="box_des" > 
                                    Comparative Study of Object Detection Models for Safety in Autonomous Vehicles, Homes, and Roads Using IoT Devices
                                </div>
                            </div>
                        </a>
                </div>
            </div>
            <div>
                <h2 class="pro-subtitle">Projects</h2>
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
                        
                        <a href="https://drive.google.com/file/d/13T-VDaxOF18kHOvPAjMq21Nmzwb--Vpx/view?usp=sharing">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Unilever_Inventory} alt="Unilever_Inventory" />
                                <div class="box_title"> Inventory Forcasting </div>
                                <div class="box_des" > Unilever Bangladesh Limited
                                    <br /> Python
                                    <br /> PowerBI
                                    <br /> Automation
                                </div>
                            </div>
                        </a>
                        <a href="https://drive.google.com/file/d/13T-VDaxOF18kHOvPAjMq21Nmzwb--Vpx/view?usp=sharing">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Unilever_RPM} alt="Unilever_RPM" />
                                <div class="box_title"> RPM Rescheduling </div>
                                <div class="box_des" > Unilever Bangladesh Limited
                                    <br /> Python
                                    <br /> PowerBI
                                    <br /> Automation
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/SZBjehan/EURO_2024_Prediction_Model">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={EURO_PM} alt="" />
                                <div class="box_title"> EURO 2024 Prediction Model </div>
                                <div class="box_des" > Python
                                    <br /> Jupyter Notebook
                                    <br /> Gradient Boosting (GB)
                                    <br /> Random Forest (RF)
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/SZBjehan/Daily_Cost_Tracker_iOS">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={FakeNews} alt="" />
                                <div class="box_title"> Daily Cost Tracker </div>
                                <div class="box_des" > iOS App
                                    <br /> Swift, Xcode
                                    <br /> Store and calculate daily cost
                                    <br /> Track daily cost
                                </div>
                            </div>
                        </a>
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
                        <a href="https://github.com/SZBjehan/CGPA_Calculator">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={FakeNews} alt="" />
                                <div class="box_title"> CGPA Calculator </div>
                                <div class="box_des" > JAVA Spring Boot Project
                                    <br /> Frontend and Backend 
                                    <br /> Take input of Grades
                                    <br /> Output the CGPA
                                </div>
                            </div>
                        </a>
                        
                        <a href="https://github.com/SZBjehan/Spring_POJO_Async_Cache">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={SpringBoot} alt="" />
                                <div class="box_title"> Spring Boot Management Project </div>
                                <div class="box_des" > JAVA Spring Boot Project
                                    <br /> Backend only 
                                    <br /> Use of POJO, ASYNC and Cache
                                    <br /> Production quality code  
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/SZBjehan/spring-security-jwt">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={JWT} alt="" />
                                <div class="box_title"> Spring Security Project </div>
                                <div class="box_des" > JAVA Spring Security Project using JWT
                                    <br /> Backend only 
                                    <br /> Login
                                    <br /> Use of JWT   
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
                        <a href="https://github.com/SZBjehan/Python_to_downlaod_attachments_from_Outlook_Mail">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={FakeNews} alt="" />
                                <div class="box_title"> Python to downlaod attachments from Outlook_Mail </div>
                                <div class="box_des" > Workflow Automation Project
                                    <br /> Python Pandas  
                                    <br /> Storing the attachments
                                    <br /> Auto forwarding the attachments through WhatsApp
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
                        <a href="https://github.com/SZBjehan/EllipticCurve_Cryptography">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={ElipticCurvePic} alt="" />
                                <div class="box_title"> Eliptic Curve Cryptography </div>
                                <div class="box_des" > Computations on Elliptic Curves
                                    <br /> JAVA
                                    <br /> Tske Elliptic curse, P as Input
                                    <br /> Output shared Keys
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/SZBjehan/A51AlgoKeyGeneration">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={FakeNews} alt="" />
                                <div class="box_title"> A51 Algorithm Key Generation </div>
                                <div class="box_des" > Computations of A51 algo
                                    <br /> JAVA
                                    <br /> Tske input texts and generate Keys using A51 Algorithm
                                    <br /> Output shared Keys
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