import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Làm thế nào để đăng ký khóa học?',
    answer: 'Bạn cần tạo tài khoản, sau đó vào trang khóa học, chọn khóa học muốn học và nhấn "Mua khóa học". Sau khi thanh toán thành công, bạn có thể truy cập ngay vào lộ trình học tập.'
  },
  {
    question: 'Tôi có thể học mọi lúc mọi nơi không?',
    answer: 'Có! Tất cả khóa học đều có thể học online 24/7. Bạn có thể học trên máy tính, tablet hoặc điện thoại di động với tốc độ phù hợp với bản thân.'
  },
  {
    question: 'Khóa học có cấp chứng chỉ không?',
    answer: 'Có! Sau khi hoàn thành khóa học và vượt qua bài kiểm tra cuối khóa, bạn sẽ nhận được chứng chỉ hoàn thành khóa học từ DHV Guiding Light.'
  },
  {
    question: 'Tôi có thể hoàn tiền nếu không hài lòng?',
    answer: 'Chúng tôi có chính sách hoàn tiền trong vòng 7 ngày nếu bạn chưa hoàn thành quá 20% khóa học. Vui lòng liên hệ support để được hỗ trợ.'
  },
  {
    question: 'Làm sao để liên hệ với giảng viên?',
    answer: 'Bạn có thể đặt câu hỏi trực tiếp trong phần Q&A của mỗi bài học, hoặc tham gia phòng học trực tuyến theo lịch được giảng viên công bố.'
  },
  {
    question: 'Thời gian học một khóa học là bao lâu?',
    answer: 'Tùy vào khóa học, thời gian dao động từ 3-9 tháng. Tuy nhiên, bạn có thể học nhanh hơn hoặc chậm hơn tùy vào tiến độ của mình. Khóa học không có thời hạn.'
  },
  {
    question: 'Tôi cần kiến thức gì trước khi học?',
    answer: 'Mỗi khóa học có yêu cầu kiến thức khác nhau, được ghi rõ trong trang chi tiết khóa học. Nhiều khóa học dành cho người mới bắt đầu không cần kiến thức trước đó.'
  },
  {
    question: 'Có hỗ trợ tìm việc sau khóa học không?',
    answer: 'Có! Chúng tôi có đối tác với nhiều nhà tuyển dụng. Học viên xuất sắc sẽ được giới thiệu việc làm và nhận hỗ trợ về CV, phỏng vấn.'
  },
  {
    question: 'Phương thức thanh toán nào được chấp nhận?',
    answer: 'Chúng tôi chấp nhận thanh toán qua thẻ ATM, thẻ tín dụng, ví điện tử (Momo, ZaloPay), và chuyển khoản ngân hàng.'
  },
  {
    question: 'Tôi có thể học nhiều khóa cùng lúc không?',
    answer: 'Có! Bạn có thể đăng ký và học nhiều khóa học cùng lúc. Tuy nhiên, chúng tôi khuyến nghị tập trung vào 1-2 khóa để đạt hiệu quả tốt nhất.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
              Câu Hỏi Thường Gặp
            </h1>
            <p className="text-xl text-white/90">
              Tìm câu trả lời cho những thắc mắc phổ biến
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-left font-semibold text-lg text-gray-800">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-[#06BBCC] flex-shrink-0 ml-4" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] rounded-lg p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Không tìm thấy câu trả lời?
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Liên hệ với chúng tôi và đội ngũ hỗ trợ sẽ giúp bạn ngay!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-[#06BBCC] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Liên hệ ngay
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
