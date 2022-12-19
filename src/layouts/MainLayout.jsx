import { Box, Container } from "@mui/material";
import Nav from "../components/Nav";
import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import Footer from "../components/Footer";

const MainLayout = ({children}) => {
    const cursorOuter = useRef(null);
    const cursorInner = useRef(null);

    let mouse = {
        x: -100,
        y: -100,
    };
    
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            gsap.to(cursorInner.current, {
                duration: 0.15,
                x: mouse.x,
                y: mouse.y,
            });

            gsap.to(cursorOuter.current, {
                duration: .5,
                x: mouse.x,
                y: mouse.y,
            });
        })
    }, [])



    return (
        <Container maxWidth="lg">
            <Box
            disablegutters="false"
            sx={{
                height: "100px"
            }}
            >
                <Nav />
            </Box>
            <Box sx={{ p: 3 }} disablegutters="false">
                {children}
            </Box>
            <Box>
                <Footer/>
            </Box>
            <Box component="div" className="outer-cursor cursor cursor--large" ref={cursorOuter}></Box>
            <Box component="div" className="inner-cursor cursor cursor--small" ref={cursorInner}></Box>

        </Container>
    );
}
 
export default MainLayout;