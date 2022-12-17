import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return ( 
        <Box component="header">
            <Box component="div" className="header-inner">
                <h1>
                    Bouet <span>Louis</span>
                </h1>
                <Box id="menu-toggle" component="div" className="menu-toggle cursor-hover-element" onClick={(e) => handleClick(e)} ref={menuToggle}>
                    <Box component="div" className="menu-toggle-inner magnet">
                        <Box id="line-1" component="div" className={isMenuOpen ? "line top-line active" : "line top-line"} ref={line1}></Box>
                        <Box id="line-2" component="div" className={isMenuOpen ? "line bottom-line active" : "line bottom-line"} ref={line2}></Box>
                    </Box>
                </Box>
                <Box component="nav" id="nav" ref={nav} className={isMenuOpen ? "active" : null}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </Box>
                <Box component="div" id="slide" className={isMenuOpen ? "slide active" : "slide"} ref={slide}></Box>
            </Box>
        </Box>
     );
}
 
export default Nav;