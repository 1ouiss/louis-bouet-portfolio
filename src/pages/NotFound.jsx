import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Box
            sx={{
                minHeight: "70vh",
                textAlign: 'center',
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h4">
                ❌ Page non trouvée ❌
            </Typography>
            <Link to='/'>
                Retour à l'acceuil
            </Link>
        </Box>
    );
}
 
export default NotFound;