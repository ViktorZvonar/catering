import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Implement what you want to do with the form data here.
    // For example, you could send it to an API endpoint.
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="fname">
        Full name:
      </label>
      <br />
      <input
        className="form-input"
        type="text"
        id="fname"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
      />
      <br />
      <label className="form-label" htmlFor="email">
        Email:
      </label>
      <br />
      <input
        className="form-input"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label className="form-label" htmlFor="subject">
        Subject:
      </label>
      <br />
      <input
        className="form-input"
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <br />
      <label className="form-label" htmlFor="message">
        Message:
      </label>
      <br />
      <textarea
        className="form-message-input form-input"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br />
      <button className="form-button button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
