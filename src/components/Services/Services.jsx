import "./Services.css";
import { FaFile, FaCloud } from "react-icons/fa";
import {
  MdOutlineContentPaste,
  MdMiscellaneousServices,
  MdAnalytics,
} from "react-icons/md";

function Services() {
  return (
    <div className="wrap">
      <h1>Records Management Solutions</h1>
      <h5>
        AGS Records Management offers you a wide range of tailor-made services
        to meet all of your needs
      </h5>
      <div className="container">
        <div className="cls">
          <Card1 />
          <h4>Auditing and Training</h4>
        </div>
        <div className="cls">
          <Card2 />
          <h4>Physical Archiving</h4>
        </div>
        <div className="cls">
          <Card3 />
          <h4>Electronic Archiving</h4>
        </div>
        <div className="cls">
          <Card4 />
          <h4>Digital Imaging</h4>
        </div>
        <div className="cls">
          <Card5 />
          <h4>Heritage Imaging</h4>
        </div>
        <p>
          AGS Records Management is able to assist in all stages of your
          archiving project: from analysing your documents, to filing and
          storing them physically or electronically. We also offer a heritage
          document imaging solution for our clients' heritage documentation
          preservation.
        </p>
        <button>
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div>
      <div className="card">
        <div className="button">
          <FaFile />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="card">
      <div className="button">
        <FaCloud />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="card">
      <div className="button">
        <MdOutlineContentPaste />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="card">
      <div className="button">
        <MdMiscellaneousServices />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card">
      <div className="button">
        <MdAnalytics />
      </div>
    </div>
  );
}

export default Services;
