import React from "react";
import southIndian from "../../assets/south-indian.jpg"
import northIndian from "../../assets/north-indian.jpg";
import chinese from "../../assets/chinese.jpg";
import nonveg from "../../assets/non-veg.jpg";


const categories = [
  {
    title: "South Indian",
    description: "Authentic dosas, idlis, and flavorful sambar from the south.",
    image: southIndian,
  },
  {
    title: "North Indian",
    description: "Rich curries and buttery breads crafted with traditional spices.",
    image: northIndian,
  },
  {
    title: "Chinese",
    description: "Crispy noodles, spicy Manchurian, and Indo-Chinese fusion treats.",
    image: chinese,
  },
  {
    title: "Non-Veg Specials",
    description: "Juicy kebabs, biryanis, and grilled delicacies for meat lovers.",
    image: nonveg,
  },
];

function FoodCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Our Culinary Categories
        </h2>
        <p className="text-gray-600 mb-12">
          Dive into our signature cuisines — each crafted with flavour and passion.
        </p>

        {/* Grid of Food Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay text on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-semibold text-orange-400 mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-200 max-w-xs">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     <section className="my-16 px-4 md:px-16">
  <h2 className="text-3xl font-bold mb-6 bg-pink-500 text-white inline-block px-4 py-2 rounded">
    About Our Founder & Brand Ambassador
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed mt-4">
    Martin, the visionary behind Spice Garden, is not only the founder but also the brand ambassador who embodies the spirit of our culinary journey. With a deep passion for authentic flavors and a commitment to excellence, he ensures that every dish reflects tradition, quality, and creativity. As the face of the brand, he inspires our team and connects with our guests, sharing the story, values, and vibrant culture behind Spice Garden. His leadership and dedication make every experience memorable, turning each visit into a celebration of taste and heritage.
  </p>
</section>


    </section>
  );
}

export default FoodCategories;
