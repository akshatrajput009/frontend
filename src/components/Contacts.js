import React, { useState, useContext } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import { Context } from "../context/contextApi";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://lonely-ring-dove.cyclic.cloud";

  const { contactRef, checkRef } = useContext(Context);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setFormError("Please fill in all required fields.(*)");
      return;
    }

    if (!isValidEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    // Reset form error and set loading to true
    setFormError("");
    setLoading(true);

    let dataSend = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    if (checkRef.current?.checked) {
      try {
        const res = await fetch(`${baseUrl}/sendEmail`, {
          method: "POST",
          body: JSON.stringify(dataSend),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (res.status > 199 && res.status < 300) {
          alert("Sent Successfully !");
        } else {
          alert("Cannot Submit, Try again Later !");
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred while sending the email.");
      } finally {
        setLoading(false); // Set loading back to false
      }
    } else {
      alert("Please agree to our policy before submitting!");
      setLoading(false); // Set loading back to false in case of policy agreement failure
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div ref={contactRef} className="contactBackground">
        <div className="contacts">
          <div className="fields">
            <h2>Send Message</h2>

            <form>
              <div className="firstRow">
                <div className="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label>Your Name*</label>
                </div>
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label>Your Email*</label>
                </div>
              </div>
              <div className="subject">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <label>Subject</label>
              </div>
              <div className="text">
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                <label>Your Message*</label>
              </div>
              <div className="policyCheck">
                <input
                  ref={checkRef}
                  type="checkbox"
                  id="check"
                  name="check"
                ></input>
                <label>
                  By continuing, you agree to our{" "}
                  <Link to="/policy">
                    <span>privacy policy</span>
                  </Link>{" "}
                </label>
              </div>
              <div style={{ height: "30px" }}>
                {formError && (
                  <div className="error" style={{ color: "red" }}>
                    {formError}
                  </div>
                )}
              </div>

              {/* Conditional rendering based on loading state */}
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <input
                  type="submit"
                  value="Submit"
                  onClick={(e) => sendEmail(e)}
                />
              )}
            </form>
          </div>
          <div className="address">
            <div className="addressDetails">
              <h3>Contact Information</h3>
              <div className="contactInfo">
                <div className="contactIcons">
                  <MdLocationPin />
                </div>
                <h6>
                  Smetanova 757/17,Veveří Brno - Czechia,Europe DIC: CZ26277913
                  ICO: 26277913
                </h6>
              </div>

              <div className="contactInfo">
                <div className="contactIcons">
                  <MdEmail />
                </div>
                <h6>info@bandm.cz</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          frameborder="0"
          title="Our Location"
          width="100%"
          height="250"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.9271470873555!2d16.600176214983573!3d49.20194158441023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129444872cc6b9%3A0x5551b666baf00d12!2sSmetanova%20757%2C%20602%2000%20Brno-st%C5%99ed-Veve%C5%99%C3%AD%2C%20Czechia!5e0!3m2!1sen!2sat!4v1671218666029!5m2!1sen!2sat"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Contacts;
