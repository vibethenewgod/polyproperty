import { Home, Building, Key, ChevronRight } from "lucide-react"

export default function ExpertiseSection() {
  const services = [
    {
      icon: <Home size={20} />,
      title: "Residential Sales",
      description:
        "Expert guidance for buying and selling homes, from first-time buyers to luxury estates. We handle every detail of your residential transaction.",
    },
    {
      icon: <Building size={20} />,
      title: "Commercial Properties",
      description:
        "Specialized services for commercial real estate including office buildings, retail spaces, industrial properties, and investment opportunities.",
    },
    {
      icon: <Key size={20} />,
      title: "Property Management",
      description:
        "Comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-[#012b51] mb-4 uppercase">Our Services</h2>
          <div className="w-16 h-0.5 bg-[#012b51]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-[#012b51] mb-4">{service.icon}</div>
              <h3 className="text-base font-medium text-[#012b51] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-xs mb-4 line-clamp-3">{service.description}</p>
              <a href="#" className="text-[#012b51] text-xs font-medium flex items-center hover:underline">
                Learn more
                <ChevronRight size={12} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block text-xs font-medium text-[#012b51] border-b border-[#012b51] pb-1 hover:border-transparent transition-all duration-300"
          >
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  )
}
