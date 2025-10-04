import React from 'react';

const Heading = ({ onBuyNow }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          Books That Inspire, Stories That Stay – Shop Your Favorite Reads
          Today!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform Your Life with the #1 Bestselling Book That's Changing How
          People Work and Live
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Book Cover & Author Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="The Productivity Masterclass Book Cover"
                className="w-full h-auto rounded-lg shadow-2xl mx-auto max-w-sm"
              />
              {/* Best Seller Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
                <span className="font-bold text-sm">#1 BESTSELLER</span>
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80"
                alt="Dr. James Wilson - Author"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Dr. James Wilson
                </h3>
                <p className="text-gray-600 text-sm">
                  Productivity Expert & Bestselling Author
                </p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Details & CTA */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-2xl">
                {'★'.repeat(5)}
              </div>
              <span className="ml-2 text-gray-700 font-semibold">
                4.9/5 (2,347 reviews)
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Master Your Time, Master Your Life
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In <strong>"The Productivity Masterclass"</strong>, you'll
              discover proven strategies used by top performers to achieve more
              in less time. This isn't just another productivity book—it's a
              complete system for transforming how you work and live.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  25+ actionable productivity frameworks
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  Time management techniques that actually work
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  Digital workbook with exercises and templates
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  Lifetime access to exclusive online resources
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-inner mb-6 border-2 border-yellow-200">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-gray-900">
                    ৳ 24.99
                  </span>
                  <span className="text-lg text-gray-500 line-through ml-2">
                    ৳ 34.99
                  </span>
                </div>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  30% OFF
                </span>
              </div>
              <p className="text-green-600 font-semibold">
                🚀 Limited Time Offer: Includes FREE Shipping + Digital Bonuses
              </p>
            </div>

            <button
              onClick={onBuyNow}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
            >
              Buy Now - Transform Your Productivity Today
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm">
              📦 Free Worldwide Shipping • 30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Book Content & Features */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          What You'll Discover Inside
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Book Content Structure"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Comprehensive Productivity System
            </h4>
            <p className="text-gray-700 mb-4">
              This 300-page masterpiece is divided into 12 transformative
              chapters, each building upon the last to create a complete
              productivity ecosystem tailored for modern professionals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700">
                  12 detailed chapters with actionable insights
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700">
                  300+ pages of proven strategies
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">•</span>
                <span className="text-gray-700">
                  Downloadable templates and worksheets
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Chapters Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="text-blue-600 text-lg font-bold mb-2">
              Chapter 3
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">
              Time Blocking Mastery
            </h5>
            <p className="text-gray-700 text-sm">
              Learn the art of time blocking to eliminate distractions and focus
              on what truly matters.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="text-green-600 text-lg font-bold mb-2">
              Chapter 7
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">
              Digital Detox Strategies
            </h5>
            <p className="text-gray-700 text-sm">
              Reclaim your attention from digital distractions and boost your
              mental clarity.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="text-purple-600 text-lg font-bold mb-2">
              Chapter 11
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">
              Sustainable Habits
            </h5>
            <p className="text-gray-700 text-sm">
              Build lasting productivity habits that stick and transform your
              daily routine.
            </p>
          </div>
        </div>

        {/* Book Preview Images */}
        <h4 className="text-2xl font-bold text-center mb-8 text-gray-800">
          See the Transformation in Action
        </h4>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-blue-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Practical Exercises from The Productivity Masterclass"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  Page 45
                </div>
              </div>
            </div>
            <p className="text-gray-700 font-semibold mt-4 text-lg">
              Practical Exercises
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Hands-on activities to implement immediately with real results
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Step-by-Step Frameworks from The Productivity Masterclass"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                  Page 112
                </div>
              </div>
            </div>
            <p className="text-gray-700 font-semibold mt-4 text-lg">
              Step-by-Step Frameworks
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Proven systems used by top performers for lasting productivity
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-purple-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Real-World Examples from The Productivity Masterclass"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                  Page 189
                </div>
              </div>
            </div>
            <p className="text-gray-700 font-semibold mt-4 text-lg">
              Real-World Examples
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Case studies and success stories from professionals worldwide
            </p>
          </div>
        </div>

        {/* Bonus Content */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 mt-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              🎁 Exclusive Bonuses Included
            </h4>
            <p className="text-gray-700 mb-6">
              When you order today, you'll also receive these digital bonuses
              absolutely FREE:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">📊</span>
                <div>
                  <h5 className="font-semibold text-gray-900">
                    Productivity Planner
                  </h5>
                  <p className="text-gray-700 text-sm">
                    90-day digital planner with templates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">🎧</span>
                <div>
                  <h5 className="font-semibold text-gray-900">
                    Audio Summaries
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Listen to key concepts on the go
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">📝</span>
                <div>
                  <h5 className="font-semibold text-gray-900">
                    Worksheets & Checklists
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Printable tools for immediate implementation
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">👨‍💼</span>
                <div>
                  <h5 className="font-semibold text-gray-900">
                    Expert Interviews
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Exclusive access to productivity experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          What Readers Are Saying
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-200">
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-700 italic mb-4">
              "This book completely changed how I approach my work. I've doubled
              my productivity in just 30 days!"
            </p>
            <p className="font-semibold text-gray-900">
              - Sarah Johnson, Entrepreneur
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-xl shadow-md border border-gray-200">
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-700 italic mb-4">
              "The practical exercises and frameworks are worth the price alone.
              Highly recommended!"
            </p>
            <p className="font-semibold text-gray-900">
              - Michael Chen, Software Engineer
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-xl shadow-md border border-gray-200">
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-700 italic mb-4">
              "Finally, a productivity book that delivers on its promises. This
              is the only one you'll ever need."
            </p>
            <p className="font-semibold text-gray-900">
              - Dr. Emily Rodriguez, Professor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
