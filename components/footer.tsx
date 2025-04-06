import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-red text-brand-offwhite pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Know Your Jewellery</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diamond-guide" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Diamond Guide
                </Link>
              </li>
              <li>
                <Link href="/gold-guide" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Gold Guide
                </Link>
              </li>
              <li>
                <Link href="/gemstone-guide" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Gemstone Guide
                </Link>
              </li>
              <li>
                <Link href="/jewellery-care" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Jewellery Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Added Quick Links Section */}
           <div>
             <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
             <ul className="space-y-2">
               <li><Link href="/shop" className="text-gray-300 hover:text-brand-gold transition-colors">Shop All</Link></li>
               <li><Link href="/collections" className="text-gray-300 hover:text-brand-gold transition-colors">Collections</Link></li>
               <li><Link href="/collections/gold" className="text-gray-300 hover:text-brand-gold transition-colors">Gold Jewellery</Link></li>
               <li><Link href="/collections/diamond" className="text-gray-300 hover:text-brand-gold transition-colors">Diamond Jewellery</Link></li>
               <li><Link href="/collections/wedding" className="text-gray-300 hover:text-brand-gold transition-colors">Wedding Collection</Link></li>
               <li><Link href="/collections/gifts" className="text-gray-300 hover:text-brand-gold transition-colors">Gifts</Link></li>
               <li><Link href="/collections/exclusive" className="text-gray-300 hover:text-brand-gold transition-colors">Exclusive</Link></li>
               <li><Link href="/account" className="text-gray-300 hover:text-brand-gold transition-colors">My Account</Link></li>
               <li><Link href="/wishlist" className="text-gray-300 hover:text-brand-gold transition-colors">Wishlist</Link></li>
               <li><Link href="/cart" className="text-gray-300 hover:text-brand-gold transition-colors">Cart</Link></li>
             </ul>
           </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-brand-gold transition-colors">
                <Facebook />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-brand-gold transition-colors">
                <Twitter />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-brand-gold transition-colors">
                <Instagram />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="text-gray-300 hover:text-brand-gold transition-colors">
                <Youtube />
              </Link>
            </div>
            <h3 className="font-semibold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-3 text-sm">Stay updated with our latest collections and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="px-3 py-2 border border-gray-600 bg-brand-red rounded-l focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold placeholder-gray-400 text-white flex-grow"
              />
              <button className="bg-brand-gold text-brand-red px-4 py-2 rounded-r hover:bg-yellow-600 transition-colors font-semibold">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} JewelProto. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/terms" className="hover:text-brand-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

