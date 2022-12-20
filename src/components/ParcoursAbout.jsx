import {Box, Typography} from "@mui/material";
import { useState } from "react";

const ParcoursAbout = () => {

    const [date, setDate] = useState('NOW')

    return (
        <Box
            sx={{
                marginTop: "40px"
            }}
        >
            <Typography variant="h6">
                Mon parcours
            </Typography>


            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent:"space-around",
                    marginTop: "30px"
                }}
            >
                <Box
                    onClick={()=> setDate("2019")}
                    className={date==="2019" ? "active-btn" : "outline-btn"}
                >
                    2019
                </Box>
                <Box
                    onClick={()=> setDate("2021")}
                    className={date==="2021" ? "active-btn" : "outline-btn"}
                >
                    2021
                </Box>
                <Box
                    onClick={()=> setDate("NOW")}
                    className={date==="NOW" ? "active-btn" : "outline-btn"}

                >
                    EN COURS
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "200px",
                    textAlign: "center"
                }}
            >
                {
                    date && date==="2019" ?
                    <Box>
                        <Typography variant="h5">BIA - Brevet d'Initiation Aéronautique</Typography>
                        <Typography variant="body1">Lycée Georges Cabanis - Brive-La-Gaillarde (19100)</Typography>
                    </Box>
                    : null
                }
                {
                    date && date==="2021" ?
                    <Box>
                        <Typography variant="h5">Baccalauréat Général - Admis Mention assez bien</Typography>
                        <Typography variant="body2">(Option Sciences de L'Ingénieur et Numérique et Sciences de l'Informatique)</Typography>
                        <Typography variant="body1">Lycée Georges Cabanis - Brive-La-Gaillarde (19100)</Typography>
                    </Box>
                    : null
                }
                {
                    date && date==="NOW" ?
                    <Box>
                        <Typography variant="h5">Bachelor développeur web</Typography>
                        <Typography variant="body1">Ecole Supérieur du Digital - Bordeaux (33000)</Typography>
                    </Box>
                    : null
                }
            </Box>
        </Box>
    );
}
 
export default ParcoursAbout;