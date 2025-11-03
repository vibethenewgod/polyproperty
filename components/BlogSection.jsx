export default function BlogSection() {
  const blogs = [
    {
      title: "Why Ibadan is the Next Real Estate Hotspot",
      date: "Oct 2025",
      excerpt: "Discover why investors and families are flocking to Ibadan for property opportunities and what makes the city unique.",
      image: "/placeholder.jpg",
      link: "#",
    },
    {
      title: "Top 5 Neighborhoods to Live in Ibadan",
      date: "Sep 2025",
      excerpt: "A guide to the most desirable areas in Ibadan for comfort, security, and investment growth.",
      image: "/placeholder-user.jpg",
      link: "#",
    },
    {
      title: "How to Buy Your First Home in Ibadan",
      date: "Aug 2025",
      excerpt: "Step-by-step tips for first-time buyers navigating the Ibadan property market.",
      image: "/placeholder-logo.png",
      link: "#",
    },
    {
      title: "The Future of Commercial Real Estate in Ibadan",
      date: "Jul 2025",
      excerpt: "Trends and predictions for business owners and investors in Ibadan's commercial property sector.",
      image: "/placeholder.svg",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4 text-center">Latest from Our Blog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">Insights and tips about real estate in Ibadan.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, idx) => (
            <a key={idx} href={blog.link} className="block bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <span className="text-xs text-[#F4A582] font-bold uppercase">{blog.date}</span>
                <h3 className="text-lg font-semibold text-[#4A3728] mt-2 mb-1">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                <span className="text-[#F4A582] text-xs font-semibold">Read More &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
