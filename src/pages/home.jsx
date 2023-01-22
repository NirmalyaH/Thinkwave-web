import {Navbar} from "../Components/Navbar";
import "../Components/home.css";
import Carousel from 'react-bootstrap/Carousel';
import product1 from '../assets/images/home/devicePhoto.jpg';
import product2 from '../assets/images/home/product.jpeg'
import {Footer} from "../Components/footer";
import harpeet from '../assets/images/mentors/harpreet.png';

export const Home = () => {
    return (<>
        <Navbar/>
        <section className={'home'}>
            <div className="max_width">
                <div className="h_container">
                    <Carousel className={'w-100'} indicators={false}>
                        <Carousel.Item interval={1000} className={'h-100 w-100'}>
                            <img
                                className="d-block w-100 h-100"
                                src="https://static.wixstatic.com/media/e02b34_efb866f976fe48f3bbdc95ec2806a926~mv2.png/v1/fill/w_1899,h_530,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e02b34_efb866f976fe48f3bbdc95ec2806a926~mv2.png"
                                alt="First slide"
                            />
                            <div className="layout"></div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000} className={'h-100 w-100'}>
                            <img
                                className="d-block w-100 h-100"
                                src="https://static.wixstatic.com/media/e02b34_efb866f976fe48f3bbdc95ec2806a926~mv2.png/v1/fill/w_1899,h_530,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e02b34_efb866f976fe48f3bbdc95ec2806a926~mv2.png"
                                alt="First slide"
                            />
                            <div className="layout"></div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="product">
                    <div className="p_heading">
                        Products
                    </div>
                    <div className="product_container">
                        <div className="p_container">
                            <img src={product1} alt=""/>
                            <div className="productTitle">
                                Npk Sensor
                            </div>
                            <div className="product_info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta repudiandae
                                tempore.
                            </div>
                        </div>
                        <div className="p_container">
                            <img src={product2} alt=""/>
                            <div className="productTitle">
                                Portable Air Filter
                            </div>
                            <div className="product_info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta repudiandae
                                tempore.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="featureProduct">
            <div className="featureContent">
                <div className="featureHeading">
                    Featured Product
                </div>
                <div className="featureContainer">
                    <figure>
                        <img data-aos="fade-up"
                             data-aos-anchor-placement="bottom-bottom"
                             data-aos-duration="2000"
                             src="https://static.wixstatic.com/media/e02b34_dfa37ac95e2b48f89e8d1c3628a9b1a1~mv2.jpg/v1/fill/w_469,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Women%20Entrepreneur%20in%20Karnataka%20using%20Harvesto%20Soil%20Testing%20Kit_JPG.jpg"
                             alt=""/>
                    </figure>
                    <div className="featureCol" data-aos="fade-up"
                         data-aos-anchor-placement="bottom-bottom"
                         data-aos-duration="2000">
                        Harvesto Soil Testing Kit is one of our primary innovation that has revolutionised the
                        agriculture sector. Harvesto Soil Lab has got down the cost of Soil Testing Lab set-up by over
                        50 times. It has made Soil Testing affordable and accessible for all.
                        <br/><br/>
                        Harvesto Soil Testing Kit is an easy to use digital Soil Testing Kit and lab setup that tests 14
                        parameters of soil and also recommends crop-specific fertiliser dose for over 100 crops.
                        <br/><br/>
                        Harvesto Soil Testing Kit is an award-winning product that is being used in Government of
                        India's Soil Health Card mission and has been praised by the Hon'ble Prime Minister of India and
                        Hon'ble President of India for its impact on farmers and agriculture sector.

                        <br/>

                        Harvesto Soil Testing Kit can be used by Government Departments, farmers, entrepreneurs,
                        agri-input companies, NGOs, and private agriculture companies to start their Soil Testing Labs
                        across the globe.
                        <br/>

                        <div className="featureBuy">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
            <div className="featureBg">
                <img
                    src="https://static.wixstatic.com/media/nsplsh_dc8e4f4462ef41a685e996be01118864~mv2.jpg/v1/fill/w_1899,h_706,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_dc8e4f4462ef41a685e996be01118864~mv2.jpg"
                    alt=""/>
                <div className="layout layout2"></div>
            </div>
        </div>
        <section className="mentors" data-aos="fade-up"
                 data-aos-anchor-placement="bottom-bottom"
                 data-aos-duration="2000">
            <div className="m_heading">
                Mentors
            </div>
            <div className="mentorsContainer">
                <figure>
                    <img src={harpeet} alt=""/>
                    <p>Dr. Harpreet</p>
                </figure>
                <figure>
                    <img src={harpeet} alt=""/>
                    <p>Dr. Harpreet</p>

                </figure>
            </div>
        </section>
        <Footer/>
    </>);
}