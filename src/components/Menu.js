import React from 'react'
import { useState } from "react";
import Header from './Home/Header';
import southIndian from "../assets/south-indian.jpg"
import northIndian from "../assets/north-indian.jpg";
import chinese from "../assets/chinese.jpg";
import nonveg from "../assets/non-veg.jpg";
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
        { name: "Masala Dosa", description: "Crispy rice crepe with spicy potato filling", category: "South Indian" },
        { name: "Idli Sambhar", description: "Steamed rice cakes served with lentil soup", category: "South Indian" },
        { name: "Vada", description: "Crispy lentil doughnuts served with chutney", category: "South Indian" },
        { name: "Upma", description: "Savory semolina porridge with vegetables", category: "South Indian" },
        { name: "Pongal", description: "Rice and lentil dish flavored with pepper and ghee", category: "South Indian" },
        { name: "Medu Vada", description: "Soft lentil fritters, crispy on the outside", category: "South Indian" },
        { name: "Rava Dosa", description: "Thin, crispy semolina dosa", category: "South Indian" },
        { name: "Coconut Chutney", description: "Fresh coconut condiment for dosas and idlis", category: "South Indian" },
        { name: "Sambar Rice", description: "Rice cooked with lentil soup and vegetables", category: "South Indian" },
        { name: "Curd Rice", description: "Rice mixed with yogurt, tempered with spices", category: "South Indian" },

        // North Indian (10 items)
        { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", category: "North Indian" },
        { name: "Dal Makhani", description: "Black lentils slow-cooked in butter and cream", category: "North Indian" },
        { name: "Chole", description: "Spicy chickpea curry", category: "North Indian" },
        { name: "Aloo Gobi", description: "Potatoes and cauliflower cooked with spices", category: "North Indian" },
        { name: "Palak Paneer", description: "Spinach gravy with cottage cheese cubes", category: "North Indian" },
        { name: "Rajma Masala", description: "Kidney beans cooked in tomato and onion gravy", category: "North Indian" },
        { name: "Kadhi Pakora", description: "Fritters in yogurt-based curry", category: "North Indian" },
        { name: "Malai Kofta", description: "Vegetable balls in creamy tomato sauce", category: "North Indian" },
        { name: "Baingan Bharta", description: "Smoky mashed eggplant with spices", category: "North Indian" },
        { name: "Paneer Tikka", description: "Marinated grilled cottage cheese cubes", category: "North Indian" },

        // Non-Veg (10 items)
        { name: "Chicken Biryani", description: "Aromatic rice with marinated chicken", category: "Non-Veg" },
        { name: "Butter Chicken", description: "Chicken cooked in creamy tomato sauce", category: "Non-Veg" },
        { name: "Mutton Rogan Josh", description: "Spicy mutton curry with rich gravy", category: "Non-Veg" },
        { name: "Fish Curry", description: "Tangy fish curry with coconut milk", category: "Non-Veg" },
        { name: "Egg Curry", description: "Boiled eggs in flavorful onion-tomato gravy", category: "Non-Veg" },
        { name: "Tandoori Chicken", description: "Spiced chicken roasted in clay oven", category: "Non-Veg" },
        { name: "Prawn Masala", description: "Prawns cooked in spicy tomato gravy", category: "Non-Veg" },
        { name: "Chicken Korma", description: "Mild chicken curry with creamy sauce", category: "Non-Veg" },
        { name: "Lamb Vindaloo", description: "Spicy tangy lamb curry", category: "Non-Veg" },
        { name: "Keema Matar", description: "Minced meat with peas in spicy gravy", category: "Non-Veg" },

        // Chinese (10 items)
        { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", category: "Chinese" },
        { name: "Manchurian", description: "Vegetable or chicken balls in tangy sauce", category: "Chinese" },
        { name: "Spring Rolls", description: "Crispy rolls stuffed with vegetables", category: "Chinese" },
        { name: "Chili Chicken", description: "Spicy chicken stir-fry with peppers", category: "Chinese" },
        { name: "Fried Rice", description: "Rice stir-fried with veggies and soy sauce", category: "Chinese" },
        { name: "Schezwan Noodles", description: "Spicy Indo-Chinese noodles", category: "Chinese" },
        { name: "Sweet & Sour Chicken", description: "Chicken cooked in tangy sweet sauce", category: "Chinese" },
        { name: "Vegetable Manchurian Gravy", description: "Manchurian balls in thick sauce", category: "Chinese" },
        { name: "Honey Chilli Potato", description: "Crispy potatoes tossed in sweet chili sauce", category: "Chinese" },
        { name: "Schezwan Fried Rice", description: "Spicy fried rice with vegetables and sauces", category: "Chinese" },
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
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Menu
