import Image from "next/image"
import ProductCard from "@/components/product-card"
import { Filter, ChevronDown } from "lucide-react"

export default function Shop() {
  // Sample data for products
  const products = [
    { id: "1", name: "Diamond Stud Earrings", price: "₹24,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Gold Chain Necklace", price: "₹56,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Ruby Pendant", price: "₹32,499", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Pearl Bracelet", price: "₹18,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "5", name: "Emerald Ring", price: "₹45,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "6", name: "Sapphire Necklace", price: "₹78,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "7", name: "Gold Bangles", price: "₹64,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "8", name: "Diamond Ring", price: "₹89,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "9", name: "Pearl Earrings", price: "₹15,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "10", name: "Gold Pendant", price: "₹34,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "11", name: "Diamond Bracelet", price: "₹67,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "12", name: "Ruby Earrings", price: "₹29,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[200px] w-full">
          <Image src="/placeholder.svg?height=200&width=1200" alt="Shop All Jewellery" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl font-serif">Shop All Jewellery</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <div className="sticky top-4">
              <h2 className="font-medium text-lg mb-4">Filters</h2>

              <div className="border-t pt-4 pb-2">
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Earrings</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Necklaces</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Rings</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Bracelets</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Pendants</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-4 pb-2 mt-4">
                <h3 className="font-medium mb-2">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Under ₹10,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>₹10,000 - ₹25,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>₹25,000 - ₹50,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>₹50,000 - ₹100,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Above ₹100,000</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-4 pb-2 mt-4">
                <h3 className="font-medium mb-2">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Gold</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Diamond</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Platinum</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Silver</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Gemstones</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Mobile Filters */}
            <div className="md:hidden mb-6">
              <button className="w-full flex items-center justify-between border p-3 rounded">
                <span className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 text-sm">Showing 1-12 of 48 products</p>
              <select className="border p-2 rounded text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex border rounded overflow-hidden">
                <button className="px-4 py-2 border-r hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 border-r bg-amber-50 text-amber-700">1</button>
                <button className="px-4 py-2 border-r hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border-r hover:bg-gray-50">3</button>
                <button className="px-4 py-2 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

