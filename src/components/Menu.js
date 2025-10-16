import React from 'react'
import { useState } from "react";
import Header from './Home/Header';
import southIndian from "../assets/south-indian.jpg"
import northIndian from "../assets/north-indian.jpg";
import chinese from "../assets/chinese.jpg";
import nonveg from "../assets/non-veg.jpg";
import Footer from "../components/Home/footer"
const categoryImages = {
    "South Indian": southIndian,
    "North Indian": northIndian,
    "Non-Veg": chinese,
    "Chinese": nonveg,
};
function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "South Indian", "North Indian", "Non-Veg", "Chinese"];

    // Sample menu items
    const menuItems = [
        // South Indian (10 items)
        { name: "Masala Dosa", description: "Crispy rice crepe with spicy potato filling", category: "South Indian", price: 90 },
        { name: "Idli Sambhar", description: "Steamed rice cakes served with lentil soup", category: "South Indian", price: 70 },
        { name: "Vada", description: "Crispy lentil doughnuts served with chutney", category: "South Indian", price: 60 },
        { name: "Upma", description: "Savory semolina porridge with vegetables", category: "South Indian", price: 65 },
        { name: "Pongal", description: "Rice and lentil dish flavored with pepper and ghee", category: "South Indian", price: 80 },
        { name: "Medu Vada", description: "Soft lentil fritters, crispy on the outside", category: "South Indian", price: 60 },
        { name: "Rava Dosa", description: "Thin, crispy semolina dosa", category: "South Indian", price: 100 },
        { name: "Coconut Chutney", description: "Fresh coconut condiment for dosas and idlis", category: "South Indian", price: 25 },
        { name: "Sambar Rice", description: "Rice cooked with lentil soup and vegetables", category: "South Indian", price: 90 },
        { name: "Curd Rice", description: "Rice mixed with yogurt, tempered with spices", category: "South Indian", price: 70 },

        // North Indian (10 items)
        { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", category: "North Indian", price: 160 },
        { name: "Dal Makhani", description: "Black lentils slow-cooked in butter and cream", category: "North Indian", price: 140 },
        { name: "Chole", description: "Spicy chickpea curry", category: "North Indian", price: 120 },
        { name: "Aloo Gobi", description: "Potatoes and cauliflower cooked with spices", category: "North Indian", price: 110 },
        { name: "Palak Paneer", description: "Spinach gravy with cottage cheese cubes", category: "North Indian", price: 150 },
        { name: "Rajma Masala", description: "Kidney beans cooked in tomato and onion gravy", category: "North Indian", price: 130 },
        { name: "Kadhi Pakora", description: "Fritters in yogurt-based curry", category: "North Indian", price: 120 },
        { name: "Malai Kofta", description: "Vegetable balls in creamy tomato sauce", category: "North Indian", price: 160 },
        { name: "Baingan Bharta", description: "Smoky mashed eggplant with spices", category: "North Indian", price: 120 },
        { name: "Paneer Tikka", description: "Marinated grilled cottage cheese cubes", category: "North Indian", price: 170 },

        // Non-Veg (10 items)
        { name: "Chicken Biryani", description: "Aromatic rice with marinated chicken", category: "Non-Veg", price: 180 },
        { name: "Butter Chicken", description: "Chicken cooked in creamy tomato sauce", category: "Non-Veg", price: 200 },
        { name: "Mutton Rogan Josh", description: "Spicy mutton curry with rich gravy", category: "Non-Veg", price: 240 },
        { name: "Fish Curry", description: "Tangy fish curry with coconut milk", category: "Non-Veg", price: 220 },
        { name: "Egg Curry", description: "Boiled eggs in flavorful onion-tomato gravy", category: "Non-Veg", price: 120 },
        { name: "Tandoori Chicken", description: "Spiced chicken roasted in clay oven", category: "Non-Veg", price: 230 },
        { name: "Prawn Masala", description: "Prawns cooked in spicy tomato gravy", category: "Non-Veg", price: 250 },
        { name: "Chicken Korma", description: "Mild chicken curry with creamy sauce", category: "Non-Veg", price: 210 },
        { name: "Lamb Vindaloo", description: "Spicy tangy lamb curry", category: "Non-Veg", price: 240 },
        { name: "Keema Matar", description: "Minced meat with peas in spicy gravy", category: "Non-Veg", price: 200 },

        // Chinese (10 items)
        { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", category: "Chinese", price: 120 },
        { name: "Manchurian", description: "Vegetable or chicken balls in tangy sauce", category: "Chinese", price: 140 },
        { name: "Spring Rolls", description: "Crispy rolls stuffed with vegetables", category: "Chinese", price: 110 },
        { name: "Chili Chicken", description: "Spicy chicken stir-fry with peppers", category: "Chinese", price: 180 },
        { name: "Fried Rice", description: "Rice stir-fried with veggies and soy sauce", category: "Chinese", price: 120 },
        { name: "Schezwan Noodles", description: "Spicy Indo-Chinese noodles", category: "Chinese", price: 130 },
        { name: "Sweet & Sour Chicken", description: "Chicken cooked in tangy sweet sauce", category: "Chinese", price: 170 },
        { name: "Vegetable Manchurian Gravy", description: "Manchurian balls in thick sauce", category: "Chinese", price: 140 },
        { name: "Honey Chilli Potato", description: "Crispy potatoes tossed in sweet chili sauce", category: "Chinese", price: 130 },
        { name: "Schezwan Fried Rice", description: "Spicy fried rice with vegetables and sauces", category: "Chinese", price: 140 },
    ];


    // Filter items based on selected category
    const filteredItems =
        selectedCategory === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === selectedCategory);

    // Group filtered items by category
    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});
    return (
        <div>
            <Header />

            <section className="py-16 px-8 bg-gray-50">
                <h2 className="text-3xl mt-3 font-bold text-center mb-6">Our Spice Garden</h2>

                {/* Category Buttons */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${selectedCategory === cat
                                ? "bg-orange-500 text-white"
                                : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
                                }`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grouped by Category with Images */}
                {Object.keys(groupedItems).map((category) => (
                    <div key={category} className="mb-12">
                        {/* Category Image */}
                        <div className="mb-6 flex justify-center">
                            <img
                                src={categoryImages[category]}
                                alt={category}
                                className="w-full max-w-3xl rounded-lg shadow-md object-cover
                                           h-48 sm:h-64 md:h-80 lg:h-96"
                            />
                        </div>




                        {/* Items of this category */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {groupedItems[category].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                                    <p className="text-gray-600 mb-3">{item.description}</p>
                                    <p className="text-orange-600 font-semibold text-lg">₹{item.price}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </section>
            <Footer/>
        </div>
    );
}

export default Menu
