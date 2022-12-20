import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardProject from "../components/CardProject";
import ProjectDetail from "../components/ProjectDetail";

const Portfolio = ({projects}) => {

    const { id } = useParams()

    const [project, setProject] = useState({});

    useEffect(() => {
        if (id) {
            const project = projects.find((project) => project.id === parseInt(id));
            setProject(project);
        }
    }, [id, projects])


    return (

        <Box component="div" className="portfolio">

            {
                id ? (
                    <ProjectDetail project={project} id={id}/>
                ) : (
                    <Box component="div" className="portfolio" sx={{marginTop: "60px"}}>
                        <Box component="div">
                            <Box component="div">
                                <Typography variant="h3">
                                    Portfolio
                                </Typography>
                            </Box>
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    margin: "0 auto",
                                    width: "100%",
                                    maxWidth: "1200px",
                                    marginTop: "40px"
                                }}
                            >
                                {projects.map((project, index) => (
                                    <CardProject project={project} index={index} key={index}/>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
}
 
export default Portfolio;