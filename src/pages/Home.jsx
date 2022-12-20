import { Box } from "@mui/material";
import Split from "../components/Split";
import { useEffect, useState } from "react";
import ProjectsHome from "../components/ProjectsHome";
import AboutHome from "../components/AboutHome";


const Home = ({projects}) => {

    const [projectsView, setProjectsView] = useState([]);

    useEffect(() => {
        setProjectsView(projects.slice(0, 3))
    }, [projects])

    return (
        <Box component="div" className="home">
            <Box component="div" className="intro">
                <h1 className="intro-title">
                    Bonjour, je suis
                </h1>
                <Split/>
            </Box>
            <AboutHome/>
            <ProjectsHome projects={projectsView}/>

        </Box>
     );
}
 
export default Home;