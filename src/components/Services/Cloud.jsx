import React from "react";
import { GrVirtualMachine } from "react-icons/gr";
import { GoRepoLocked } from "react-icons/go";
function Cloud() {
  return (
    <div>
      <div className="imag"></div>
      <div className="tr">
        <div className="trr">
          <h1>Digital Archiving System</h1>
          <p>
            Nowadays, digital archiving is inevitable and it has to be well
            managed. Important elements have to be taken into consideration such
            as the security or legal requirements.
          </p>

          <h3>
            <i>
              "We work with several organizations from different industries with
              various needs"
            </i>
          </h3>
          <div className="trrr">
            <img src="/Images/002.jpeg" alt="" />
            <p>
              Our digital archiving software, also known as electronic
              archiving, has been specifically developed by SpotFile Records
              Management software engineers to meet the needs of our customers.
              It will allow you to consult your physical records and the image
              of your dematerialised document, via a simple interface.
              <p>
                SpotFile Records Management software has been developed in the
                form of a web service; it adapts to all platforms and it
                requires no additional installation.
              </p>
              <h4>
                Because each client is unique, our engineer will accompany you
                to implement your dematerialization project from the
                identification of your need until the records management
                software is deployed.
              </h4>
            </p>
          </div>
          <h2>Our digital archiving solutions</h2>
          <h5>2 solutions for digital archiving</h5>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <GoRepoLocked />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Secured Record Archiving</h3>
            <p>
              Put your information in a safe and accessible place by using our
              own records management software. Sensitive data conservation is
              available via our HTTPS portal optimised for a secure connection
              using a log in and a password, and accessible from any terminal
              connected to internet. Our solution guarantee you a complete
              traceability of documents, which allows you to follow the
              lifecycle of your data.
            </p>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Virtual Document safe</h3>
            <p>
              Your information is in good hands with our strategic data storage,
              which will meet the technical and legal requirements of your
              documents. Our Virtual Safe system allows for several
              authentication modes, as needed, and requested security levels.
              Your documents are managed according to a classification plan and
              controlled by an administrator. Modification and destruction of
              data is prohibited outside strict control.
            </p>
          </p>
          <span>
            <i>
              <GrVirtualMachine />
            </i>
          </span>
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

export default Cloud;
