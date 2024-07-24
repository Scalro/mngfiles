import "./Footer.css";
import { MdLocalPhone, MdMail } from "react-icons/md";
import {
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="foot">
      <h3 className="log">SpotFile</h3>
      <span className="tact">
        <h5>
          <MdLocalPhone /> +254720964498
        </h5>
        <h5>
          <MdMail /> info@spotfile.com
        </h5>
        <span style={{ padding: "5px" }}>|</span>
        <h5>Privacy Policy</h5>
        <h5>Code of Ethics</h5>
        <span style={{ padding: "5px" }}>|</span>
        <span className="social">
          <a href="#!">
            <FaXTwitter />
          </a>
          <a href="!#">
            <FaFacebookF />
          </a>
          <a href="!#">
            <FaWhatsapp />
          </a>
          <a href="!#">
            <FaLinkedin />
          </a>
        </span>
      </span>
      <h6>© Copyright Chemwotei 2024. All Rights Reserved</h6>
    </div>
  );
}

export default Footer;
