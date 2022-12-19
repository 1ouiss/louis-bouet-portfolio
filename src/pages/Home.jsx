import { Box, Typography, Grid } from "@mui/material";
import Split from "../components/Split";
import { useEffect, useState } from "react";
import CardProject from "../components/CardProject";

const Home = ({projects}) => {

    const [projectsView, setProjectsView] = useState([]);

    useEffect(() => {
        setProjectsView(projects.slice(0, 3))
    }, [projects])

    return (
        <Box component="div" className="home">
            <Box component="div" className="intro">
                <h1 variant="h1" className="intro-title">
                    Bonjour, je suis
                </h1>
                <Split/>
            </Box>
            <Box component="div" className="about">
                <Typography variant="h4" className="about-title">
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
                    <Typography variant="body1" className="about-text">
                        Je suis un développeur web junior basé à Bordeaux. J'ai commencé à apprendre le développement web en 2020 et j'ai depuis travaillé sur plusieurs projets personnels et professionnels. Je suis passionné par le développement web et je suis toujours à la recherche de nouveaux projets et de nouvelles opportunités.
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
            </Box>
            <Box component="div" className="skills">
                <Typography variant="h2" className="project-title">
                    Mes projets
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        margin: "0 auto",
                        width: "100%",
                        maxWidth: "1200px",
                        padding: "0",
                        "& .MuiGrid-item": {
                            padding: "0",
                        }
                    }}
                >
                    {projectsView.map((project, index) => (
                        <CardProject project={project} index={index} key={index}/>
                    ))}
                </Grid>
            </Box>

        </Box>
     );
}
 
export default Home;