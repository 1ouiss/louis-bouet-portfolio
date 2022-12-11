import { Box, Container } from "@mui/material";
import Nav from "../components/Nav";
import { useRef, useEffect} from "react";
import { gsap } from "gsap";

const MainLayout = ({children}) => {
    const cursorOuter = useRef(null);
    const cursorInner = useRef(null);

    let mouse = {
        x: -100,
        y: -100,
    };
    
    useEffect(() => {
        // let SY = 0;
        console.log(cursorOuter);
        console.log(cursorInner);
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
            <Box disableGutters>
                <Nav />
            </Box>
            <Box sx={{ p: 3 }} disableGutters>
                {children}
            </Box>
            <div className="outer-cursor cursor cursor--large" ref={cursorOuter}></div>
            <div className="inner-cursor cursor cursor--small" ref={cursorInner}></div>
        </Container>
    );
}
 
export default MainLayout;