import "../style.css"
import { Link } from "react-router-dom";


function Header() {
    return (
        <div class="nav">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="Items">NEW ITEMS</Link></li>
        </div>
    );
}

export default Header;