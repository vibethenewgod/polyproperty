import { Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
  <footer className="bg-[#000] text-white text-sm">
  <div className="container mx-auto py-8 sm:py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-base font-medium mb-4">Poly Property Limited</h3>
            <p className="text-gray-400 text-xs mb-2">Premier Real Estate Agency in Ibadan</p>
            <p className="text-gray-400 text-xs">
              Power behind all housing services - Your trusted partner in real estate.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Residential Sales",
                "Commercial Properties",
                "Property Management",
                "Investment Properties",
                "Land Sales",
                "Property Valuation",
              ].map((area) => (
                <li key={area}>
                  <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors duration-300">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-xs">
                <Phone size={12} className="mr-2 flex-shrink-0" />
                <span>08107045935</span>
              </li>
              <li className="flex items-center text-gray-400 text-xs">
                <Mail size={12} className="mr-2 flex-shrink-0" />
                <span>info@polypropertyibadan.com</span>
              </li>
              <li className="text-gray-400 text-xs">Ibadan, Nigeria</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-4">
              {[
                { icon: <Facebook size={14} />, label: "Facebook" },
                { icon: <Linkedin size={14} />, label: "LinkedIn" },
                { icon: <Twitter size={14} />, label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs">Ibadan's Premier Real Estate Agency</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">&copy; 2025 Poly Property Limited. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-gray-500 text-xs hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
