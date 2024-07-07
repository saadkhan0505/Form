import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepperForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        if (!formData.phone) tempErrors.phone = 'Phone Number is required';
        if (!formData.message) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate('/confirmation');
        }
    };

    return (
    <div className="container">
            <div className="max-w-md mx-auto mt-8">
            <div style={{ textAlign: 'center' }}>
                <h2 className="text-2xl mb-2" style={{ fontWeight: 'bold' }}>Details</h2>
                <p className="text-gray-700" style={{ fontSize: '12px' }}>We’re thrilled at the opportunity to help you grow your business online.</p>
                <p className="text-gray-700 mb-4" style={{ fontSize: '12px' }}>Please let us know the best way to reach you.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div className="flex space-x-4 mb-2">
                    <div className="w-1/2">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                    </div>
                </div>

                <div className="mb-3">
                    <label className="block text-gray-700">Anything else you’d like to share?</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border p-2 w-full h-24 rounded"
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-green-500 text-white px-4 py-2">
                        Send Request
                    </button>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <p style={{ textAlign: 'center', fontSize: '12px' }}>We promise never to share your information or spam your inbox</p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default StepperForm;
