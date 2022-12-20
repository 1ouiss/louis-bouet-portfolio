import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";

import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_thi73to', 'template_948tszq', form.current, 'IYOlrL20gO17r__cW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };


    return (
        <Box
            sx={{
                height: "65vh",
                marginTop: "100px"
            }}
        >
            <Box component="div">
                <Typography variant="h3">
                    Me contacter
                </Typography>
            </Box>

            <Box
                component="form"
                ref={form}
                onSubmit={(e)=> sendEmail(e)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "60px"
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Prénom"
                    variant="outlined"
                    color="secondary"
                    name="first_name"
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
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Nom"
                    variant="outlined"
                    color="secondary"
                    name="last_name"
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
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    name="user_email"
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
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={5}
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
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                    }}
                />

                <Button type="submit">
                    Envoyer
                </Button>
            </Box>
        </Box>
    );
}
 
export default Contact;