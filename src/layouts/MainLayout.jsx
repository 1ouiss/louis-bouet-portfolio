import { Box, Container } from "@mui/material";
import Nav from "../components/Nav";

const MainLayout = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Box disableGutters>
                <Nav />
            </Box>
            <Box sx={{ p: 3 }} disableGutters>
                {children}
            </Box>
        </Container>
    );
}
 
export default MainLayout;