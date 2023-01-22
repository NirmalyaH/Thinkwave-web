import {Navbar} from "./Components/Navbar";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./pages/aboutus";
import {Credits} from "./pages/credits";
import {Home} from "./pages/home";
import AOS from "aos";
const App = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/aboutus"} element={<AboutUs/>}/>
                    <Route path={"/credits"} element={<Credits/>}/>

                </Routes>
            </BrowserRouter>

        </>
    )
}
export default App;