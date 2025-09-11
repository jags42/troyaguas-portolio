// src/components/Contact.js
import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qc8c3cw", 
        "template_5kh09nq",  
        e.target,
        "buyaqYmFJIyOyuZ5h"       
      )
      .then(
        () => {
          alert("Message sent!");
          e.target.reset(); 
        },
        (error) => {
          alert("Failed: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Me<span className="highlight-color">.</span>
        </h2>
        <p className="mb-8 text-lg">
          Have a project or want to connect? Send me a message!
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"                
            placeholder="Your Name"
            className="w-full p-3 rounded border border-primary bg-white text-black  "
            required
          />
          <input
            type="email"
            name="email"                
            placeholder="Your Email"
            className="w-full p-3 rounded border border-primary bg-white text-black"
            required
          />
          <textarea
            name="message"            
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded border border-primary bg-white text-black"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan text-primary px-6 py-3 rounded "
          >
            Send Message
          </button>
        </form> 
      </div>
    </section>
  );
}
