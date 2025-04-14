import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Krish Ghosh. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            YouTube
          </a>
          <a
            href="mailto:example@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            Gmail
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
