// src/components/Contact.tsx
import React, { useState } from 'react';
import styles from '../styles/styles';

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
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof ContactForm): void => {
    const errors: FormErrors = { ...formErrors };
    if (!contactForm[field]) {
      errors[field] = 'This field is required';
    } else if (field === 'email' && !validateEmail(contactForm.email)) {
      errors[field] = 'Please enter a valid email address';
    } else {
      delete errors[field];
    }
    setFormErrors(errors);
  };

  return (
    <form style={styles.contactForm}>
      {/* Form content */}
    </form>
  );
};

export default Contact;
