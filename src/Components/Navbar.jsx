import "./Navbar.css";

export const Navbar = () => {
    return (<div className="navbar">
            <div className="max_width">
                <div className="nav_logo">Thinkwave</div>
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
                    <li className="nav"><a href="/credits">Carriers</a></li>
                    <li className="nav"><a href="/">Parts & Service</a></li>
                </ul>
            </div>
        </div>
    );
}