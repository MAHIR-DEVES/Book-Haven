import './App.css';
import { useRef, useState, useMemo } from 'react';
import CheckoutModal from './components/CheckoutModal';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import Heading from './components/Heading';
import Faq from './components/Faq';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const book = {
    title: 'The Great Adventure',
    author: 'John Smith',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.5,
    reviews: 1284,
    description:
      "An epic journey through uncharted territories, 'The Great Adventure' takes readers on a thrilling ride filled with mystery, courage, and self-discovery.",
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600',
    features: [
      'Bestselling novel of the year',
      'Signed copy available',
      'Free worldwide shipping',
      'Money-back guarantee',
    ],
    details: {
      pages: 384,
      language: 'English',
      publisher: 'Penguin Books',
      isbn: '978-3-16-148410-0',
      publicationDate: 'March 15, 2024',
    },
  };

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrder = e => {
    e.preventDefault();
    setTimeout(() => {
      setOrderComplete(true);
    }, 2000);
  };

  // ✅ Memoized totalPrice and savings
  const totalPrice = useMemo(
    () => (book.price * quantity).toFixed(2),
    [book.price, quantity]
  );
  const savings = useMemo(
    () => ((book.originalPrice - book.price) * quantity).toFixed(2),
    [book.originalPrice, book.price, quantity]
  );

  // Checkout section ref
  const checkoutRef = useRef(null);
  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar quantity={quantity} setShowCheckout={setShowCheckout} />
      {/* heading */}
      <Heading onBuyNow={scrollToCheckout} />
      {/* Faq */}
      <Faq />
      {/* book details or checkout */}
      {!showCheckout ? (
        <BookDetails
          book={book}
          quantity={quantity}
          setQuantity={setQuantity}
          totalPrice={totalPrice}
          setShowCheckout={setShowCheckout}
        />
      ) : (
        <div ref={checkoutRef}>
          <CheckoutModal
            book={book}
            quantity={quantity}
            setQuantity={setQuantity}
            savings={savings}
            totalPrice={totalPrice}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmitOrder={handleSubmitOrder}
            setShowCheckout={setShowCheckout}
          />
        </div>
      )}
    </div>
  );
}

export default App;
