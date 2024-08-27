'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        emailjs.init("Fu8zh-f3eiBWjh1ye");
    }, []);

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        message: '',
        isError: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus({ message: '', isError: false });

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            event.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setSubmitStatus({ message: 'Your request has been sent successfully!', isError: false });
                setFormState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });

                if (formRef.current) {
                    formRef.current.reset();
                }

            }, (error) => {
                console.log('Failed to send the email:', error.text);
                setSubmitStatus({ message: 'Failed to send request. Please try again.', isError: true });
            });
    };

    return (
        <div className="flex flex-col p-8 border-4 border-white min-h-screen bg-gray-600">
            <div className="min-h-screen flex flex-col justify-center items-center px-4">
                <div className="bg-black bg-opacity-50 p-6 max-w-2xl w-full mb-10">
                    <h1 className="text-white text-2xl mb-4">Contact Us</h1>
                    <p className="mb-8 text-gray-300 text-center">
                        Have a commercial construction project in mind? We're here to bring your vision to life with expert craftsmanship and dedicated service. Whether you're planning a new build, renovation, or expansion, reach out to us today to discuss how we can make your project a success. Let’s create something exceptional together.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-white mb-2">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full p-2 bg-gray-950 opacity-50 border-black rounded"
                                value={formState.firstName}
                                onChange={handleChange}
                                required
                                placeholder='First Name'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-white mb-2">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full p-2 bg-gray-950 opacity-50 border-black rounded"
                                value={formState.lastName}
                                onChange={handleChange}
                                required
                                placeholder='Last Name'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-white mb-2">Phone Number:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full p-2 bg-gray-950 opacity-50 border-black rounded"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                placeholder='Phone Number'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 bg-gray-950 opacity-50 border-black rounded"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full p-2 bg-gray-950 opacity-50 border-black rounded"
                                value={formState.message}
                                onChange={handleChange}
                                placeholder='Message'
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Send
                        </button>
                    </form>

                    <p className="mt-4 text-gray-300 text-xs">By submitting this form you agree to our <a href="/terms" className="text-red-700 underline">terms and conditions</a> and our <a href="/privacy" className="text-red-700 underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>

                    {submitStatus.message && (
                        <p className={`mt-4 text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
                            {submitStatus.message}
                        </p>
                    )}
                </div>
                <div className="flex justify-between items-center w-full max-w-2xl mt-8">
                    <div className="flex items-center">
                        <span className="icon-email mr-2"></span>
                        <div>
                            <p className="text-sm">Email us:</p>
                            <p className="text-gray-300">icm@iwctoledo.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="icon-phone mr-2"></span>
                        <div>
                            <p className="text-sm">Call us:</p>
                            <p className="text-gray-300">+1 (419) 381-1855</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link href="/" className="bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Back to Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
}