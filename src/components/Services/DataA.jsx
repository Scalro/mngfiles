import React from "react";
import "./DataA.css";
import { FaArchive } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { GrDocumentLocked } from "react-icons/gr";

function DataA() {
  return (
    <div>
      <div className="imag"></div>
      <div className="tr">
        <div className="trr">
          <h1>Physical Archiving - Physical Document Management</h1>
          <p>
            Physical Archiving requires efficient organisation and a thought-out
            methodology, backed by solid resources. It is advised that you
            contact a professional to help you develop and implement your
            physical document management and archiving processes.
          </p>

          <h3>
            <i>
              "We can effectively and sustainably assist you in managing your
              archives"
            </i>
          </h3>
          <div className="trrr">
            <img src="/Images/02.jpeg" alt="" />
            <p>
              Outsourcing your physical document management will allow you to
              save time and space and to increase efficiency, while remaining
              completely secure.
              <p>
                Moreover, our processes guarantee you complete traceability of
                your physical records. Managing and preserving records is a
                profession in its own right, requiring specialised skills and
                expertise including archival, organisational, logistics, IT,
                regulatory or real estate.
              </p>
              <h4>
                We provide a full complement of document archiving services,
                managing the archive life cycle of your records from
                digitization and storing, through to destruction. A turnkey
                solution that will benefit your business.
              </h4>
            </p>
          </div>
          <h2>Physical document management from A to Z</h2>
          <h5>
            Streamlined processes, ease of access and the security of your
            records can be guaranteed by AGS Records Management
          </h5>
        </div>
      </div>
      <div className="r">
        <span style={{ marginTop: "150px" }}>
          <i>
            <BsCollectionFill />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Document Collection/implementation</h3>
            <h4>Transfer and handling</h4>
            <ul>
              <li>
                Reconciling logistical and human resources according to your
                premises and needs
              </li>
            </ul>
            <h4>
              Sorting, taking inventory and packing records into containers
            </h4>
            <ul>
              <li>
                Classification according to the defined classification matrix
              </li>
              <li>Packing into containers adapted to your records</li>
              <li>Unique bar code allocation for each record</li>
            </ul>
            <h4>Data capture</h4>
            <ul>
              <li>Processing the inventory</li>
              <li>Integration into our database</li>
              <li>Enabling online access to the inventory</li>
            </ul>
            <h4>
              Our solution offers automatic or semi-automatic control and an
              ability to statistically analyse whether the brief matches the
              service that was rendered.
            </h4>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Secure Document Storage</h3>
            <h4>Method of storage</h4>
            <ul>
              <li>Records storage on metal racks</li>
            </ul>
            <h4>Guaranteed security</h4>
            <ul>
              <li>Detection and protection against intrusion and fire</li>
              <li>Regular fumigation and vermin treatment</li>
              <li>Security installations checked by accredited companies</li>
              <li>Random location of containers</li>
            </ul>
            <h4>Confidentiality</h4>
            <ul>
              <li>Anonymity of clients’ records</li>
              <li>Access controlled operation system</li>
            </ul>
            <h4>
              Option to install a records storage facility on your own premises.
            </h4>
          </p>
          <span style={{ marginTop: "130px" }}>
            <i>
              <MdOutlineSecurity />
            </i>
          </span>
        </div>
      </div>
      <div className="r">
        <span style={{ marginTop: "100px" }}>
          <i>
            <FaArchive />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Document Archival Services</h3>
            <h4>Access and administrative processing</h4>
            <ul>
              <li>Web-interface enabling you to manage your records</li>
              <li>Personalised access levels for your employees</li>
            </ul>
            <h4>Communication</h4>
            <ul>
              <li>
                Prompt transmission that is adapted to your requirements and
                workflows
              </li>
              <li>Physical or digital document delivery</li>
              <li>On-line requests via our website</li>
            </ul>
            <h4>SpotFile Records Management offers you a scanning service.</h4>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Confidential Records Destruction</h3>
            The destruction of the records concerns documents whose legal period
            of preservation has expired or confidential records that need to be
            shredded.
            <h4>Different solutions proposed:</h4>
            <ul>
              <li>Recycling</li>
              <li>Grinding or compacting</li>
            </ul>
            <h4>Which implies:</h4>
            <ul>
              <li>Authorisation for destruction by authorised persons</li>
              <li>Certificate of destruction issued</li>
            </ul>
          </p>
          <span style={{ marginTop: "100px" }}>
            <i>
              <GrDocumentLocked />
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

export default DataA;
