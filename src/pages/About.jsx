import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ParcoursAbout from "../components/ParcoursAbout";
import SkillsBox from "../components/SkillsBox";

const About = () => {
    const [skills] = useState([
        {
            id: "1",
            className: "fa-brands fa-html5",
            title: "HTML"
        },
        {
            id: "2",
            className: "fa-brands fa-css3",
            title: "CSS"
        },
        {
            id: "3",
            className: "fa-brands fa-sass",
            title: "SASS"
        },
        {
            id: "4",
            className: "fa-brands fa-square-js",
            title: "JAVASCRIPT"
        },
        {
            id: "5",
            className: "fa-brands fa-php",
            title: "PHP"
        },
        {
            id: "6",
            className: "fa-brands fa-node-js",
            title: "NODEJS"
        },
        {
            id: "7",
            className: "fa-brands fa-python",
            title: "PYTHON"
        },
        {
            id: "8",
            className:"fa-brands fa-vuejs",
            title: "VUEJS"
        },
        {
            id: "9",
            className:"fa-brands fa-react",
            title: "REACTJS"
        },
        {
            id: "10",
            className:"fa-brands fa-bootstrap",
            title: "BOOTSTRAP"
        },
        {
            id:"11",
            className: "fa-brands fa-wordpress",
            title: "WORDPRESS"
        },
        {
            id:"12",
            className: "fa-brands fa-github",
            title: "GIT/GITHUB"
        },
    ])

    return ( 
        <Box
            sx={{
                marginTop: "60px",
                "@media (max-width: 768px)": {
                    marginTop: "50px",
                }
                
            }}
        >
            <Box component="div">
                <Typography variant="h3">
                    À propos de moi 
                </Typography>
            </Box>
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
                </Typography>
                <Box
                    component="div"
                    className="about-img"
                    sx={{
                        maxWidth: "400px",
                        maxHeight: "400px",

                        margin: "0 auto",
                        "@media (max-width: 768px)": {
                            margin: "2rem",
                        },
                    }}
                >
                    <img src="./images/photo_about.jpeg" alt="about" className="image-about"/>
                </Box>
            </Box>

            <ParcoursAbout/>

            <Box
                sx={{
                    marginTop: "40px"
                }}
            >
                <Typography variant="h6">
                    Mes compétences
                </Typography>
                <Box>
                    <SkillsBox skills={skills}/>
                </Box>
            </Box>


        </Box>

     );
}
 
export default About;