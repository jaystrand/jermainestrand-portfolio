import React, { useState } from 'react';
import '../styles/styles.tsx';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.name) {
      newErrors.name = 'Name is required';
    }

    if (!form.email) {
      newErrors.email = 'Email is required';
    }

    if (!form.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send form data to server
      console.log(form);
    }
  };

  return (
    <div className="contactSection">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`input ${errors.name ? 'inputError' : ''}`}
          />
          {errors.name && <p className="errorMessage">{errors.name}</p>}
        </div>
        <div className="formGroup">
          {errors.name && <p className="errorMessage">{errors.name}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`input ${errors.email ? 'inputError' : ''}`}
          />
          {errors.email && <p className="errorMessage">{errors.email}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`input ${errors.message ? 'inputError' : ''}`}
          />
          {errors.message && <p className="errorMessage">{errors.message}</p>}
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;