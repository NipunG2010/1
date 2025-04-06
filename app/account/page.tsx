import Link from "next/link"
import { User, Package, Heart, CreditCard, Settings, LogOut } from "lucide-react"

export default function AccountPage() {
  // This would normally check for authentication
  const isLoggedIn = false

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-serif text-center mb-8">Sign In</h1>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-amber-700 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800">
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-amber-700 hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-serif mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gray-100 rounded-full p-2">
                <User className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <h2 className="font-medium">John Doe</h2>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
              </div>
            </div>

            <nav className="space-y-1">
              <Link href="/account" className="flex items-center space-x-2 p-3 bg-amber-50 text-amber-700 rounded">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link href="/account/orders" className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded">
                <Package className="h-5 w-5" />
                <span>Orders</span>
              </Link>
              <Link href="/wishlist" className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded">
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </Link>
              <Link href="/account/payment" className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded">
                <CreditCard className="h-5 w-5" />
                <span>Payment Methods</span>
              </Link>
              <Link href="/account/settings" className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
              <button className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded w-full text-left">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-6">Personal Information</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="John"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Doe"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="+91 9876543210"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-medium mb-6">Address Book</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 rounded">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Home</h3>
                  <div className="space-x-2">
                    <button className="text-sm text-amber-700 hover:underline">Edit</button>
                    <button className="text-sm text-gray-600 hover:underline">Delete</button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  John Doe
                  <br />
                  123 Main Street
                  <br />
                  Apartment 4B
                  <br />
                  Mumbai, Maharashtra 400001
                  <br />
                  India
                  <br />
                  +91 9876543210
                </p>
              </div>

              <div className="border p-4 rounded border-dashed flex items-center justify-center">
                <button className="text-amber-700 hover:underline">+ Add New Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

