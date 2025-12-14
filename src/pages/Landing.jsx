import React from "react";
// Import images
import mama from "../assets/img/Mama1.png";
import mama2 from "../assets/img/mama2.png";
import mama3 from "../assets/img/mama3.png";
import mama4 from "../assets/img/mama4.png";
import mama5 from "../assets/img/mama5.png";
import mama6 from "../assets/img/mama6.jpg";
import mama7 from "../assets/img/mama7.jpg";
import mama8 from "../assets/img/mama8.jpg";

// Import Framer Motion
import { motion } from "framer-motion";

export const Landing = () => {
    const images = [mama,mama2,mama3,mama4,mama5,mama6,mama7,mama8];
    const title = "🎉 ¡Feliz Cumpleaños MaMá Gracias por ser la mejor Mamá del Mundo Te Amo🎂";
    const wish =
        "¡Que todos tus deseos se hagan realidad, Dios te bendiga 🎁!";

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 flex flex-col items-center justify-center overflow-hidden p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-10 text-center animate-bounce">
                {title}
            </h1>

            <div className="relative bg-white w-full max-w-4xl h-96 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                <motion.div
                    className="flex w-max h-full z-20"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 120,
                        ease: "linear",
                    }}
                >
                    {[
                        ...images,
                        ...images,
                        ...images,
                        ...images,
                        ...images,
                        ...images,
                    ].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`img-${i}`}
                            className="w-64 h-npm run build96 object-cover flex-shrink-0 border-r-4 border-white z-20"
                        />
                    ))}
                </motion.div>
            </div>

            <p className="mt-10 text-white text-xl md:text-2xl font-semibold text-center bg-black/30 px-6 py-3 rounded-xl shadow-lg">
                {wish}
            </p>
        </div>
    );
};