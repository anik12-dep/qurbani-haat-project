import React from "react";

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
          <p>Email: support@qurbanihaat.com</p>
          <p>Phone: +880 1712-345678</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-bold mb-3">Social Links</h2>

          <div className="flex flex-col gap-2">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
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
