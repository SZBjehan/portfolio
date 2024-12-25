import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";

import Blockchain from "../assets/Blockchain_final.jpg";
import Unilever_SCD from "../assets/Unilever_SCD.jpg";
import RedDot_C from "../assets/RedDot_C.png";
import NancyR from "../assets/NancyR.png";
import TRIPeGATE_R from "../assets/TRIPeGATE_R.png";
import PSDP from "../assets/PSDP.png";
import BRAC_I from "../assets/BRAC_I.png";
import HULT from "../assets/HULT.png";
import JP_Morgan from "../assets/JP_Morgan.png";
import MasterCard from "../assets/MasterCard.png";

const Recommendation = () => {
    const [showAll, setShowAll] = useState(false);

    const recommendations = [
        
        {
            image: Unilever_SCD,
            title: "SC Director’s Award H1 2023 (Unilever Bangladesh)",
            description: "Outstanding performance on inventory forecasting project “PLAN DIISH”"
        },
        {
            image: Blockchain,
            title: "Blockchain Olympiad Finalist - 2022",
            description: "Decentralized Tax Verification System using Blockchain Technology"
        },
        {
            image: RedDot_C,
            title: "RedDot Digital Limited - ROBI",
            description: "Software Development Intern"
        },
        {
            image: BRAC_I,
            title: "BRAC",
            description: "Operations IT - Intern"
        },
        
        {
            image: TRIPeGATE_R,
            title: "TRIPeGATE",
            description: "Software Engineer Intern"
        },
        {
            image: NancyR,
            title: "Nancy Mae Simpson",
            description: "Virtual Assistant"
        },
        {
            image: PSDP,
            title: "Professional Skill Development Program",
            description: "Office of Career Services & Alumni Relations (OCSAR)"
        },
        {
            image: HULT,
            title: "HULT Prize OnCampus",
            description: "1st Runners up"
        },
        {
            image: JP_Morgan,
            title: "Software Engineering Virtual Experience",
            description: "JP Morgan"
        },
        {
            image: MasterCard,
            title: "Cybersecurity Virtual Experience Program",
            description: "Mastercard"
        }
    ];
    const displayedrecommendations = showAll ? recommendations : recommendations.slice(0, 3);

    return (
        <div className="recommendations" id="Recomend">
            <div>
                <div className="project-title">Recommendations and Certificates</div>
                <h2 className="pro-subtitle"></h2>
            </div>
            <Slide left duration={1500}>
                <div className="pos">
                    {displayedrecommendations.map((rec, index) => (
                        <div className="rec-box" key={index}>
                            <img className="rec-box-pic" src={rec.image} alt={rec.title} />
                            <div className="box_title">{rec.title}</div>
                            <div className="box_des">{rec.description}</div>
                        </div>
                    ))}
                </div>
            </Slide>
            {!showAll && (
                <button className="show-all-button" onClick={() => setShowAll(true)}>
                    Show More ...
                </button>
            )}
        </div>
    );
}

export default Recommendation;
