import React from "react";
import { useState } from "react";
import "./Filem.css";
import Slider from "./Slider";
function Filem() {
  const [toggle, setToggle] = useState(1);

  function UpdateTabs(id) {
    setToggle(id);
  }
  return (
    <div>
      <div className="imag">
        <h1>Record Management</h1>
        <Slider />
      </div>

      <div className="sbtn">
        <button onClick={() => UpdateTabs(1)}>Scanning</button>{" "}
        <button onClick={() => UpdateTabs(2)}>Storage</button>{" "}
        <button onClick={() => UpdateTabs(3)}>
          Filing and Storage Products
        </button>{" "}
        <button onClick={() => UpdateTabs(4)}>Confidential Destruction</button>{" "}
      </div>
      <div>
        <div className={toggle === 1 ? "tbs" : "tabs"}>
          <div className="cn">
            <div></div>
            <h1>Scanning</h1>
            <p>
              SpotFile has captured over 60 million lines of data and stored
              over 309 million images, making them easily accessible for
              clients. This service allows businesses to digitize their
              documents, reducing the need for physical storage and improving
              overall efficiency.The company currently stores over 8.5 million
              boxes, ensuring the safe and secure storage of your documents. The
              conversion process can be carried out by SpotFile through either
              an outsourced arrangement whereby the final product will be held
              and managed on SpotFile’s systems, an insourced arrangement
              whereby SpotFile manages the infrastructure and staffing on
              customer premises or a customised combination of both.
            </p>
            <div className="str">
              <img src="/Images/scanner.png" alt="" />
              <img src="Images/vrecorder.png" alt="" />
            </div>
            <div className="ctn">
              <div className="crd">
                <div className="ct">
                  <h3>Digital Scanning</h3>
                  <p>Convert media into digital copies.</p>
                </div>
              </div>
              <div className="crd">
                <div className="ct">
                  <h3>Production Film Digitisation (Scanning)</h3>
                  <p>
                    Scanning of roll film, fiche or aperture cards for the rapid
                    digitising of high volumes of data.
                  </p>
                </div>
              </div>
              <div className="crd">
                <div className="ct">
                  <h3>COM Recording</h3>
                  <p>
                    Fast and economical method of converting digital files to
                    proven and archival micro-formats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 2 ? "tbs" : "tabs"}>
          <div className="cn">
            <h1>Storage</h1>
            <p>
              The storage and management of large quantities of inactive and
              semi-active records is a specialist business. Our four decades of
              experience ensures effective management of documents and records
              throughout every part of the information life cycle.
            </p>
            <div className="str">
              <img src="/Images/002.jpeg" alt="filing" />
              <img style={{ height: "270px" }} src="/Images/01.jpeg" alt="" />
            </div>
            <div className="ctn">
              <div className="crd">
                <h3>Vault Storage</h3>
                <p>
                  Our secure, climate-controlled vaults provide the utmost
                  protection against moisture, dust and contaminants and are
                  weather and fire-resistant with gas suppression. These
                  facilities are constantly monitored by CCTV, are strictly
                  access controlled and are protected by perimeter fencing.
                </p>
              </div>
              <div className="crd">
                <h3>Records Storage</h3>
                <p>
                  Records are safe in our purpose-built, world-class warehouses
                  which meet industry standards to protect against elements. Our
                  sophisticated labelling, indexing, search, retrieval, tracking
                  and re-filing system always guarantees quick and easy access
                  to your information.
                </p>
              </div>
              <div className="crd">
                <h3>Active Filing</h3>
                <p>
                  Records can be deep stored for extended periods of time or,
                  for customers who need quick and easy access to their files on
                  an ongoing basis, we offer cost-effective active filing
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 3 ? "tbs" : "tabs"}>
          <div className="cn">
            <h1>Filing and Storage Products</h1>
            <div className="ig">
              <img src="/Images/002.jpeg" alt="filing" />

              <p>
                SpotFile offers a range of filing and storage products to help
                businesses keep their documents organized and easily accessible.
                From POPIA compliant files for medical businesses, to files and
                accessories, archive and off-site storage boxes, filing
                cabinets, bulk filers and shelving products, we are a leading
                provider of filing solutions for every business regardless of
                size or nature. Our comprehensive range of products can be
                customised to suit your every requirement. We have expanded our
                product range to include boxes, labelling and packaging material
                required for moving and packing for both business and commercial
                use.
              </p>
              <img src="/Images/01.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className={toggle === 4 ? "tbs" : "tabs"}>
          <div className="cn">
            <h1>Confidential Destruction</h1>
            <div className="ig">
              <img src="/Images/07.jpeg" alt="" />
              <p>
                SpotFile offers a range of filing and storage products to help
                businesses keep their documents organized and easily accessible.
                Your records can be a goldmine for identity thieves and you may
                be inadvertently helping them. Protect your identity, save
                yourself time, and prevent the hassle of fraud by securely
                disposing your confidential information. Our world-class systems
                and state-of-the-art cross-cutting technology deliver superior
                on-site and off-site document destruction solutions to
                businesses across South Africa. Not sure how often you need to
                shred? Our product brand, Cleardata will advise you how often
                your business needs to destroy confidential information.
              </p>
              <img src="/Images/08.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filem;
