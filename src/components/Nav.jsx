import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <header>
            <div className="header-inner">
                <h1>
                    Bouet <span>Louis</span>
                </h1>
                <div id="menu-toggle" className="menu-toggle cursor-hover-element" onClick={(e) => handleClick(e)} ref={menuToggle}>
                    <div className="menu-toggle-inner magnet">
                        <div id="line-1" className={isMenuOpen ? "line top-line active" : "line top-line"} ref={line1}></div>
                        <div id="line-2" className={isMenuOpen ? "line bottom-line active" : "line bottom-line"} ref={line2}></div>
                    </div>
                </div>
                <nav id="nav" ref={nav} className={isMenuOpen ? "active" : null}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
                <div id="slide" className={isMenuOpen ? "slide active" : "slide"} ref={slide}></div>
            </div>
        </header>
     );
}
 
export default Nav;