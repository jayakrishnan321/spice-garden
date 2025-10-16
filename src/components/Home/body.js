import React from 'react'
import foodVideo from "../../assets/homefoodvideo.mp4";
import { useNavigate } from 'react-router-dom';
function Body() {
const navigate=useNavigate()
    return (
        
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video Section */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={foodVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

            {/* Centered Text Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-out">
                    Welcome to <span className="text-orange-500">Spice Garden</span>
                </h1>

                <p className="text-lg md:text-xl mb-6">
                    Where Flavours Come Alive
                </p>
                <button onClick={()=>navigate('/menu')} className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-lg font-medium transition">
                    Explore Menu
                </button>
            </div>
        </div>

    )
}

export default Body
