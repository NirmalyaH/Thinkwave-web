import './footer.css';
import location from '../assets/icons/location.svg';
import call from '../assets/icons/call.svg';
import message from '../assets/icons/message.svg';
import internet from '../assets/icons/internet.svg';


export const Footer = () => {
    return (<>
        <div className="footer w-100">
            <div className="col w-50 dflex flex-column justify-content-center ">
                <div className="f_heading">
                    Thinkwave
                </div>
                <div className="f_line"></div>
                <div className="f_content">
                    Harvesto is the brand trusted by stakeholders of agriculture across the globe. The core values
                    driving Harvesto are quality, commitment, and trust. We train all our team members to best serve our
                    customers and to create a positive impact in all spheres of business.
                </div>
            </div>
            <div className="col w-50 w-50 dflex flex-column">
                <div className="f_contact1 text-capitalize">
                    Contact US
                </div>
                <div className="f_line"></div>
                <ul className="f_list">
                    <li><img src={location} alt=""/><a href="https://goo.gl/maps/yhRs3ysT1HqZSJJCA">A214, Okhla
                        Industrial Area, Phase 1, New Delhi
                        - 110020 (India)</a></li>
                    <li><img src={call} alt=""/>
                        <a href="tel:+919212302277">+91-9212302277</a>
                    </li>
                    <li><img src={message} alt=""/><a href="mailto:info@harvestogroup.com">info@harvestogroup.com</a>
                    </li>
                    <li><img src={internet} alt=""/> <a
                        href="http://www.harvestogroup.com/">http://www.harvestogroup.com/</a></li>
                </ul>
            </div>
        </div>
        <footer className={'bottomFooter'}>
            2023 by Thinkwave
        </footer>
    </>);
}