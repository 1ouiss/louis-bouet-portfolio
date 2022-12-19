import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardProject from "../components/CardProject";

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
                    <div>
                        <h1>Hello project {id}</h1>
                        <h2>{project.title}</h2>
                    </div>
                ) : (
                    <Box component="div" className="portfolio">
                        <Box component="div">
                            <Box component="div">
                                <h2>Portfolio</h2>
                            </Box>
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    margin: "0 auto",
                                    width: "100%",
                                    maxWidth: "1200px",
                                    
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