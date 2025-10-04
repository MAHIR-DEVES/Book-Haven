import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Faq = () => {
  const faqs = [
    {
      question: 'What is this book about?',
      answer:
        'The Productivity Masterclass is a comprehensive guide that teaches proven strategies and frameworks to help you achieve more in less time. It covers time management, habit formation, and productivity systems used by top performers.',
    },
    {
      question: 'Is this book suitable for beginners?',
      answer:
        'Absolutely! The book is designed for both beginners and experienced professionals. It starts with fundamental concepts and gradually progresses to advanced techniques, making it accessible to everyone.',
    },
    {
      question: 'How is this book different from other productivity books?',
      answer:
        'Unlike other productivity books that offer generic advice, The Productivity Masterclass provides specific, actionable frameworks with real-world examples, practical exercises, and step-by-step implementation guides that you can apply immediately.',
    },
    {
      question: 'What format is the book available in?',
      answer:
        'The book is available in both physical paperback and digital PDF formats. When you purchase, you get immediate access to the digital version, and the physical copy ships within 2 business days.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
          <span className="text-2xl">❓</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get all the information you need about The Productivity Masterclass
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md ${
              openIndex === index ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
            }`}
          >
            <button
              className="w-full text-left flex justify-between items-center p-6 hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    openIndex === index
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <span className="font-semibold text-sm">Q{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-blue-500 text-white rotate-180'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <span className="font-semibold text-sm">A</span>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                    {index === 4 && (
                      <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                        🛡️ 30-Day Guarantee
                      </div>
                    )}
                    {index === 5 && (
                      <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                        🎁 Free Bonuses Included
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
