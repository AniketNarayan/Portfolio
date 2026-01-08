// src/components/HeroSection.jsx
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaDownload } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div className="min-h-screen flex bg-[#111827] text-white">
            {/* Left Section - Image */}
            <div className="relative w-1/2">
                <div className="absolute top-0 left-0 h-full w-full border-l-[30px] border-green-500 z-10"></div>
                <img
                    src="/your-image.jpg" // Replace with actual image path
                    alt="Profile"
                    className="h-full w-full object-cover grayscale"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-1/2 flex flex-col justify-center px-12 relative">
                <h1 className="text-5xl font-extrabold leading-snug">
                    Hi, I'm <span className="text-green-500">S@KSHI S G.</span>
                    <br />
                    A Web Developer
                </h1>
                <p className="mt-6 text-gray-300">
                    I'm a Web Developer. I love to create beautiful and functional websites as well as a JAVA Developer.
                    Looking forward for challenging assignments that will enhance my career.
                </p>

                {/* Download CV Button */}
                <div className="mt-6">
                    <a
                        href="/cv.pdf"
                        className="inline-flex items-center bg-transparent text-white border border-green-500 hover:bg-green-500 px-5 py-2 rounded-full transition"
                        download
                    >
                        Download CV <FaDownload className="ml-2" />
                    </a>
                </div>

                {/* Right Side Floating Icons */}
                <div className="absolute right-6 top-1/4 space-y-6">
                    <button className="bg-green-500 p-3 rounded-full shadow-md hover:scale-110 transition">
                        <FaHome />
                    </button>
                    <button className="bg-gray-600 p-3 rounded-full shadow-md hover:scale-110 transition">
                        <FaUser />
                    </button>
                    <button className="bg-gray-600 p-3 rounded-full shadow-md hover:scale-110 transition">
                        <FaBriefcase />
                    </button>
                    <button className="bg-gray-600 p-3 rounded-full shadow-md hover:scale-110 transition">
                        <FaEnvelope />
                    </button>
                </div>
            </div>
        </div>
    );
}
