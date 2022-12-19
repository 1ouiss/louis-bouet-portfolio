import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Portfolio = ({projects}) => {

    const navigate = useNavigate();
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
                                    <Card
                                        key={project.id}
                                        onClick={() => navigate(`/portfolio/${project.id}`)}

                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            cursor: "pointer",
                                            maxWidth: 345,
                                            maxHeight: 345,
                                            m: 1,
                                            "&:hover": {
                                                filter: "brightness(0.5)",
                                                "& .MuiCardContent-root": {
                                                    opacity: 1,
                                                }
                                            }
                                        }}
                                    >
                                        <CardMedia component="img" image={project.image} alt={project.title} />
                                        <CardContent sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            opacity: 0,
                                            transition: "all 0.3s ease-in-out",
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}>
                                            0{index + 1}
                                            <br />
                                            {project.title}
                                        </CardContent>
                                    </Card>
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