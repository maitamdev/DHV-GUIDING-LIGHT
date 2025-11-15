import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaShoppingCart, FaArrowRight, FaTag, FaGift, FaClock, FaStar, FaCheckCircle } from 'react-icons/fa';

interface CartItem {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: number;
  originalPrice: number;
  duration: string;
  rating: number;
  students: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: 'Complete Web Development Bootcamp 2024',
      instructor: 'Mai Tran Thien Tam',
      image: '/img/course-1.jpg',
      price: 149,
      originalPrice: 299,
      duration: '42.5 hours',
      rating: 4.9,
      students: 12500
    },
    {
      id: 2,
      title: 'React & Node.js - The Complete Guide',
      instructor: 'Le Thi Huong',
      image: '/img/course-2.jpg',
      price: 129,
      originalPrice: 249,
      duration: '36.5 hours',
      rating: 4.8,
      students: 8450
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass with Figma',
      instructor: 'Pham Duc Anh',
      image: '/img/course-3.jpg',
      price: 179,
      originalPrice: 349,
      duration: '28.5 hours',
      rating: 4.9,
      students: 15600
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'DHV20') {
      setAppliedCoupon(couponCode);
      setCouponDiscount(0.2); // 20% discount
    } else if (couponCode.toUpperCase() === 'FIRST50') {
      setAppliedCoupon(couponCode);
      setCouponDiscount(0.5); // 50% discount
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * couponDiscount;
  const total = subtotal - discount;
  const totalSavings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price), 0) + discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg mb-6">
            <FaShoppingCart className="text-blue-600 text-2xl" />
            <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Giỏ Hàng Của Bạn</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {cartItems.length} courses in cart
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShoppingCart className="text-6xl text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You don't have any courses in your cart yet. Explore our amazing courses!
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore Courses</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 p-6">
                      {/* Course Image */}
                      <div className="relative w-full sm:w-48 h-32 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                            Bestseller
                          </span>
                        </div>
                      </div>

                      {/* Course Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-3">By {item.instructor}</p>
                          
                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400" />
                              <span className="font-semibold">{item.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaClock className="text-gray-400" />
                              <span>{item.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-gray-400">👥</span>
                              <span>{item.students.toLocaleString()} students</span>
                            </div>
                          </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-black text-blue-600">${item.price}</span>
                              <span className="text-lg text-gray-400 line-through">${item.originalPrice}</span>
                            </div>
                            <span className="text-sm text-green-600 font-semibold">
                              Tiết kiệm ${item.originalPrice - item.price}
                            </span>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all hover:scale-110"
                          >
                            <FaTrash className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Right - Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 sticky top-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tổng Đơn Hàng</h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaGift className="inline mr-2 text-purple-500" />
                    Mã Giảm Giá
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Nhập mã giảm giá"
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:scale-105"
                    >
                      Áp Dụng
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-semibold">
                      <FaCheckCircle />
                      <span>Mã "{appliedCoupon}" đã được áp dụng!</span>
                    </div>
                  )}
                  <div className="mt-3 space-y-1 text-xs text-gray-500">
                    <p>💡 Thử: <code className="bg-gray-100 px-2 py-1 rounded">DHV20</code> (Giảm 20%)</p>
                    <p>💡 Hoặc: <code className="bg-gray-100 px-2 py-1 rounded">FIRST50</code> (Giảm 50%)</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Tạm tính:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá ({(couponDiscount * 100).toFixed(0)}%):</span>
                      <span className="font-semibold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm text-gray-600 bg-green-50 px-4 py-2 rounded-lg">
                    <span className="flex items-center gap-1">
                      <FaTag className="text-green-600" />
                      Tổng tiết kiệm:
                    </span>
                    <span className="font-bold text-green-600">${totalSavings.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-lg font-semibold text-gray-700">Tổng cộng:</span>
                  <span className="text-4xl font-black text-blue-600">${total.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 mb-4">
                  <span className="flex items-center justify-center gap-2">
                    Thanh Toán Ngay
                    <FaArrowRight />
                  </span>
                </button>

                {/* Continue Shopping */}
                <Link
                  to="/courses"
                  className="block w-full py-3 text-center text-blue-600 font-semibold hover:bg-blue-50 rounded-xl transition-all"
                >
                  ← Tiếp Tục Mua Sắm
                </Link>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <h3 className="font-semibold text-gray-800 mb-3">Your Benefits:</h3>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>Lifetime access to all courses</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>Course completion certificate</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>24/7 instructor support</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>100% money-back guarantee in 30 days</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
