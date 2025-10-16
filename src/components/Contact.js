import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Home/Header";
import Footer from "../components/Home/footer";

export default function Contact() {
  return (
    <div>
      <Header />

      {/* CONTACT INFO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-orange-600 text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800">
          {/* Corporate Office */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-orange-600">
              Corporate Office
            </h3>
            <p className="leading-relaxed">
              #56/57, central bazzar, 
              <br />
              Main Road, payyanur – 560078
            </p>
            <p className="mt-3">📧 contact@spicegarden.com</p>
            <p>📞 8105555559</p>
          </motion.div>

          {/* Outdoor Catering */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-orange-600">
              Outdoor Catering
            </h3>
            <p className="leading-relaxed">📧 contact@spicegarden.com</p>
            <p>📞 8105555549</p>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <motion.section
        className="mt-5 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <iframe
          title="Google Map - Spice Garden"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.872221646586!2d75.205834!3d12.105069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1512c3c2b7ef%3A0x9f7c574a2d8f93b9!2sPayyanur%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1697123456789!5m2!1sen!2sin"
          width="50%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.section>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Footer className="mt-10" />
      </motion.div>
    </div>
  );
}
