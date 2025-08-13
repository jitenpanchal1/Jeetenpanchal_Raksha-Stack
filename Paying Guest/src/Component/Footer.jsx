import React from 'react'

function Footer() {
    return (
        < footer className="bg-gray-900 text-gray-300" >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">PG Finder</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your trusted platform to find safe, affordable, and comfortable Paying Guest accommodations.
                        We connect you to the best PGs in your city with verified listings.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
                        <li><a href="/about" className="hover:text-indigo-400 transition">About Us</a></li>
                        <li><a href="/listings" className="hover:text-indigo-400 transition">PG Listings</a></li>
                        <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
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

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="#" className="hover:text-indigo-400 transition">🌐</a>
                        <a href="#" className="hover:text-indigo-400 transition">📘</a>
                        <a href="#" className="hover:text-indigo-400 transition">🐦</a>
                        <a href="#" className="hover:text-indigo-400 transition">📸</a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} PG Finder. All rights reserved.
            </div>
        </footer >

    )
}

export default Footer
