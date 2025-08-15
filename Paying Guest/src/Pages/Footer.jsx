import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router";

function Footer() {

    const navigate = useNavigate()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">


                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-indigo-400 hover:pl-2 transition-all duration-300"
                            onClick={() => navigate("/")}>
                            Home
                        </li>
                        <li className="hover:text-indigo-400 hover:pl-2 transition-all duration-300"
                            onClick={() => navigate("/aboutus")}>
                            About Us
                        </li>
                        <li className="hover:text-indigo-400 hover:pl-2 transition-all duration-300"
                            onClick={() => navigate("/pglistning")}>
                            PG Listings
                        </li>
                        <li className="hover:text-indigo-400 hover:pl-2 transition-all duration-300"
                            onClick={() => navigate("/contactus")}>
                            Contact
                        </li>
                    </ul>
                </div>




                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            📍 <span>Ahmedabad, Gujarat, India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            📞 <a href="tel:+918511190784" className="hover:text-indigo-400 transition">+91 8511190784</a>
                        </li>
                        <li className="flex items-center gap-2">
                            ✉️ <a href="mailto:pgfinder@example.com" className="hover:text-indigo-400 transition">pgfinder@example.com</a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="#" className="hover:text-indigo-400 transition transform hover:scale-125 duration-300">
                            <FaGlobe />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition transform hover:scale-125 duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition transform hover:scale-125 duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition transform hover:scale-125 duration-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                {/* Logo & About */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">PG Finder</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your trusted platform to find safe, affordable, and comfortable Paying Guest accommodations.
                        We connect you to the best PGs in your city with verified listings.
                    </p>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} PG Finder. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
