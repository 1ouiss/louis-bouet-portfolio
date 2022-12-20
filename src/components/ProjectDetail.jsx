import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ProjectDetail = ({project, id}) => {
    return (
        <Box component="div">
            <Card

                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    m: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    color: "secondary",
                    boxShadow: "none"
                }}
            >
                <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                        maxHeight: "600px"
                    }}
                />
                <CardContent sx={{
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            margin: "30px 0"
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            margin: "20px 0"
                        }}
                    >
                        Technologies utilisées : &nbsp;
                        {
                            project.stack
                        }
                    </Typography>

                    <Typography variant="body2">
                        {
                            project.description
                        }
                    </Typography>
                    <Typography
                        sx={{
                            margin: "20px 0"
                        }}
                    >
                        {
                            project.link
                            &&
                            <Typography>
                                Voir le rendu : &nbsp;
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    {project.title}
                                </a>
                            </Typography>
                        }
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
 
export default ProjectDetail;