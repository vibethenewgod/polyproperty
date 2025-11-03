export default function CtaSection() {
  return (
  <section className="py-8 sm:py-12 bg-[#4a3728] text-white">
  <div className="container mx-auto text-center">
        <h2 className="text-2xl font-medium mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-base max-w-xl mx-auto mb-6 opacity-90">
          Contact Poly Property today for a consultation. Our experienced agents are ready to help you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <a
            href="#contact"
            className="px-5 sm:px-6 py-2 bg-white text-[#4a3728] text-sm font-medium transition-all duration-300 hover:bg-gray-100 rounded-full w-full sm:w-auto"
          >
            SCHEDULE VIEWING
          </a>
          <a
            href="tel:306-873-4521"
            className="px-5 sm:px-6 py-2 bg-transparent border border-white text-white text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-full w-full sm:w-auto"
          >
            CALL: 08107045935
          </a>
        </div>
      </div>
    </section>
  )
}
