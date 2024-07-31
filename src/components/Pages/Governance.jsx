import React from "react";
import "./Governance.css";

function Governance() {
  return (
    <div className="gov">
      <h1>Governance</h1>
      <p>
        SpotFile Records Management ensures that your Security and Privacy is
        well preserved.
      </p>
      <div className="gove">
        <div className="dplcy">
          <h3>Data Protection Policy</h3>
          <p>
            Our data protection policy ensures that client files and documents
            are safeguarded with the highest level of security. We use advanced
            encryption techniques to protect data during storage and
            transmission, ensuring that unauthorized access is prevented.
            Regular security audits and updates are conducted to maintain the
            integrity of our systems. Access to sensitive information is
            restricted to authorized personnel only, following strict
            authentication protocols. Our backup solutions provide robust data
            recovery options in the event of a disaster, ensuring continuity and
            reliability. We are committed to maintaining confidentiality and
            complying with all relevant data protection regulations.{" "}
            <a
              href="/Images/policy.pdf"
              download="Data Protection Policy by  SportFile Records Management Solutions"
            >
              <i>Read More...</i>
            </a>
          </p>
        </div>
      </div>
      <div className="gove">
        <div className="dplcy">
          <h3>Privacy Policy</h3>
          <p>
            Our privacy policy prioritizes the protection of client files and
            documents by implementing comprehensive security measures. We
            utilize state-of-the-art encryption to secure data both at rest and
            in transit, ensuring unauthorized access is prevented. Access
            controls and authentication protocols limit data access to
            authorized personnel only. Regular audits and security updates are
            conducted to safeguard system integrity. We also employ secure
            backup and recovery solutions to ensure data availability and
            resilience. By adhering to stringent privacy regulations, we are
            committed to maintaining the confidentiality and trust of our
            clients at all times.{" "}
            <a
              href="/Images/privacy_policy.pdf"
              download="Privacy Policy Statement by SportFile Records Management Solutions"
            >
              <i>Read More...</i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Governance;
