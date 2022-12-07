import { useEffect, useRef } from "react";

import Split from "../components/Split";
import Swiper from "../components/Swiper";

const Home = () => {

    return (
        <div className="home">
            <Split/>
            <Swiper/>
        </div>
     );
}
 
export default Home;