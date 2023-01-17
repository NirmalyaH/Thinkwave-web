import {Navbar} from "../Components/Navbar";
import "../Components/credits.css";
import baldeep from "../assets/images/credits/Baldeep.jpeg";
import {Card} from "react-bootstrap";

export const Credits = () => {
    return (<>
        <Navbar/>
        <div className="credit">
            <div className="max_width">
                <div className="creditsHeadingContainer">
                    <div className="col">
                        <div className="heading">
                            Credits
                        </div>
                        <div className="sub_heading">
                            Our 24hr hardworking Team
                        </div>
                    </div>
                    <div className="col">
                        <figure>
                            <img
                                src="https://static.wixstatic.com/media/29cc911599d44d2b80a1f9177af7302f.jpg/v1/fill/w_951,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/29cc911599d44d2b80a1f9177af7302f.jpg"
                                alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="creditsGalleryContainer">
                    <Card className={"card"}>
                        <Card.Img variant="top" src={baldeep} className={"cardImg"}/>
                        <Card.Body>
                            <Card.Title className={"cardHeading"}>Baldeep Singh</Card.Title>
                            <Card.Text className={"cardText"}>
                                Baldeep Singh currently working as a Software Engineer in Viasat India and graduated
                                from Thapar Institute of Engineering and Technology (TIET), Patiala, Punjab with B.E. in
                                Computer Engineering. He got abstract approval of his project i.e. “FarmTech-Realtime
                                soil quality monitoring system” in international conference of food & security which was
                                held in TIET (Abstract ID:- ICFS18/0061), Patiala and also got selected for finales of
                                Startup India Punjab Yatra (ISB Mohali) for the same project.
                                Area of expertise:-
                                React js, Python, Arduino uno & Raspberry Pi

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>);
}