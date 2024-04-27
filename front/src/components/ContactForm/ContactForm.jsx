import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactPhone: '',
    leadVisaCategory: '',
  });

  const [requiredFieldsError, setRequiredFieldsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.contactName || !formData.contactPhone) {
      setRequiredFieldsError(true);
      setTimeout(() => {
        setRequiredFieldsError(false);
      }, 10000); // 10 seconds
      return;
    }

    try {
      await axios.post('http://localhost:3001/api/createDeal', formData);
      console.log('Deal created successfully');
    } catch (error) {
      console.error('Error creating deal:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-container">
      {requiredFieldsError && (
        <div className="error-message">Имя и телефон обязательны для заполнения</div>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Консультация</h1>
        <label>Имя*</label>
        <input
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleInputChange}
          
        />
        <label>Телефон*</label>
        <input
          type="phone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleInputChange}
          
        />
        <label>Тип визы:</label>
        <select
          name="leadVisaCategory"
          value={formData.leadVisaCategory}
          onChange={handleInputChange}
        >
          <option value="Туристическая">Туристическая</option>
          <option value="Бизнес">Бизнес</option>
          <option value="Учебная">Учебная</option>
        </select>
        <button type="submit">Заказать звонок</button>
      </form>
    </div>
  );
};

export default ContactForm;
