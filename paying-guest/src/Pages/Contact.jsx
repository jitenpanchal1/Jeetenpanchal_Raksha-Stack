import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
   <div className="bg-gray-50 py-10 px-6 flex justify-center">
  <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 transition duration-300 hover:shadow-2xl">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-600 mb-4 animate-pulse">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-6">
          We’re here to help you find the perfect PG accommodation and make your stay hassle-free.
          Whether you have a question, feedback, or need assistance, our team is just a message away!
        </p>

        {/* Office Address */}
        <div className="mb-6 hover:translate-x-1 transition duration-200">
          <h2 className="text-xl font-semibold text-gray-800">📍 Our Office</h2>
          <p className="text-gray-600">
            PG Finder Pvt. Ltd. <br />
            123 Main Street, Ahmedabad, Gujarat – 380001
          </p>
        </div>

        {/* Phone */}
        <div className="mb-6 hover:translate-x-1 transition duration-200">
          <h2 className="text-xl font-semibold text-gray-800">📞 Call Us</h2>
          <p className="text-gray-600">
            +91 98765 43210 <br />
            <span className="text-sm">(Mon–Sat, 9:00 AM – 7:00 PM)</span>
          </p>
        </div>

        {/* Email */}
        <div className="mb-6 hover:translate-x-1 transition duration-200">
          <h2 className="text-xl font-semibold text-gray-800">📧 Email Us</h2>
          <p className="text-gray-600">
            support@pgfinder.com <br />
            <span className="text-sm">(We usually reply within 24 hours.)</span>
          </p>
        </div>

        {/* Live Chat */}
        <div className="mb-6 hover:translate-x-1 transition duration-200">
          <h2 className="text-xl font-semibold text-gray-800">💬 Live Chat</h2>
          <p className="text-gray-600">
            Use the chat icon in the bottom-right corner to connect with our support team instantly.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">📢 Stay Connected</h2>
          <div className="flex gap-6 mt-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:scale-125 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:scale-125 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-2xl hover:scale-125 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="mt-6 text-gray-500 text-sm">
          📌 <strong>Note:</strong> Please include your <strong>name</strong>, <strong>contact number</strong>,
          and <strong>PG location</strong> (if applicable) when reaching out for faster assistance.
        </p>
      </div>
    </div>
  );
}

export default Contact;
