import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function contactForm(event) {
    event.preventDefault();

    alert(
      `Thank you ${name} for your message! I will get back to you as soon as possible.`,
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contact-main">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>
      <form className="contact-form" id="contactForm" onSubmit={contactForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="inputName"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="inputMessage"
          name="message"
          rows="5"
          required
          value={message}
          onChange={handleChange}
        ></textarea>
        <br />
        <button
          type="submit"
          className="contact-button"
          disabled={!name || !email || !message}
        >
          Send
        </button>
      </form>
    </div>
  );
}
