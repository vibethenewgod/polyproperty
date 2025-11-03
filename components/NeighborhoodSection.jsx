import Image from "next/image"

export default function NeighborhoodSection() {
  const neighborhoods = [
    {
      name: "Engr Lere Adigun",
      properties: 156,
      image: "/engrlere.jpg",
    },
    {
      name: "Kolapo Ishola GRA",
      properties: 89,
      image: "/kolapo.jpg",
    },
    {
      name: "Carlton Gate Estate",
      properties: 124,
      image: "/carlton.jpg",
    },
    {
      name: "Oluyole Estate",
      properties: 45,
      image: "/oluyole.jpg",
    },
    {
      name: "New Bodija",
      properties: 67,
      image: "/bodija.jpg",
    },
    {
      name: "Aerodrome G.R.A",
      properties: 203,
      image: "/aerodrome.jpg",
    },
  ]

  return (
  <section className="py-10 sm:py-14 md:py-16 bg-white">
  <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">Find Properties by Neighbourhood</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose where you live, find your place there</p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {neighborhoods.map((neighborhood) => (
            <div key={neighborhood.name} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={neighborhood.image || "/placeholder.svg"}
                alt={neighborhood.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{neighborhood.name}</h3>
                <p className="text-sm">{neighborhood.properties} Properties</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            type="button"
            aria-label="View more neighbourhoods"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#4a3728] text-white font-medium shadow-lg hover:shadow-xl transition-shadow rounded-full w-full max-w-xs"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
