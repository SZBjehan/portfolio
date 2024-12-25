import React, { useState } from "react";
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
import FakeNews from "../assets/FakeNews.PNG";
import Unilever_Inventory from "../assets/Unilever_Inventory.png";
import Unilever_RPM from "../assets/Unilever_RPM.png";
import EURO_PM from "../assets/EURO_PM.png";
import { Fade, Slide } from "react-reveal";

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: "Inventory Forecasting",
            description: "Unilever Bangladesh Limited, Python, PowerBI, SAP, Automation",
            image: Unilever_Inventory,
            link: "https://drive.google.com/file/d/13T-VDaxOF18kHOvPAjMq21Nmzwb--Vpx/view?usp=sharing",
        },
        {
            title: "RPM Rescheduling",
            description: "Unilever Bangladesh Limited, Python, PowerBI, SAP, Automation",
            image: Unilever_RPM,
            link: "https://drive.google.com/file/d/13T-VDaxOF18kHOvPAjMq21Nmzwb--Vpx/view?usp=sharing",
        },
        {
            title: "EURO 2024 Prediction Model",
            description: "Python, Jupyter Notebook, Gradient Boosting (GB), Random Forest (RF)",
            image: EURO_PM,
            link: "https://github.com/SZBjehan/EURO_2024_Prediction_Model",
        },
        {
            title: "Daily Cost Tracker",
            description: "iOS App, Swift, Xcode, Store and calculate daily cost, Track daily cost",
            image: FakeNews,
            link: "https://github.com/SZBjehan/Daily_Cost_Tracker_iOS",
        },
        {
            title: "Fake News Detection Data",
            description: "Data Science Project, Python, Jupyter Notebook, SQL",
            image: FakeNews,
            link: "https://github.com/SZBjehan/Fake_News_Detection_Data",
        },
        {
            title: "CGPA Calculator",
            description: "JAVA Spring Boot Project, Frontend and Backend, Take input of Grades, Output the CGPA",
            image: SpringBoot,
            link: "https://github.com/SZBjehan/CGPA_Calculator",
        },
        {
            title: "Spring Boot Management Project",
            description: "JAVA Spring Boot Project, Backend only, Use of POJO, ASYNC, and Cache, Production quality code",
            image: SpringSecurity,
            link: "https://github.com/SZBjehan/Spring_POJO_Async_Cache",
        },
        {
            title: "Spring Security Project",
            description: "JAVA Spring Security Project using JWT, Backend only, Login, Use of JWT",
            image: JWT,
            link: "https://github.com/SZBjehan/spring-security-jwt",
        },
        {
            title: "Boomerang HD",
            description: "Made with Wix website builder, A complete e-commerce website, Payment Integrated, Responsive Website, CRUD operation, Client Project",
            image: Nancy,
            link: "https://www.hdboomerang.com/",
        },
        {
            title: "Python to download attachments from Outlook_Mail",
            description: "Workflow Automation Project, Python Pandas, Storing the attachments, Auto forwarding the attachments through WhatsApp",
            image: FakeNews,
            link: "https://github.com/SZBjehan/Python_to_downlaod_attachments_from_Outlook_Mail",
        },
        {
            title: "Magpie Analytics",
            description: "Made with Wordpress and Elementor, Responsive Website, Dynamic Website, CRUD operation, Client Project",
            image: Magpie,
            link: "https://magpieanalytics.com/",
        },
        {
            title: "Elliptic Curve Cryptography",
            description: "Computations on Elliptic Curves, JAVA, Take Elliptic curve, P as Input, Output shared Keys",
            image: ElipticCurvePic,
            link: "https://github.com/SZBjehan/EllipticCurve_Cryptography",
        },
        {
            title: "A51 Algorithm Key Generation",
            description: "Computations of A51 algorithm, JAVA, Take input texts and generate Keys using A51 Algorithm, Output shared Keys",
            image: FakeNews,
            link: "https://github.com/SZBjehan/A51AlgoKeyGeneration",
        },
        {
            title: "Westford (Laravel Vue)",
            description: "Made with using Laravel Framework, Frontend with VueJS, Responsive Website, Client Project",
            image: Westford,
            link: "https://github.com/SZBjehan/westford_LaravelVue",
        },
        {
            title: "CRAFTREE",
            description: "Made for a client, An e-commerce website, It has 7 pages, Responsive Website",
            image: CraftreePic,
            link: "https://szbjehan.github.io/craftree/",
        },
        {
            title: "Demo Portfolio Project",
            description: "HTML, CSS, JavaScript, Responsive Website",
            image: DemoP,
            link: "https://szbjehan.github.io/portfolio_R/#",
        },
        {
            title: "Gamers Vault (React)",
            description: "Made for a client, An e-commerce website, Work in progress, Responsive Website",
            image: GameV,
            link: "https://szbjehan.github.io/demoProject/",
        },
        {
            title: "TechnoMath (React)",
            description: "Made with ReactJS, Responsive Website",
            image: MTphoto,
            link: "https://szbjehan.github.io/mathtech/",
        },
        {
            title: "News (React)",
            description: "Made with ReactJS, Backend created with ExpressJS, NodeJS, Database MongoDB, Responsive Website, CRUD operation",
            image: newsPA,
            link: "#",
        },
        {
            title: "CRUD Laravel Vue Project",
            description: "Made with Laravel and VueJS, Frontend using VueJS, Backend using Laravel, PHP, Responsive Website, CRUD operation",
            image: vueLaravelCRUD,
            link: "https://github.com/SZBjehan/Traveler_VueLaravel_CRUD_Project",
        }
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div className="project" id="Projects">
            <div>
                <div className="project-title">Research and Projects</div>
                <h2 className="pro-subtitle">Research</h2>
            </div>
            <div className="pos">
                <div className="project-card">
                    <a href="https://ieeexplore.ieee.org/abstract/document/10487666">
                        <div className="research-box">
                            <div className="box_des">
                                <b> Comparative Study of Object Detection Models for Safety in Autonomous Vehicles, Homes, and Roads Using IoT Devices </b>
                            </div>
                            <br />
                            <div>
                                <i>Published at <b>IEEE CSDE 2023 </b> </i><br />
                                <a href="">Link</a>
                            </div>
                        </div>
                    </a>
                </div>
{/* Add more Research here */}

            </div>
            <div>
                <h2 className="pro-subtitle">Projects</h2>
            </div>
            <Slide right duration={1500}>
                <div className="pos">
                    {displayedProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <a href={project.link}>
                                <div className="pro-box">
                                    <img className="pro-box-pic" src={project.image} alt={project.title} />
                                    <div className="box_title">{project.title}</div>
                                    <div className="box_des">{project.description}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Slide>
            {!showAll && (
                <button className="show-all-button" onClick={() => setShowAll(true)}>
                    Show More Projects...
                </button>
            )}
        </div>
    );
};

export default Projects;
