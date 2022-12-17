import { Box } from '@mui/material';
import { useRef, useEffect, useState } from 'react';


const Split = () => {
    const textTop = useRef(null);
    const textBottom = useRef(null);
    const textUnder = useRef(null);
    const [cursor, setCursor] = useState(null);

    useEffect(() => {

        setCursor(document.querySelector(".cursor"))


        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                textTop.current.style.bottom = "1em";
                textBottom.current.style.top = "1em";
                setTimeout(() => {
                    textUnder.current.style.opacity = "1";
                }, 500);
            }else{
                textTop.current.style.bottom = ".5em";
                textBottom.current.style.top = ".5em";
                setTimeout(() => {
                    textUnder.current.style.opacity = "0";
                }, 500);
            }
        });
        
    }, []);

    const changeCursor = () => {
        if (cursor.classList.contains('exclude-cursor') ) {
            cursor.classList.remove("exclude-cursor");
        }else{
            cursor.classList.add("exclude-cursor");
        }
    }

    return ( 
        <Box component="div" className="splitContainer">
            <Box component="div" className="splitText textTop" ref={textTop}>
                <Box
                    component="span"
                    onMouseEnter={(e)=> changeCursor()}
                    onMouseLeave={(e) => changeCursor()}
                >
                    Louis Bouet
                </Box>
            </Box>
            <Box component="div" className="splitText textBottom" ref={textBottom}>
                <Box
                    component="span"
                    onMouseEnter={(e)=> changeCursor()}
                    onMouseLeave={(e) => changeCursor()}
                >
                    Louis Bouet
                </Box>
            </Box>
            <Box component="div" className="underText" ref={textUnder}>
                <Box
                    component="span"
                    onMouseEnter={(e)=> changeCursor()}
                    onMouseLeave={(e) => changeCursor()}
                >
                    Developpeur Web
                </Box>
            </Box>
        </Box>
     );
}
 
export default Split;