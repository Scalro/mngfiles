import "./Footer.css";
import { MdLocalPhone, MdMail } from "react-icons/md";
import {
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="main">
      <div className="foot">
        <div>
          <h3 className="log">
            <img src="/Images/slogo.png" alt="" />
          </h3>
        </div>
        <div className="tact">
          <br />
          <strong>Our Services</strong>
          <ul>
            <li>
              <a href="/filem">Auditing andTrainig</a>
            </li>
            <li>
              <a href="/parchive">Physical Archiving</a>
            </li>
            <li>
              <a href="/earchive">Digital Archiving</a>
            </li>
            <li>
              <a href="/dimaging">Digital Imaging</a>
            </li>
            <li>
              <a href="/heritage">Heritage Imaging</a>
            </li>
          </ul>
        </div>
        <div className="tact">
          <br />
          <strong>Contact Us</strong>
          <span>
            <MdLocalPhone /> +254720964498
          </span>
          <span>
            <MdMail /> info@spotfile.com
          </span>
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
            <a href="!#">
              <FaYoutube />
            </a>
            <a href="!#">
              <FaInstagram />
            </a>
          </span>
        </div>

        <div className="tact">
          <strong>Policies</strong>
          <span>
            <a
              href="/Images/policy.pdf"
              download="Data Protection Policy by  SportFile Records Management Solutions"
            >
              Data Protection Policy
            </a>
          </span>
          <span>
            <a
              href="/Images/privacy_policy.pdf"
              download="Privacy Policy Statement by SportFile Records Management Solutions"
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
      <h6
        style={{
          textAlign: "center",
          backgroundColor: "grey",
          marginBottom: "0",
        }}
      >
        © Copyright Chemwotei 2024. All Rights Reserved
      </h6>
    </div>
  );
}

export default Footer;
