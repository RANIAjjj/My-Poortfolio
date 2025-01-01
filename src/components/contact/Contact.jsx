import React from "react";
import Form from "./Form";
import Info from "./Info";

function Contact() {
  return (
    <>
      <div id="contact" className="contact-section shadow-2xl shadow-gray-600 dark:bg-slate-800">
        <div className="contact-container ">
          <Info/>
          <Form/>
        </div>
      </div>
    </>
  );
}

export default Contact;
