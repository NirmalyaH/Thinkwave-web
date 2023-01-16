import {Navbar} from "./Components/Navbar";
import {useEffect} from "react";
import {Home} from "./Components/home";
import {Products} from "./Components/products";

const App = () => {
    return (<>
        <Navbar/>
        <Home/>
        <Products/>
    </>)
}
export default App;