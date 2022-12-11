import Split from "../components/Split";
import Swiper from "../components/Swiper";

const Home = () => {

    return (
        <div className="home">
            <div className="pres">
                <img src="./images/memoji.png" alt="" />
            </div>
                <Split/>
            <Swiper/>
        </div>
     );
}
 
export default Home;