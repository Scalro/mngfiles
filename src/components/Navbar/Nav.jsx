import "./Nav.css";
import { MdLocalPhone, MdMail } from "react-icons/md";

function Nav() {
  return (
    <div className="nav-cont">
      <nav>
        <h3 className="logo">
          <a href="/">FMS</a>
        </h3>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="cnt">
          <h5>
            <MdLocalPhone /> +254723900990
          </h5>
          <h5>
            <MdMail /> info@fms.com
          </h5>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
