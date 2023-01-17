import "./Navbar.css";

export const Navbar = () => {
    return (<div className="navbar">
            <div className="max_width">
                <div className="nav_logo"><img src="https://www.deere.com/assets/images/deere-logo-agriculture.svg"
                                               alt=""/></div>
                <ul className="nav_container">
                    <li className="nav_search dflex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g data-name="Layer 2">
                                <path
                                    d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                                    data-name="search"/>
                            </g>
                        </svg>
                        <input type="text" name="" id="" placeholder={"Search"}/>
                    </li>
                    <li className="dflex nav_location">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 24 24">
                            <path
                                d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"/>
                        </svg>
                        <p>Find the Dealer</p>
                    </li>
                    <li className="nav_login dflex">
                        <svg color={'#666'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g data-name="Layer 2">
                                <path
                                    d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
                                    data-name="person"/>
                            </g>
                        </svg>
                        <p>Sign In</p>
                    </li>
                </ul>
            </div>
            <div className="max_width">
                <ul className={"bottom_navbar"}>
                    <li className="nav"><a href="/">Home</a></li>
                    <li className="nav"><a href="/aboutus">About us
                    </a></li>
                    <li className="nav"><a href="/credits">Credits</a></li>
                    <li className="nav"><a href="/">Parts & Service</a></li>
                </ul>
            </div>
        </div>
    );
}