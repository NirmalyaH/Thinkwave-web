import {Navbar} from "../Components/Navbar";
import '../Components/aboutus.css';

export const AboutUs = () => {
    return (<>
        <Navbar/>
        <section className="aboutus">
            <div className="max_width">
                <div className="h_heading">
                    <div className="col">
                        <h1>About Us</h1>
                    </div>
                    <div className="col">
                        <figure>
                            <img
                                src="https://static.wixstatic.com/media/11062b_01060655e92d48df9a93a8a42170fbb6~mv2.jpg/v1/fill/w_899,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_01060655e92d48df9a93a8a42170fbb6~mv2.jpg"
                                alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="profile">
                    <div className="col">
                        <div className="heading">
                            Profile
                        </div>
                        <p className="sub_heading">
                            Harvesto is the brand trusted by stakeholders of agriculture across the globe.
                            <br/>
                            <br/>
                            The core values driving Harvesto are quality, commitment, and trust. We train all our team
                            members to best serve our customers and to create a positive impact in all spheres of
                            business.
                            <br/>
                            <br/>
                            Harvesto today is a brand that is trusted by our customers in several nations around the
                            globe. We invest and do our part to help the people wherever we operate.
                        </p>
                    </div>
                    <div className="col">
                        <figure>
                            <img
                                src="https://static.wixstatic.com/media/e02b34_d01e5b963f2b497bba517e3884a04dd7~mv2.png/v1/fill/w_750,h_683,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Side1.png"
                                alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="profile profile2">
                    <div className="col">
                        <figure><img
                            src="https://static.wixstatic.com/media/e02b34_fb7a2d69cef54cc7ac1e46e9749ba6b7~mv2.png/v1/fill/w_750,h_628,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Side2.png"
                            alt=""/></figure>
                    </div>
                    <div className="col">
                        <div className="heading">VISION & MISSION</div>
                        <div className="sub_heading">
                            Harvesto is a value-based organisation.

                            <br/><br/>

                            The core values driving Harvesto are quality, commitment, and trust. We train all our team
                            members to best serve our customers and to create a positive impact in all spheres of
                            business.

                            <br/><br/>

                            Harvesto today is a brand that is trusted by our customers in several nations around the
                            globe. We invest and do our part to help the people wherever we operate.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}