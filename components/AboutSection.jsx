import Image from "next/image"

export default function AboutSection() {
  return (
  <section className="py-16 bg-[#4a3728] text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl font-medium mb-4">About Poly Property Limited</h2>
            <div className="w-16 h-0.5 bg-white mb-6"></div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Poly Property Limited is a leading real estate agency in Ibadan, dedicated to providing exceptional
              property services to our clients. With a commitment to excellence and customer satisfaction, we have
              established ourselves as a trusted partner in the Ibadan real estate market.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              Under the visionary leadership of E.S.V Iluku Gospel, our team works tirelessly to connect clients with
              their ideal properties. We specialize in residential, commercial, and investment properties, offering
              comprehensive solutions tailored to meet the unique needs of each client.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-medium text-white border-b border-white pb-1 hover:border-transparent transition-all duration-300"
            >
              CONTACT US
            </a>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full h-[350px] sm:h-[200px] md:h-[250px] lg:h-[350px] overflow-hidden flex items-center">
              <Image
                src="/polyprop.jpg"
                alt="Poly Property Limited team"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
