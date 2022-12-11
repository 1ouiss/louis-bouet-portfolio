import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <header>
            <div class="header-inner">
                <h1>
                    Bouet <span>Louis</span>
                </h1>
                <div id="menu-toggle" class="menu-toggle cursor-hover-element">
                    <div class="menu-toggle-inner magnet">
                        <div id="line-1" class="line top-line"></div>
                        <div id="line-2" class="line bottom-line"></div>
                    </div>
                </div>
                <nav id="nav">
                    <a href="#">Home</a>
                    <a href="#">À propos</a>
                    <a href="#">Mes projets</a>
                </nav>
                <div id="slide" class="slide"></div>
            </div>
        </header>
     );
}
 
export default Nav;