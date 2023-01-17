import {Navbar} from "./Components/Navbar";
import {useEffect} from "react";
import {Products} from "./Components/products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./pages/aboutus";
import {Credits} from "./pages/credits";
import {Home} from "./pages/home";

const App = () => {
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