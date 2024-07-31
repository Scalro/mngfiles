import "./Nav.css";
import { MdLocalPhone, MdMail } from "react-icons/md";

function Nav() {
  return (
    <div className="nav-cont">
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/Images/slogo.png" alt="Logo" />
          </a>
        </div>
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
          <li className="dropdown">
            <a href="#!">
              Governance <i className="fas fa-caret-down"></i>
            </a>
            <div className="dropdown-content">
              <div className="dropdown-section">
                DATA PROTECTION ACT KENYA, 2019
              </div>
              <a href="#!">Enquiry</a>
              <a href="#!">Policy</a>
              <div className="dropdown-section">PRIVACY</div>
              <a href="#!">Privacy Policy</a>
            </div>
          </li>
        </ul>
        <button>
          <a href="/contact">Contact Us</a>
        </button>
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
