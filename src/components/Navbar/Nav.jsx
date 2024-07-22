import "./Nav.css";
import { MdLocalPhone, MdMail } from "react-icons/md";

function Nav() {
  return (
    <div className="nav-cont">
      <nav>
        <h3 className="logo">FMS</h3>
        <ul>
          <li>
            <a href="!#">About</a>
          </li>
          <li>
            <a href="!#">Services</a>
          </li>
          <li>
            <a href="#!">Contact</a>
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
