import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"

export default function CartPage() {
  // Sample cart items
  const cartItems = [
    {
      id: "1",
      name: "Diamond Stud Earrings",
      price: 24999,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
    { id: "2", name: "Gold Chain Necklace", price: 56999, quantity: 1, image: "/placeholder.svg?height=300&width=300" },
  ]

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.18 // 18% GST
  const shipping = subtotal > 50000 ? 0 : 500
  const total = subtotal + tax + shipping

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-serif mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-12 p-4 border-b bg-gray-50 text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {cartItems.map((item, index) => (
                <div key={index} className="grid grid-cols-12 p-4 border-b items-center">
                  <div className="col-span-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <Link href={`/product/${item.id}`} className="font-medium hover:text-amber-700">
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">{formatCurrency(item.price)}</div>
                  <div className="col-span-2 text-center">
                    <div className="flex items-center justify-center">
                      <button className="p-1 border rounded-l hover:bg-gray-50">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="p-1 border rounded-r hover:bg-gray-50">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="flex justify-between items-center">
                      <span>{formatCurrency(item.price * item.quantity)}</span>
                      <button className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18% GST)</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 mb-4">
                Proceed to Checkout
              </button>

              <Link href="/collections" className="block text-center text-amber-700 hover:underline">
                Continue Shopping
              </Link>
            </div>

            {/* Coupon Code */}
            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <h3 className="font-medium mb-3">Apply Coupon Code</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-amber-700 focus:border-amber-700"
                />
                <button className="bg-amber-700 text-white px-4 py-2 rounded-r hover:bg-amber-800">Apply</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-12 rounded-lg shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <ShoppingBag className="h-8 w-8 text-gray-400" />
            </div>
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any jewellery to your cart yet.</p>
          <Link
            href="/collections"
            className="inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  )
}

