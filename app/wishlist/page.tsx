import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingBag, Heart } from "lucide-react"

export default function WishlistPage() {
  // Sample wishlist items
  const wishlistItems = [
    { id: "1", name: "Diamond Stud Earrings", price: "₹24,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Gold Chain Necklace", price: "₹56,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Ruby Pendant", price: "₹32,499", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-serif mb-8">My Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 p-4 border-b bg-gray-50 text-sm font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-4 text-right">Actions</div>
          </div>

          {wishlistItems.map((item, index) => (
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
              <div className="col-span-2 text-center">{item.price}</div>
              <div className="col-span-4 text-right">
                <div className="flex justify-end space-x-2">
                  <button className="p-2 bg-amber-700 text-white rounded hover:bg-amber-800">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-50">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-lg shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
          </div>
          <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">
            Add items you love to your wishlist. Review them anytime and easily move them to the bag.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
          >
            Continue Shopping
          </Link>
        </div>
      )}

      {wishlistItems.length > 0 && (
        <div className="mt-8 flex justify-end">
          <Link
            href="/collections"
            className="inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  )
}

