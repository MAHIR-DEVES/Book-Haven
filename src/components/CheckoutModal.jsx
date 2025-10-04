import { FaArrowLeft, FaLock, FaPlus, FaMinus } from 'react-icons/fa';

function CheckoutModal({
  book,
  quantity,
  setQuantity,
  savings,
  totalPrice,
  formData,
  handleInputChange,
  handleSubmitOrder,
  setShowCheckout,
}) {
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto md:px-2 md:py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <button
            onClick={() => setShowCheckout(false)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            <FaArrowLeft />
            <span>Back to Book</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h3>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={book.image}
                alt={book.title}
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="flex justify-between py-5">
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {book.title}
                </h4>
                <p className="text-gray-600 text-sm">by {book.author}</p>
              </div>
              <div>
                <p className="text-indigo-600 font-semibold text-lg">
                  ৳ {book.price}
                </p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Quantity</span>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                  >
                    <FaMinus className="text-gray-600 text-xs" />
                  </button>
                  <span className="w-12 text-center font-bold text-lg text-gray-800">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                  >
                    <FaPlus className="text-gray-600 text-xs" />
                  </button>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Unit Price</span>
                <span className="font-semibold">৳ {book.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity</span>
                <span className="font-semibold">{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">৳ {totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">You Save</span>
                  <span className="font-semibold text-green-600">
                    ৳ {savings}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                <span>Total</span>
                <span className="text-indigo-600">৳ {totalPrice}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 text-center">
                📚 Buy {quantity} copy{quantity > 1 ? 'ies' : ''} and get free
                shipping!
              </p>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Shipping & Payment
            </h3>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shipping Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your complete shipping address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Payment Information
                </h4>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Complete Order - ৳ {totalPrice}
              </button>

              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <FaLock />
                <span className="text-sm">
                  Your payment is secure and encrypted
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
