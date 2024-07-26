import "./Services.css";
import { FaFile, FaCloud } from "react-icons/fa";
import {
  MdOutlineContentPaste,
  MdMiscellaneousServices,
  MdAnalytics,
} from "react-icons/md";

function Services() {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#000e75" }}>Our Services</h2>
      <div className="container">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="card">
      <span className="icon">
        <FaFile /> <h2>Record Management</h2>
      </span>
      <p>
        We organize, store, and allow accessing of digital files efficiently. We
        provide naming conventions, folder structures, backups, and permissions
        to ensure data integrity, security, and easy retrieval. This streamlines
        workflows and reduces the risk of data loss.
      </p>
      <div className="button">
        <a href="/filem">Explore More..</a>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="card">
      <span className="icon">
        <FaCloud /> <h2>Cloud Services</h2>
      </span>
      <p>
        We organize, store, and allow accessing of digital files efficiently. We
        provide naming conventions, folder structures, backups, and permissions
        to ensure data integrity, security, and easy retrieval. This streamlines
        workflows and reduces the risk of data loss.
      </p>
      <div className="button">
        <a href="/cloud">Explore More..</a>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="card">
      <span className="icon">
        <MdOutlineContentPaste /> <h2>Data and Content Management</h2>
      </span>
      <p>
        We organize, store, and allow accessing of digital files efficiently. We
        provide naming conventions, folder structures, backups, and permissions
        to ensure data integrity, security, and easy retrieval. This streamlines
        workflows and reduces the risk of data loss.
      </p>
      <div className="button">
        <a href="/content">Explore More..</a>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="card">
      <span className="icon">
        <MdMiscellaneousServices /> <h2>General Services</h2>
      </span>
      <p>
        We organize, store, and allow accessing of digital files efficiently. We
        provide naming conventions, folder structures, backups, and permissions
        to ensure data integrity, security, and easy retrieval. This streamlines
        workflows and reduces the risk of data loss.
      </p>
      <div className="button">
        <a href="/advisory">Explore More..</a>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card">
      <span className="icon">
        <MdAnalytics /> <h2>Data Analytics</h2>
      </span>
      <p>
        We organize, store, and allow accessing of digital files efficiently. We
        provide naming conventions, folder structures, backups, and permissions
        to ensure data integrity, security, and easy retrieval. This streamlines
        workflows and reduces the risk of data loss.
      </p>
      <div className="button">
        <a href="/dataA">Explore More..</a>
      </div>
    </div>
  );
}

export default Services;
