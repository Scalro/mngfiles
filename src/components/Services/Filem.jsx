import React from "react";
import "./Filem.css";
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
        </div>
      </div>
    </div>
  );
}

export default Filem;
