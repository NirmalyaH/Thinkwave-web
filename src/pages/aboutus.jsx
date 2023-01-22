import {Navbar} from "../Components/Navbar";
import '../Components/aboutus.css';
import AOS from "aos";
import "aos/dist/aos.css";
import {Footer} from "../Components/footer"; // You can also use <link> for styles
AOS.init();

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

                            Ever wondered what the cause of environmental problems is such as eutrophication, soil and
                            water pollution, Alzheimer’s disease, cancer, diabetes mellitus, hemoglobin disorders? Yes!
                            The root cause of all such problems is the overdose of chemical fertilizers in the
                            agricultural land. <br/><br/>
                            Ever since the concept of fertilizers came in our country, agriculture sector in India has
                            experienced new heights, not only in terms of green revolution but also in its contribution
                            to India’s GDP. Even though fertilizers are being used since decades, farmers still don’t
                            have the right knowledge about the correct usage of fertilizers, which leads to overdose of
                            chemicals in the soil and it gets washed away with water and enters water bodies which leads
                            to the problems mentioned above. <br/><br/>
                            If somehow farmers get to know the soil quality beforehand, they would use lesser amount of
                            fertilizers in the soil, which will not only save their money but also prevent environmental
                            and health damage. This would be a breakthrough in agriculture as it would make famers more
                            aware about soil health. <br/><br/>
                        </p>
                    </div>
                    <div className="col">
                        <figure>
                            <img data-aos="fade-left" data-aos-duration="2000"
                                 src="https://static.wixstatic.com/media/e02b34_d01e5b963f2b497bba517e3884a04dd7~mv2.png/v1/fill/w_750,h_683,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Side1.png"
                                 alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="profile profile2">
                    <div className="col">
                        <figure><img data-aos="fade-right" data-aos-duration="2000"
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

        <Footer/>
    </>);
}