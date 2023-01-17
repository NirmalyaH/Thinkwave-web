import {Navbar} from "./Components/Navbar";
import {useEffect} from "react";
import {Home} from "./Components/home";
import {Products} from "./Components/products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./pages/aboutus";

const App = () => {
    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/aboutus"} element={<AboutUs/>}/>

                </Routes>
            </BrowserRouter>

        </>
    )
}
export default App;