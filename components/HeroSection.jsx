"use client"
import { useState, useEffect } from "react"
import { Search, MapPin, Home, Bed } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("rent")
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    rooms: "",
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of hero images
  const heroImages = [
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-4.jpg",
    "/hero section image .jpg"
  ]

  // Auto-advance images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const tabs = [
    { id: "rent", label: "Rent" },
    { id: "sale", label: "Sale" },
    { id: "land", label: "Land" },
    { id: "commercial", label: "Commercial" },
  ]

  return (
    <section className="relative w-full">
  <div className="h-[22rem] sm:h-[32rem] md:h-[40rem] lg:h-[45rem] relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                crossfade: true
              }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image 
                src={heroImages[currentImageIndex]} 
                alt={`Real Estate Background ${currentImageIndex + 1}`} 
                fill 
                className="object-cover transition-opacity"
                priority
                quality={100}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        </div>

        <div className="relative h-full z-20 flex items-center justify-center text-center">
          <div className="container mx-auto w-full">
            <div className="max-w-3xl mx-auto mt-16 sm:mt-24 md:mt-40 lg:mt-48 px-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight font-[Poppins,Inter,sans-serif]">
                Find Your Next Home
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium font-[Poppins,Inter,sans-serif]">Discover premium properties in Ibadan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 -mt-24 mb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeTab === tab.id ? "bg-[#F4A582] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search location"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A582]"
                />
              </div>

              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={searchData.propertyType}
                  onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A582] appearance-none"
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="duplex">Duplex</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>

              <div className="relative">
                <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={searchData.rooms}
                  onChange={(e) => setSearchData({ ...searchData, rooms: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A582] appearance-none"
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              <button className="bg-[#4A3728] text-white py-3 rounded-lg font-medium hover:bg-[#3a2a1f] transition-colors flex items-center justify-center gap-2">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
