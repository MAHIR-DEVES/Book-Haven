import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';

const ContactIcon = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll
    });
  };

  return (
    <div className="fixed bottom-5 right-10 z-50">
      <div className="flex items-center flex-col-reverse gap-6">
        {/* WhatsApp Button */}
        <div>
          <a
            href="https://wa.me/8801978866977"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center w-14 h-14"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

        {/* Scroll to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="bg-blue-300  p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center w-14 h-14"
          >
            <FaArrowUp size={30} color="white" className="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactIcon;
