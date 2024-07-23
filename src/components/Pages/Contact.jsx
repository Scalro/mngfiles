import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#e1f0fc",
        margin: "10px",
        paddingBottom: "15px",
        marginLeft: "95px",
        marginRight: "80px",
      }}
    >
      <div style={{ backgroundColor: "blue", height: "7vh" }} className="">
        {" "}
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Contact Us
        </h1>
      </div>
      <div
        style={{
          margin: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "70px",
        }}
      >
        <AltContact />
        <ContactForm />
      </div>
    </div>
  );
}
function AltContact() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <h4 style={{ paddingBottom: "20px" }}> Contacts</h4>
      <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
      <span>info@chemwotei.com</span> <br />
      <br />
      <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
      <span>+254720964498 </span>
      <div className="socl">
        <h1>
          <a href="https://" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </h1>

        <h1>
          <a href="https://" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </h1>

        <h1>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <MdWhatsapp />
          </a>
        </h1>

        <h1>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
        </h1>
      </div>
    </div>
  );
}
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a8ybpzg", "template_aqxdo8l", form.current, {
        publicKey: "Fb_OnEyf7PoQwpTry",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Sent Successfuly");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="frm">
      <form ref={form} onSubmit={sendEmail}>
        <div className="userdetails">
          <div className="inputbox">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your Name" name="user_name" />
          </div>
          <div className="inputbox">
            <span className="details">Surname</span>
            <input
              type="text"
              placeholder="Enter your Surname"
              name="user_name"
            />
          </div>
          <div className="inputbox">
            <span className="details">Email</span>
            <input
              type="text"
              placeholder="Enter your Email"
              name="user_name"
            />
          </div>
          <div className="inputbox">
            <span className="details">Phone Number</span>
            <input
              type="text"
              placeholder="Enter your Number"
              name="user_name"
            />
          </div>
          <div className="inputbox">
            <span className="details">Company</span>
            <input
              type="text"
              placeholder="Enter your Company"
              name="user_name"
            />
          </div>
          <div className="inputbox">
            <span className="details">Designation</span>
            <input
              type="text"
              placeholder="Enter your Designation"
              name="user_name"
            />
          </div>
          <div>
            <input
              style={{
                height: "30px",
                backgroundColor: "blue",
                color: "#fff",
                borderStyle: "none",
                borderRadius: "5px",
                width: "150px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
