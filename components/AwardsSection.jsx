export default function AwardsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Awards</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
          As a service-first team, Poly Property is built from a foundation of trust, experience, and integrity. We are passionate and daring professionals and we care about our clients, so it's no surprise that we're being recognised for our success in the Nigerian Real Estate Market.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-4">
              {/* Add image here for Africa Real Estate Awards */}
            </div>
            <p className="text-sm text-gray-800">Africa Real Estate Awards<br />Newcomer of the Year</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-4">
              {/* Add image here for Most Innovative Firm Award */}
            </div>
            <p className="text-sm text-gray-800">Africa's Most Innovative<br />Real Estate Advisory Firm of the Year</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-4">
              {/* Add image here for Luxury Lifestyle Awards */}
            </div>
            <p className="text-sm text-gray-800">Luxury Lifestyle Awards<br />Winner</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-4">
              {/* Add image here for African Property Awards */}
            </div>
            <p className="text-sm text-gray-800">African Property Awards<br />Winner</p>
          </div>
        </div>
      </div>
    </section>
  )
}
