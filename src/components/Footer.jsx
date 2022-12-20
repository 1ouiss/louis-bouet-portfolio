import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                marginTop: "200px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
                alignItems: 'center',
                height: "100px"
            }}
        >
            <Box
                sx={{
                    width: "60px",
                    height: "60px"
                }}
            >
                <a href="https://www.linkedin.com/in/louis-bouet/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                </a>
            </Box>
            <Box
                sx={{
                    width: "60px",
                    height: "60px"
                }}
            >
                <a href="https://github.com/1ouiss" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github fa-2x"></i>
                </a>
            </Box>
        </Box>
    );
}
 
export default Footer;