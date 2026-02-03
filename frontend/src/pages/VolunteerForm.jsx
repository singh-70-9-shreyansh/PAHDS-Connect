import React, { useState } from 'react';
import axios from 'axios';
import './VolunteerForm.css';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    town: '',
    state: '',
    services: '',
    timeline: '',
    contribution: '',
    created_at: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/volunteer', formData);
      alert('✅ Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        gender: '',
        address: '',
        town: '',
        state: '',
        services: '',
        timeline: '',
        contribution: '',
        created_at: ''
      });
    } catch (error) {
      console.error(error);
      alert('❌ Error submitting form. Please try again.');
    }
  };

  return (
    <div className="volunteer-container">
      <h2 className="form-title">🌍 Volunteer Registration</h2>
      <p className="form-subtitle">
        Join hands with <strong>PAHDS Connect</strong> to bring positive change to communities.
      </p>

      <form className="volunteer-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />

        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <textarea name="address" placeholder="Communication Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="town" placeholder="Town / City" value={formData.town} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
        <input type="text" name="services" placeholder="Service you want to provide" value={formData.services} onChange={handleChange} required />

        <select name="timeline" value={formData.timeline} onChange={handleChange} required>
          <option value="">Timeline of Work</option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="Custom">Custom (Mention below)</option>
        </select>

        <input type="text" name="contribution" placeholder="Custom Duration / Any Contribution Details" value={formData.contribution} onChange={handleChange} />

        <label>Date of Submission:</label>
        <input type="date" name="created_at" value={formData.created_at} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
