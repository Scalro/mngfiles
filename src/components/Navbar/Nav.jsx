import "./Nav.css";
import { MdLocalPhone, MdMail } from "react-icons/md";

function Nav() {
  return (
    <div className="nav-cont">
      <nav>
        <h3 className="logo">
          <a href="/">SpotFile</a>
        </h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/services">Our Services</a>
          </li>
          <li>
            <a href="/investors">Investors</a>
          </li>
          <li>
            <a href="/governance">Governance</a>
          </li>
          <li>
            <a href="/industry">Industry Sectors</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="cnt">
          <h5>
            <MdLocalPhone /> +254720964498
          </h5>
          <h5>
            <MdMail /> info@spotfile.com
          </h5>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
