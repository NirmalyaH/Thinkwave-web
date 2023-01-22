import {Navbar} from "../Components/Navbar";
import "../Components/credits.css";
import baldeep from "../assets/images/credits/Baldeep.jpeg";
import Shrey from "../assets/images/credits/Shrey.jpg";
import Parth from "../assets/images/credits/Parth.jpeg";
import Viren from "../assets/images/credits/Viren.jpeg";
import Prabhinder from "../assets/images/credits/Prabhinder.jpeg";
import {Button, Card} from "react-bootstrap";
import {useRef, useState} from "react";
import {gsap} from "gsap";

export const Credits = () => {
    const [isactive, setActive] = useState(-1);


    let cardContent = [
        {
            'img': baldeep,
            "title": "Baldeep Singh",
            'content': "Baldeep Singh currently working as a Software Engineer in Viasat India and graduated from Thapar Institute of Engineering and Technology (TIET), Patiala, Punjab with B.E. in Computer Engineering. He got abstract approval of his project i.e. “FarmTech-Realtime soil quality monitoring system” in international conference of food & security which was held in TIET (Abstract ID:- ICFS18/0061), Patiala and also got selected for finales of Startup India Punjab Yatra (ISB Mohali) for the same project. Area of expertise:- React js, Python, Arduino uno & Raspberry Pi",
        }, {
            'img': Shrey,
            'title': "Shrey Sharma",
            'content': "Shrey Sharma is a final year student at Thapar University, pursuing Computer Engineering as an undergraduate stream. He has solid hands on experience in state of the art technologies such as Data Science, Machine & Deep Learning, computer vision, NLP, robotics & automation, IOT and bioinformatics and has applied his knowledge in developing and deploying several projects. Currently a software engineer intern in a reputed company, he has expertized on subjects like data structures & algorithms, operating systems, cyber security and DBMS.  He has undergone research based internship under esteemed faculties and has come up with novel techniques to assist the current medical infrastructural facilities in our country. ",
        }, {
            'img': Parth,
            "title": "Parth Mahajan",
            'content': "Parth Mahajan, currently in my 4th year of B.E. in Computer Engineering from Thapar Institute of engineering and technology, loves problem solving and has a good understanding of the core concepts of programming. He has a keen interest in hardware and software Development, Machine learning and is actively looking forward to work on projects involving the same. During his free time he loves to read books, play video games and learn about new upcoming technologies.",
        }, {
            'img': Viren,
            "title": "Viren",
            'content': "Parth Mahajan, currently in my 4th year of B.E. in Computer Engineering from Thapar Institute of engineering and technology, loves problem solving and has a good understanding of the core concepts of programming. He has a keen interest in hardware and software Development, Machine learning and is actively looking forward to work on projects involving the same. During his free time he loves to read books, play video games and learn about new upcoming technologies.",

        }, {
            'img': Prabhinder,
            "title": "Prabhinder",
            'content': "Parth Mahajan, currently in my 4th year of B.E. in Computer Engineering from Thapar Institute of engineering and technology, loves problem solving and has a good understanding of the core concepts of programming. He has a keen interest in hardware and software Development, Machine learning and is actively looking forward to work on projects involving the same. During his free time he loves to read books, play video games and learn about new upcoming technologies.",

        },
    ];
    return (<>
        <Navbar/>
        <div className="credit">
            <div className="max_width">
                <div className="creditsHeadingContainer">
                    <div className="col">
                        <div className="heading">
                            Carriers
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
                    {
                        cardContent.map((value, index, array) =>
                            <Card key={index}>
                                <Card.Img variant="top" src={value.img} className={"cardImg"}/>
                                <Card.Body>
                                    <Card.Title className={"cardHeading"}>{value.title}</Card.Title>
                                    <Card.Text className={`cardText ${isactive === index ? "openCard" : ""}`}>
                                        {value.content}
                                    </Card.Text>
                                    <span className={"cardSpan"} onClick={() => {
                                        if (index === isactive) {
                                            setActive(-1);
                                        } else {
                                            setActive(index);
                                        }
                                    }}>{isactive === index ? "" : "More..."}</span>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>
        </div>
    </>);
}