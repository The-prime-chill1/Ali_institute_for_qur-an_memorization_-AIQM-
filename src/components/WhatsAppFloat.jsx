import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../css/whatsapp.css';

const WhatsAppFloat = () => {
  const whatsappNumber = '+2349039785732';
  const message = 'Hello, I would like to inquire about admission at AIQM.';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;