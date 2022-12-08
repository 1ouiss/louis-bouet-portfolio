import { useRef, useEffect } from 'react';

const Split = () => {
    const textTop = useRef(null);
    const textBottom = useRef(null);
    const textUnder = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            textTop.current.style.bottom = "1em";
            textBottom.current.style.top = "1em";
            setTimeout(() => {
                textUnder.current.style.opacity = "1";
            }, 500);
        });
    }, []);
    return ( 
        <div className="splitContainer">
            <div className="splitText textTop" ref={textTop}>
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