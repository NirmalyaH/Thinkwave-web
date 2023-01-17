import {Navbar} from "../Components/Navbar";
import "../Components/credits.css";

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
            </div>
        </div>
    </>);
}