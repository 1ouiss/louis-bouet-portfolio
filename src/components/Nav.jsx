import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cursor, setCursor] = useState(null)

    const menuToggle = useRef(null);
    const nav = useRef(null);
    const slide = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);

    const handleClick = (e) => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }else{
            setIsMenuOpen(true)
        }
    }

    useEffect(()=>{
        setCursor(document.querySelector(".cursor"))

    }, [])

    const changeCursor = () => {
        if (cursor.classList.contains('exclude-cursor') ) {
            cursor.classList.remove("exclude-cursor");
        }else{
            cursor.classList.add("exclude-cursor");
        }
    }

    return ( 
        <Box component="header"
        onMouseEnter={(e)=> changeCursor()}
        onMouseLeave={(e) => changeCursor()}>
            <Box component="div" className="header-inner">
                <Link to='/'>
                    <img src="./images/memoji.png" alt="" />
                </Link>
                <Box id="menu-toggle" component="div" className="menu-toggle cursor-hover-element" onClick={(e) => handleClick(e)} ref={menuToggle}>
                    <Box component="div" className="menu-toggle-inner magnet">
                        <Box id="line-1" component="div" className={isMenuOpen ? "line top-line active" : "line top-line"} ref={line1}></Box>
                        <Box id="line-2" component="div" className={isMenuOpen ? "line bottom-line active" : "line bottom-line"} ref={line2}></Box>
                    </Box>
                </Box>
                <Box component="nav" id="nav" ref={nav} className={isMenuOpen ? "active" : null}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>A propos</Link>
                    <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Me contacter</Link>
                </Box>
                <Box component="div" id="slide" className={isMenuOpen ? "slide active" : "slide"} ref={slide}></Box>
            </Box>
        </Box>
     );
}
 
export default Nav;