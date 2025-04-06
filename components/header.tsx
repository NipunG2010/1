import Link from "next/link"
import { Search, ShoppingBag, Heart, User, MapPin, ChevronDown, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full border-b">
      {/* Top bar */}
      <div className="bg-gray-100 py-2 px-4 text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              Stores
            </span>
            <span>Contact Us</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Download App</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold">
            Tanishq
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <div className="group relative">
              <Link href="/collections" className="flex items-center hover:text-amber-700">
                All Jewellery <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 z-10 w-[200px]">
                <Link href="/collections/earrings" className="block py-2 hover:text-amber-700">
                  Earrings
                </Link>
                <Link href="/collections/pendants" className="block py-2 hover:text-amber-700">
                  Pendants
                </Link>
                <Link href="/collections/rings" className="block py-2 hover:text-amber-700">
                  Rings
                </Link>
                <Link href="/collections/necklaces" className="block py-2 hover:text-amber-700">
                  Necklaces
                </Link>
                <Link href="/collections/bracelets" className="block py-2 hover:text-amber-700">
                  Bracelets
                </Link>
              </div>
            </div>
            <Link href="/collections/gold" className="hover:text-amber-700">
              Gold
            </Link>
            <Link href="/collections/diamond" className="hover:text-amber-700">
              Diamond
            </Link>
            <Link href="/collections/wedding" className="hover:text-amber-700">
              Wedding
            </Link>
            <Link href="/collections/gifts" className="hover:text-amber-700">
              Gifts
            </Link>
            <Link href="/collections/exclusive" className="hover:text-amber-700">
              Exclusive
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/cart" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <button className="md:hidden" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

