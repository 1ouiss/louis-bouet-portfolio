import { Box, TextField } from "@mui/material";

const Contact = () => {
    return (
        <Box component="form">
            <Box component="div">
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        m: 1,
                        color: "white",
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                        "& .MuiInputLabel-outlined": {
                            color: "white",
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
 
export default Contact;