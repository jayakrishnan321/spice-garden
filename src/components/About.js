import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Home/Header"; 
import keralafood from "../assets/KeralaSadhya.jpg"
import northindianfood from "../assets/north-indian-cuisine.jpg"
import Footer from "./Home/footer";
export default function About() {
  const restaurantName = "Spice Garden";
  const images = [keralafood, northindianfood];

   // Animation variants (slowed down)
  const letterAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08, // slower letter appearance (was 0.05)
        duration: 0.5, // smooth transition per letter
        ease: "easeOut",
      },
    }),
  };

  const paragraphVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 1 + i * 0.8, duration: 1.2, ease: "easeOut" }, // slower stagger
    }),
  };


  const headingText = `About ${restaurantName}`;

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <section className="max-w-6xl mt-10 mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Two stacked images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={images[0]}
                alt={`${restaurantName} dish 1`}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={images[1]}
                alt={`${restaurantName} dish 2`}
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text content */}
          <div>
            {/* Animated Heading */}
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex flex-wrap">
              {headingText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>

            {/* Animated Paragraphs */}
            {[
              `Experience the rich essence of India at ${restaurantName}, where tradition and flavour come together in every dish. Our chefs blend time-honoured recipes with the freshest ingredients to create meals that are both comforting and exciting — from crisp dosas to hearty curries.`,
              `We proudly offer a diverse menu spanning South Indian, North Indian, Chinese, and Non-Veg specialties. Whether you’re joining us for a leisurely family feast or a quick, satisfying bite, our warm hospitality and high hygiene standards ensure every visit is memorable.`,
              `At ${restaurantName}, food is more than taste — it’s a celebration of culture, community, and connection. Come discover authentic flavours crafted with care, and make lasting memories around the table.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={paragraphVariant}
                initial="hidden"
                animate="visible"
                className="text-gray-700 mb-6 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/menu"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
              >
                Explore Menu
              </a>

              <a
                href="/contact"
                className="inline-block border border-orange-500 text-orange-600 px-5 py-2 rounded-lg font-semibold hover:bg-orange-50 transition"
              >
                Find Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ---------------- MISSION & VISION SECTION ---------------- */}
<section className="bg-orange-50 py-16 mt-1">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl font-bold text-orange-600 mb-10"
    >
      Our Vision & Mission
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <h3 className="text-2xl font-semibold text-orange-600 mb-3">
          Our Vision
        </h3>
        <h4 className="text-gray-800 font-medium mb-2">Celebrating Food Culture</h4>
        <p className="text-gray-700 leading-relaxed">
          To become a symbol of authentic taste and hospitality — where every guest
          experiences the joy of freshly prepared, flavour-rich dishes inspired by
          India and beyond. We aim to bring people together through food that
          celebrates diversity, freshness, and creativity.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <h3 className="text-2xl font-semibold text-orange-600 mb-3">
          Our Mission
        </h3>
        <h4 className="text-gray-800 font-medium mb-2">Serving with Passion</h4>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to craft exceptional multi-cuisine dishes using the finest
          ingredients and timeless techniques. From spicy coastal seafood to
          flavourful tandoori grills, we strive to offer a dining experience that’s
          memorable, modern, and rooted in authenticity — served with warmth and
          care in every detail.
        </p>
      </motion.div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
}
