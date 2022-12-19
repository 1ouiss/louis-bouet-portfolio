import { Card, CardContent, CardMedia} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardProject = ({project, index}) => {
    const navigate = useNavigate();

    return (
            <Card
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

    );
}
 
export default CardProject;