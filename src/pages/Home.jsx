import { Box, Typography } from "@mui/material";
import Split from "../components/Split";

const Home = () => {

    return (
        <Box component="div" className="home">
            <Box component="div" className="intro">
                <Typography variant="h1" className="intro__title">
                    Hello, I'm
                </Typography>
                <Split/>
            </Box>
        </Box>
     );
}
 
export default Home;