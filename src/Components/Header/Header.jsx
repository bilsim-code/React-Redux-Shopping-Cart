import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <Link to={"/"} className="logo">
            <h1>react redux shopping cart</h1>
        </Link>
        <ul className="nav-ul">
            <Link to={'/'} className="nav-li">
            <li >Home</li>
            </Link>
            <Link to={'/cart'} className="nav-li">
            <li>Cart</li>
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
