import React from 'react';
import {
  FaCheck,
  FaLock,
  FaShippingFast,
  FaShoppingCart,
  FaStar,
} from 'react-icons/fa';

const BookDetails = ({
  book,
  quantity,
  setQuantity,
  totalPrice,
  setShowCheckout,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Book Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                Bestseller
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {book.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">by {book.author}</p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.floor(book.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600">({book.reviews} reviews)</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-indigo-600">
                ৳{book.price}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ৳{book.originalPrice}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                Save ৳{(book.originalPrice - book.price).toFixed(2)}
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {book.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What's Included:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {book.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheck className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Quantity:
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl font-bold hover:bg-gray-300 transition duration-300"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-gray-800 w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl font-bold hover:bg-gray-300 transition duration-300"
                >
                  +
                </button>
                <span className="text-lg text-gray-600 ml-4">
                  Total:{' '}
                  <span className="font-bold text-indigo-600">
                    ৳{totalPrice}
                  </span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowCheckout(true)}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2"
              >
                <FaShoppingCart />
                <span>Buy Now - ৳ {totalPrice}</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FaShippingFast />
                <span>Free shipping worldwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLock />
                <span>Secure payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Book Details Section */}
        <div className="bg-gray-50 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Book Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700">Pages</h4>
              <p className="text-gray-600">{book.details.pages}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Language</h4>
              <p className="text-gray-600">{book.details.language}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Publisher</h4>
              <p className="text-gray-600">{book.details.publisher}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Publication Date</h4>
              <p className="text-gray-600">{book.details.publicationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
