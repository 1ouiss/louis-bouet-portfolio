import { Box, Typography, Grid } from "@mui/material";
import CardProject from "./CardProject";

const ProjectsHome = ({projects}) => {
    return (
        <Box
            component="div"
            className="skills"
            sx={{
                marginTop: "120px"
            }}
        >
            <Typography variant="h3" className="about-title">
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
                {projects.map((project, index) => (
                    <CardProject project={project} index={index} key={index}/>
                ))}
            </Grid>
        </Box>
    );
}
 
export default ProjectsHome;