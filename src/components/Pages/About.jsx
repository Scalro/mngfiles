import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="areyou">
        <h1 style={{ color: "#132ceb" }}>
          Are you prepared for the changes ahead?
        </h1>
        <p>
          Initially facilitating physical storage and management services that
          encompassed assisting clients with structuring, managing and accessing
          their information in any format, at any time, from any location, we
          have deepened our offerings to remain abreast or provide our clients
          with world class services as the world accelerates towards
          digitisation and greater connectivity.
        </p>
      </div>
      <div className="values">
        <h1 style={{ color: "#101a63" }}>Values</h1>
        <p style={{ color: "#132ceb" }}>
          Our five core values guide us in being a trusted partner to our
          stakeholders
        </p>
        <div className="val">
          <div className="vcrd">
            <h3>We show commitment</h3>
            <p>
              We are passionate about and committed to providing quality service
              to our clients above all else
            </p>
          </div>
          <div className="vcrd">
            <h3>We act with integrity</h3>
            <p>
              We earn trust by consistently doing things the right way and
              delivering on our commitments every day. We hold ourselves
              accountable for results, creating a culture of responsibility and
              reliability
            </p>
          </div>
          <div className="vcrd">
            <h3>We manifest resourcefulness</h3>
            <p>
              We act with courage and creativity and are agile and adaptable in
              finding new and smarter ways to grow our Company and each other to
              achieve a better and more sustainable future for all.
            </p>
          </div>
          <div className="vcrd">
            <h3>We embody collaboration</h3>
            <p>
              We know it takes people with different ideas, strengths, interests
              and cultural backgrounds to make our Company, and our clients,
              succeed.
            </p>
          </div>
        </div>
        <div className="val">
          <div className="mv">
            <h3>Vision</h3>
            <p>
              To be our clients’ trusted records and information management
              partner.
            </p>
          </div>
          <div className="mv">
            <h3>Mission</h3>
            <p>
              Helping our clients address challenges and leverage opportunities,
              always looking for better ways, directional, never static,
              embracing change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
