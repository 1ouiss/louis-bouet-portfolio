import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav>
            <div>
                <h1>Logo</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
     );
}
 
export default Nav;