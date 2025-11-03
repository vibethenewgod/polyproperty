import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function InsightsSection() {
  const articles = [
    {
      image: "/modern-luxury-home.png",
      category: "Market Insights",
      title: "Saskatchewan Real Estate Market Trends for 2025",
      excerpt: "Discover the latest trends and opportunities in the thriving real estate market.",
      date: "March 15, 2025",
    },
    {
      image: "/happy-family-in-front-of-new-home.jpg",
      category: "Buying Guide",
      title: "Complete Guide for First Time Homebuyers",
      excerpt: "Everything you need to know about purchasing your first home in Saskatchewan.",
      date: "March 10, 2025",
    },
    {
      image: "/real-estate-investment.png",
      category: "Investment",
      title: "Smart Real Estate Investment Strategies",
      excerpt: "Learn how to build wealth through strategic property investments in growing markets.",
      date: "February 28, 2025",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-[#012b51] mb-4 uppercase">Latest Insights</h2>
          <div className="w-16 h-0.5 bg-[#012b51]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2">{article.category}</p>
              <h3 className="text-base font-medium text-[#012b51] mb-2 group-hover:underline">{article.title}</h3>
              <p className="text-xs text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{article.date}</span>
                <ChevronRight size={14} className="text-[#012b51]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block text-xs font-medium text-[#012b51] border-b border-[#012b51] pb-1 hover:border-transparent transition-all duration-300"
          >
            VIEW ALL INSIGHTS
          </a>
        </div>
      </div>
    </section>
  )
}
