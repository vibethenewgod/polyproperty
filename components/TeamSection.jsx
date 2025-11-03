import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "E.S.V ILUKU GOSPEL",
      title: "M.D/C.E.O",
      image: "/esv.jpg",
    },
    {
      name: "JAMES THOMPSON",
      title: "Commercial Property Specialist",
      image: "/professional-male-real-estate-agent.png",
    },
    {
      name: "EMILY CHEN",
      title: "Residential Sales Agent",
      image: "/professional-asian-female-realtor.jpg",
    },
    {
      name: "Chris BROWN",
      title: "Property Manager",
      image: "/chris.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-[#012b51] mb-4 uppercase">Our Team</h2>
          <div className="w-16 h-0.5 bg-[#012b51]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-sm font-medium tracking-wide">{member.name}</h3>
                  <p className="text-xs opacity-80">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium bg-[#012b51] text-white transition-all duration-300 hover:bg-[#001a30]"
          >
            MEET ALL OUR TEAM
            <ChevronRight size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
