import Image from "next/image"
import { Bed, Bath, Square, MapPin } from "lucide-react"

export default function PropertyListings() {
  const properties = [
    {
      id: 1,
      title: "5 Bedroom Fully Detached Duplex with a Room & Parlour BQ",
      location: "Kolapo Ishola GRA, Ibadan",
      price: "₦400,000,000",
      beds: 5,
      baths: 5,
      area: "450 sqm",
      image: "/luxury-modern-house-exterior.jpg",
      featured: true,
      forSale: true,
    },
    {
      id: 2,
      title: "4-Bedroom Fully Detached Duplex with a Room BQ",
      location: "Oluyole Estate, Ibadan",
      price: "₦310,000,000",
      beds: 4,
      baths: 4,
      area: "320 sqm",
      image: "/modern-terrace-duplex.jpg",
      featured: true,
      forSale: true,
    },
    {
      id: 3,
      title: "Fully Detached 5 & 6-Bedroom Triplexes with Pent Floor & Full-Sized Pool",
      location: "Agodi GRA, Ibadan",
      price: "₦500,000,000",
      beds: 3,
      baths: 3,
      area: "180 sqm",
      image: "/luxury-apartment-building.jpg",
      featured: false,
      forSale: true,
    },
    {
      id: 4,
      title: "Self-Compound 4-Bedroom Duplex",
      location: "Agodi GRA, Ibadan",
      price: "₦7,000,000/year",
      beds: 4,
      baths: 4,
      area: "120 sqm",
      image: "/modern-apartment.jpg",
      featured: false,
      forSale: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our finest properties in Ibadan, handpicked for quality and value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
                {property.featured && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-[#F4A582] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.forSale ? "For Sale" : "For Rent"}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  {property.location}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#4A3728]">{property.title}</h3>
                <p className="text-2xl font-bold text-[#F4A582] mb-4">{property.price}</p>

                <div className="flex items-center justify-between text-gray-600 text-sm border-t pt-3">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square size={16} />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#4A3728] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3a2a1f] transition-colors">
            Browse All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
