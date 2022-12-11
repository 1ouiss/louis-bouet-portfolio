import { useRef, useEffect } from 'react';

const Split = () => {
    const textTop = useRef(null);
    const textBottom = useRef(null);
    const textUnder = useRef(null);
    
    useEffect(() => {
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

    const mouseEnter = () => {
        console.log("mouseEnter");

    }
    return ( 
        <div className="splitContainer">
            <div className="splitText textTop" ref={textTop} onMouseEnter={mouseEnter}>
                <span>
                Louis Bouet
                </span>
            </div>
            <div className="splitText textBottom" ref={textBottom}>
                <span>
                Louis Bouet
                </span>
            </div>
            <div className="underText" ref={textUnder}>
                Developpeur Web
            </div>
        </div>
     );
}
 
export default Split;