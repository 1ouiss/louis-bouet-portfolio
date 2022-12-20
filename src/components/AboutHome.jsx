import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const AboutHome = () => {
    return (
        <Box component="div" className="about">
            <Typography variant="h3" className="about-title">
                À propos de moi
            </Typography>

            <Box
                component="div"
                className="about-text"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px auto",
                    "@media (max-width: 768px)": {
                        flexDirection: "column-reverse",
                    }
                }}
            >
                <Typography
                    variant="body1"
                    className="about-text"
                    sx={{
                        marginRight: "70px",
                        "@media (max-width: 768px)": {
                            marginRight: 0,
                        }
                    }}
                    >
                    Je suis un développeur web junior basé à Bordeaux.
                    J'ai commencé à apprendre le développement web en 2020 et j'ai depuis travaillé sur plusieurs projets personnels et professionnels.
                    Je suis passionné par le développement web et je suis toujours à la recherche de nouveaux projets et de nouvelles opportunités.
                    <Typography>
                        <Link to="/about">
                            En savoir plus
                        </Link>
                    </Typography>
                </Typography>
                <Box
                    component="div"
                    className="about-img"
                >
                    <img src="./images/photo_about.jpeg" alt="about" className="image-about"/>
                </Box>
            </Box>  
        </Box>
    );
}
 
export default AboutHome;