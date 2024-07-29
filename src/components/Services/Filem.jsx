import React from "react";
import "./Filem.css";
import { FaClipboardList, FaUsersCog } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
function Filem() {
  return (
    <div>
      <div className="imag"></div>
      <div className="tr">
        <div className="trr">
          <h1>Archivist Training and Records Auditing</h1>
          <p>
            We provide the best archivist training and document auditing
            solutions, helping you to manage your records securely. We also
            provide training on the latest technologies to your staff members.
          </p>

          <h3>
            <i>
              "Our dedicated staff provides guidance to support you in managing
              your records"
            </i>
          </h3>
          <div className="trrr">
            <img src="/Images/002.jpeg" alt="" />
            <p>
              We answer all your questions and simplify the physical archiving
              process.
              <ul>
                <li>What are the applicable regulations?</li>
                <li>What are your needs and obligations?</li>
                <li>Which documents should be retained?</li>
                <li>How to manage and store your documents?</li>
              </ul>
              <h4>
                Whether you are physically archiving your documents on your own
                premises or not, SpotFile Records Management can help you
                optimise the organisation of your files.
              </h4>
            </p>
          </div>
          <h2>Complete Auditing and Document Management Training Solutions</h2>
          <h5>
            Our team of experts will ensure the best possible system is
            developed to suit your archiving needs
          </h5>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <TbBulb />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Reords Auditing</h3>
            <p>
              The audit ensures a state-of-the-art records management process is
              developed for all your departments. It finds solutions to any
              problems, taking into account regulatory controls and any
              constraints specific to your company, as well as the direct and
              indirect costs of physical archiving and electronic archiving.
              Following this customised analysis our team can develop and
              implement procedures and document management solutions, as well as
              train your staff, in order to improve your company’s records
              management.
            </p>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Records Management and Archivist Training</h3>
            <p>
              SpotFile Records Management can provide training in the use of EAS
              software, our online records management solution, or in the use of
              scanner software. Document management and archivist training is
              provided in small groups to facilitate learning and is provided by
              experts in records management
            </p>
          </p>
          <span>
            <i>
              <FaClipboardList />
            </i>
          </span>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <FaUsersCog />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Provision of archivist</h3>
            <p>
              Managing and storing records is a complete process that requires
              various skills, including providing advice on the organisation of
              records and indexing. This is why we propose to provide you with a
              qualified and experienced team of archivists, well-versed in
              handling public and private documents. They come to your site and
              guide you through the process of organising your documents.
            </p>
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "20px " }}>
        <button>
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </div>
  );
}

export default Filem;
