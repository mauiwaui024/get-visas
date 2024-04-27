import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Modal.css';


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 60000); // открыть каждую минуту

    return () => clearInterval(interval);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div>Закажите констультацию уже сейчас и наши специалисты свяжутся с вами</div>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Modal;
