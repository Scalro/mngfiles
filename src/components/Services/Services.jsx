import "./Services.css";
import {
  FaServer,
  FaArchive,
  FaFeatherAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdScanner } from "react-icons/md";

function Services() {
  return (
    <div className="wrap">
      <h1>Records Management Solutions</h1>
      <h5>
        SpotFile Records Management offers you a wide range of tailor-made
        services to meet all of your needs
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
          <h4>Digital Archiving</h4>
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
          SpotFile Records Management is able to assist in all stages of your
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
    <a href="/filem">
      <div className="card">
        <div className="button">
          <FaChalkboardTeacher />
        </div>
      </div>
    </a>
  );
}

function Card3() {
  return (
    <a href="/earchive">
      <div className="card">
        <div className="button">
          <FaServer />
        </div>
      </div>
    </a>
  );
}

function Card4() {
  return (
    <a href="/dimaging">
      <div className="card">
        <div className="button">
          <MdScanner />
        </div>
      </div>
    </a>
  );
}

function Card5() {
  return (
    <a href="/heritage">
      <div className="card">
        <div className="button">
          <FaFeatherAlt />
        </div>
      </div>
    </a>
  );
}

function Card2() {
  return (
    <a href="/parchive">
      <div className="card">
        <div className="button">
          <FaArchive />
        </div>
      </div>
    </a>
  );
}

export default Services;
