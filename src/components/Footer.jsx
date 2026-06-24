import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Qurbani Haat</h2>
          <p className="text-gray-300">
            A modern livestock marketplace where users can explore healthy cows
            and goats for Qurbani and place bookings securely after
            authentication.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Info</h2>
          <p className="text-sm">Email: support@qurbanihaat.com</p>
          <p className="text-sm">Phone: +880 1712-345678</p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-bold mb-3">Social Links</h2>

          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2 hover:text-blue-400">
              <FaFacebook className="text-sm" />
              Facebook
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-pink-400">
              <FaInstagram className="text-sm" />
              Instagram
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-red-400">
              <FaYoutube className="text-sm" />
              YouTube
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-blue-300">
              <FaLinkedin className="text-sm" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4">
        <p>© {new Date().getFullYear()} Qurbani Haat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
