import { Box } from "@mui/material";
import Split from "../components/Split";

const Home = () => {

    return (
        <Box component="div" className="home">
            <Box component="div" className="pres">
                <img src="./images/memoji.png" alt="" />
            </Box>
            <Split/>
        </Box>
     );
}
 
export default Home;