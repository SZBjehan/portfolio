
import { Fade, Slide } from "react-reveal";
import NancyR from "../assets/NancyR.png"
import TRIPeGATE_R from "../assets/TRIPeGATE_R.png"
import PSDP from "../assets/PSDP.png"
import BRAC_I from "../assets/BRAC_I.png"
import HULT from "../assets/HULT.png"
import JP_Morgan from "../assets/JP_Morgan.png"
import MasterCard from "../assets/MasterCard.png"


const Recommendation = () => {
    return (
        <div class="recommendations" id="Recomend">
            <div>
                <div class="project-title "> Recommendations and Certificates </div>
                <h2 class="pro-subtitle">  </h2>
            </div>
            <Slide left duration={1500}>
                <div class="pos">
                    <div class="rec-card"></div> 
                    
                        <div class="rec-box">
                            <img class="rec-box-pic" src={BRAC_I} alt="" />
                            <div class="box_title"> BRAC  </div>
                            <div class="box_des" > Operations IT - Intern
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="pro-box-pic" src={TRIPeGATE_R} alt="" />
                            <div class="box_title"> TRIPeGATE </div>
                            <div class="box_des" > Software Engineer Intern
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="rec-box-pic" src={NancyR} alt="" />
                            <div class="box_title"> Nancy Mae Simpson </div>
                            <div class="box_des" > Virtual Assistsnt
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="rec-box-pic" src={PSDP} alt="" />
                            <div class="box_title"> Professional Skill Developement Program </div>
                            <div class="box_des" > Office of Career Services & Alumni Relations (OCSAR)
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="rec-box-pic" src={HULT} alt="" />
                            <div class="box_title"> HULT Prize OnCampus </div>
                            <div class="box_des" > 1st Runners up
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="rec-box-pic" src={JP_Morgan} alt="" />
                            <div class="box_title"> Software Engineering Virtual Experience </div>
                            <div class="box_des" > JP Morgan
                                
                            </div>
                        </div>
                        <div class="rec-box">
                            <img class="rec-box-pic" src={MasterCard} alt="" />
                            <div class="box_title"> Cybersecurity Virtual Experience Program </div>
                            <div class="box_des" > Mastercard 
                                
                            </div>
                        </div>
                        
                    
                </div>
            </Slide>


        </div>
    );
}
export default Recommendation;