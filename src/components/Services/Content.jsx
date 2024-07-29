import React from "react";
import "./Filem.css";
import { FaClipboardList } from "react-icons/fa";
import { MdCollectionsBookmark, MdAdfScanner } from "react-icons/md";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { SiEsotericsoftware } from "react-icons/si";
function Content() {
  return (
    <div>
      <div className="imag"></div>
      <div className="tr">
        <div className="trr">
          <h1>Digital Imaging</h1>
          <p>
            Digital imaging is essential for the preservation of physical
            documents and heritage pieces or artworks. It keeps items in a safe
            place. SpotFile Records Management has provided digital imaging to a
            number of esteemed organisations in order to secure their most
            valuable items.
          </p>

          <h3>
            <i>
              "Your important items deserved to be stored with Digital Scanning"
            </i>
          </h3>
          <div className="trrr">
            <img src="/Images/scanner.png" alt="" />
            <p>
              <p>
                In our modern world, digital imaging is becoming increasingly
                vital to organisations.
              </p>
              <p>
                SpotFile Records Management can guarantee the same service
                quality for the digitalisation, the physical archiving of the
                original document and the processing of the digital image.
              </p>
              <h4>
                Each file is carefully managed to optimise the ease and speed of
                document retrieval.
              </h4>
            </p>
          </div>
          <h2>Digitise, Guarantee, Optimise</h2>
          <h5>
            Our document digitization department manages the digital imaging
            process of your documents, which are then returned to you in an
            electronic format.
          </h5>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <MdCollectionsBookmark />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Preparation</h3>
            <h4>
              Receipt, sorting and preparation of the documents to digitise
            </h4>
            <p>
              This first step consists of determining the quality of the
              documents to be scanned, sorting them and removing the staples,
              paper clips or binders, if needed.
            </p>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Digital Imaging and Scanning</h3>
            <h4>
              Digitization of the records and the dematerialised records
              structure
            </h4>
            <p>
              SpotFile Records Management carries out the imaging your documents
              in highly secure, specialised rooms. We use high-performance
              scanners, dedicated computer work stations and advanced software.
            </p>
          </p>
          <span>
            <i>
              <MdAdfScanner />
            </i>
          </span>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <AiOutlineNodeIndex />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Digital Document Indexing</h3>
            <h4>Indexing and verification of your electronic documents</h4>
            <p>
              Our EAS software integrates a hybrid classification plan system
              that manages physical document storage and electronic records in a
              unified way. Indexation is set up according to your search
              criteria, to ensure the ease of retrieval of digital documents.
              Our experts will also verify the digitised documents to be sure of
              the quality and to respect the client’s brief.
            </p>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Search for your Digitised Records</h3>
            <h4>Document Management System with search criteria</h4>
            <p>
              The documents, once digitalised and indexed, will be added to our
              Document Storage System. This will allow users to consult
              digitised records in an easy and secure way. The original physical
              records will be stored securely and confidentially..
            </p>
            <p>
              EAS software search engine will examine all the metadata of each
              saved document and match it with those provided by the user in the
              search interface.
            </p>
          </p>
          <span>
            <i>
              <FaClipboardList />
            </i>
          </span>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>EAS: Our technology to search and request a record</h2>
        <p>Unique software at your fingertips, in seconds!</p>
      </div>
      <div className="r">
        <span style={{ marginTop: "150px" }}>
          <i>
            <SiEsotericsoftware />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>EAS Software</h3>
            <h4>
              EAS is a unique software developed by the SpotFile Records
              Management team.
            </h4>
            <p>
              OThis allows us to control its development and integrate the
              demands of our customers more efficiently. It enables the search
              and control of physical archives, as well as the consultation of
              digital images.
            </p>
            <p>
              EAS is a full Web SAAS Software. Access is secured by a login and
              password, as well as by a HTTPS protocol. Thanks to its web
              technology, an Internet connection is sufficient to connect. The
              deployment of this tool is therefore very fast, at a lower cost
              and without any change to computer equipment.
            </p>
            <p>
              Due to SpotFile Records Managements’ stringent quality and
              information security standards the EAS System is ISO 27001
              certified. This ensures the protection and security of all
              information and peace of mind for our clients. International
              standards in Information security are assured.
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

export default Content;
