import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Know Your Jewellery</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diamond-guide" className="text-gray-600 hover:text-amber-700">
                  Diamond Guide
                </Link>
              </li>
              <li>
                <Link href="/gold-guide" className="text-gray-600 hover:text-amber-700">
                  Gold Guide
                </Link>
              </li>
              <li>
                <Link href="/gemstone-guide" className="text-gray-600 hover:text-amber-700">
                  Gemstone Guide
                </Link>
              </li>
              <li>
                <Link href="/jewellery-care" className="text-gray-600 hover:text-amber-700">
                  Jewellery Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-amber-700">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-amber-700">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-amber-700">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">About Tanishq</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-700">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-600 hover:text-amber-700">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-amber-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-amber-700">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-amber-700">
                <Facebook />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-amber-700">
                <Twitter />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-amber-700">
                <Instagram />
              </Link>
              <Link href="https://youtube.com" className="text-gray-600 hover:text-amber-700">
                <Youtube />
              </Link>
            </div>
            <p className="text-gray-600">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
              />
              <button className="bg-amber-700 text-white px-4 py-2 rounded-r hover:bg-amber-800">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Tanishq. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/terms" className="text-sm hover:text-amber-700">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm hover:text-amber-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

