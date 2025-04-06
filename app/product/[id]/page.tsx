import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, Truck, RotateCcw, Shield } from "lucide-react"

export default function ProductDetail({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const product = {
    id: params.id,
    name: "18K Yellow Gold Diamond Stud Earrings",
    price: "₹24,999",
    originalPrice: "₹29,999",
    discount: "17% off",
    description:
      "These beautiful diamond stud earrings feature round brilliant cut diamonds set in 18K yellow gold. Perfect for everyday wear or special occasions.",
    details: [
      "Product Code: 123456789",
      "Metal: 18K Yellow Gold",
      "Diamond Weight: 0.25 carats",
      "Diamond Quality: SI clarity, H-I color",
      "Product Weight: 2.5 grams",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    relatedProducts: [
      { id: "2", name: "Gold Chain Necklace", price: "₹56,999", image: "/placeholder.svg?height=300&width=300" },
      { id: "3", name: "Ruby Pendant", price: "₹32,499", image: "/placeholder.svg?height=300&width=300" },
      { id: "4", name: "Pearl Bracelet", price: "₹18,999", image: "/placeholder.svg?height=300&width=300" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="relative aspect-square mb-4">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover rounded-md cursor-pointer border hover:border-amber-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-serif mb-2">{product.name}</h1>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-medium text-amber-700">{product.price}</span>
            <span className="text-gray-500 line-through">{product.originalPrice}</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{product.discount}</span>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="border-t border-b py-4 mb-6">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="space-y-1">
              {product.details.map((detail, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-amber-700 text-white py-3 rounded hover:bg-amber-800">Add to Cart</button>
            <button className="p-3 border rounded hover:bg-gray-50">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-3 border rounded hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-amber-700" />
              <div>
                <h4 className="font-medium text-sm">Free Shipping</h4>
                <p className="text-xs text-gray-600">Delivery in 3-5 business days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-amber-700" />
              <div>
                <h4 className="font-medium text-sm">30-Day Returns</h4>
                <p className="text-xs text-gray-600">Easy returns within 30 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-amber-700" />
              <div>
                <h4 className="font-medium text-sm">Lifetime Warranty</h4>
                <p className="text-xs text-gray-600">Certified and authentic jewellery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct, index) => (
            <div key={index} className="group">
              <Link href={`/product/${relatedProduct.id}`} className="block">
                <div className="relative aspect-square overflow-hidden rounded-md mb-3">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm">{relatedProduct.name}</h3>
                <p className="text-amber-700 mt-1">{relatedProduct.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

