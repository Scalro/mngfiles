import React from "react";
import { FaShareSquare } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
import { LuMonitorCheck } from "react-icons/lu";
import { BsBroadcastPin } from "react-icons/bs";
function General() {
  return (
    <div>
      <div className="imag"></div>
      <div className="tr">
        <div className="trr">
          <h1>HERITAGE IMAGING</h1>
          <p>
            The preservation of Art and Heritage pieces is a matter of urgency
            as they are continuously eroded by the elements. SpotFile Records
            Management has years of experience in heritage imaging and know how
            to take care of your valuables.
          </p>

          <h3>
            <i>"Don't let your precious items become irreparably damaged"</i>
          </h3>
          <div className="trrr">
            <img src="/Images/heritage.png" alt="" />
            <p>
              <p>
                SpotFile Records Management is used to handling art and heritage
                items, we are experts in imaging these important documents.
                SpotFile Records Management has all the resources and experience
                to handle your heritage imaging and ensures you the best
                results. Get in contact with one of our experts who will give
                you professional advice.
              </p>
              <p>
                Digitized imaging will give your heritage pieces a new breath of
                life and ensure it can be enjoyed by yourself and others for
                many more years to come.
              </p>
              <h4>
                In today’s fast paced world, electronic forms of medium are far
                easier to access, for a larger number of people, and in wider
                geographical locations – so you can share the joy you gain from
                the piece easily!
              </h4>
            </p>
          </div>
          <h2>A host of benefits to enjoy</h2>
          <h5>Imaging for preservation and ease of access</h5>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <LuMonitorCheck />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Digitise</h3>
            <p>
              Preparation (dust-removal, de-conditioning/ reconditioning,
              archive capturing, taking inventory) and digital document storage
              requires skill. The choice of scanner and accessories to be used
              is determined by each document’s characteristics.
            </p>
            <h4>
              Specific procedures and equipment are used according to the type
              and nature of the document.
            </h4>
            <p>
              We also provide advice on the appropriate storage and transfer
              methods for your digital data.
            </p>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Enrich</h3>
            <p>
              Process and optimise images to make the information more easily
              accessible through key words, image type, or geographical
              searches. We edit images (touch up, image optimisation, OCR or
              text/image segmentation, incorporation of metadata or copyrights)
              to enrich the content.
            </p>
            <h4>
              Our solution offers automatic or semi-automatic control and an
              ability to statistically analyse whether the brief matches the
              service that was rendered.
            </h4>
          </p>
          <span>
            <i>
              <FaFileCircleCheck />
            </i>
          </span>
        </div>
      </div>
      <div className="r">
        <span>
          <i>
            <FaShareSquare />
          </i>
        </span>
        <div className="rr">
          <p>
            <h3>Share</h3>
            <p>
              Share your heritage documents thanks to our online digital
              library, which offers greater access to the information.
            </p>
            <h4>
              Enhance your digital documents with distribution solutions
              (interactive databases, interoperability, search engine) with
              hosting included.
            </h4>
          </p>
        </div>
      </div>
      <div className="tt">
        <div className="t">
          <p>
            <h3>Broadcast</h3>
            <p>
              The digitisation of your heritage collections means that the
              public now can have access to historic documents.
            </p>
            <p>
              We have developed our own in-house solutions which are available
              in either internet or intranet mode, with secure access. We assist
              you in selecting the best solution for your heritage collections,
              offering various digitisation forms including, digital library,
              interactive slab, 3D booklet, connected e-book, guided tour and
              scenography.
            </p>
            <h4>
              With Limb Gallery, our digital-library, your audience will be able
              to observe, in detail, your heritage collections via a simple
              computer screen or tablet.
            </h4>
          </p>
          <span>
            <i>
              <BsBroadcastPin />
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

export default General;
