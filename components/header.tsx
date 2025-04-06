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
          <Link href="/" className="text-2xl font-serif font-bold text-brand-red hover:text-brand-gold transition-colors">
            JewelProto
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation - Updated Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            <Link href="/shop" className="hover:text-brand-gold transition-colors">
              Shop All
            </Link>
            <Link href="/collections" className="hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link href="/collections/gold" className="hover:text-brand-gold transition-colors">
              Gold
            </Link>
            <Link href="/collections/diamond" className="hover:text-brand-gold transition-colors">
              Diamond
            </Link>
            <Link href="/collections/wedding" className="hover:text-brand-gold transition-colors">
              Wedding
            </Link>
            <Link href="/collections/gifts" className="hover:text-brand-gold transition-colors">
              Gifts
            </Link>
            <Link href="/collections/exclusive" className="hover:text-brand-gold transition-colors">
              Exclusive
            </Link>
            {/* Add other top-level links if needed */}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-600 hover:text-brand-gold transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" aria-label="Account" className="text-gray-600 hover:text-brand-gold transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="text-gray-600 hover:text-brand-gold transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/cart" aria-label="Cart" className="text-gray-600 hover:text-brand-gold transition-colors">
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

