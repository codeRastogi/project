import React, { useState } from 'react';

const BriefForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    promotional: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      name: form.name,
      country_code: "91",
      phone_no: form.phone,
      email: form.email,
      service: form.service ? [form.service] : [],
      message: form.message,
      promotion: form.promotional,
    };
  
    try {
      const response = await fetch('https://test.ezworks.ai/form-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        alert('Form submitted successfully!');
        setForm({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
          promotional: true,
        });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row max-h-4xl font-sans bg-blue-950 text-black">
      {/* Left Panel with Background Image */}
      <div
        className="w-full lg:w-1/2 bg-cover bg-center text-white p-10"
        style={{ backgroundImage: 'url(/your-bg-image-path.png)' }} // replace with actual path
      >
        <h2 className="text-3xl font-bold">Send us a brief</h2>
        <p className="mt-4 text-lg">
          Our team will get in touch with you within 10 Minutes!
        </p>
      </div>

      {/* Right Panel with Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 p-10 bg-white shadow-md rounded space-y-4"
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <div className="flex space-x-2">
          <div className="w-1/5 flex items-center justify-center bg-gray-200 rounded text-gray-700">
            +91
          </div>
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-4/5 border px-4 py-2 rounded"
            required
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded text-gray-700"
        >
          <option value="">Service</option>
          <option value="Presentation Design">Presentation Design</option>
          <option value="Web Design">Web Design</option>
          <option value="App Design">App Design</option>
        </select>

        {form.service && (
          <div className="inline-block border px-3 py-1 rounded-full border-blue-900 text-blue-900 text-sm">
            {form.service}{' '}
            <button
              type="button"
              onClick={() => setForm({ ...form, service: '' })}
              className="ml-1 font-bold"
            >
              ×
            </button>
          </div>
        )}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded h-24"
        />

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            name="promotional"
            checked={form.promotional}
            onChange={handleChange}
          />
          <span>I would like to receive promotional emails</span>
        </label>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BriefForm;
