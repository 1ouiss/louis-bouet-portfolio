import { Box } from "@mui/material";
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
                        <Box component="div" className="portfolio-inner">
                            <Box component="div" className="portfolio-title">
                                <h2>Portfolio</h2>
                            </Box>
                            <Box component="div" className="portfolio-content">
                                {projects.map((project) => (
                                    <Box component="div" className="portfolio-item" key={project.id} onClick={() => navigate(`/portfolio/${project.id}`)}>
                                        <Box component="div" className="portfolio-item-inner">
                                            <Box component="div" className="portfolio-item-image">
                                                <img src={project.image} alt="" />
                                            </Box>
                                            <Box component="div" className="portfolio-item-content">
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
}
 
export default Portfolio;