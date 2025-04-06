import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/product-card"

export default function GoldPage() {
  // Sample data for products
  const products = [
    { id: "1", name: "Gold Chain Necklace", price: "₹56,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Gold Bangles Set", price: "₹78,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Gold Pendant", price: "₹34,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Gold Earrings", price: "₹45,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "5", name: "Gold Ring", price: "₹29,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "6", name: "Gold Bracelet", price: "₹64,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "7", name: "Gold Mangalsutra", price: "₹89,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "8", name: "Gold Choker", price: "₹124,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[300px] w-full">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Gold Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-serif">Gold Collection</h1>
              <p className="text-white mt-2 max-w-md">Timeless elegance crafted in pure gold</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Explore Gold Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/collections/gold/necklaces" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Gold Necklaces"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Necklaces</h3>
            </Link>
            <Link href="/collections/gold/bangles" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Gold Bangles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Bangles</h3>
            </Link>
            <Link href="/collections/gold/earrings" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Gold Earrings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Earrings</h3>
            </Link>
            <Link href="/collections/gold/rings" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Gold Rings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Rings</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gold Products */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Featured Gold Jewellery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Gold Purity Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif mb-4">Gold Purity Guide</h2>
              <p className="text-gray-700 mb-4">
                At Tanishq, we offer gold jewellery in various purities to suit your preferences and budget.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-800 font-medium px-2 py-1 rounded mr-2">24K</span>
                  <span>99.9% pure gold, ideal for investment</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-800 font-medium px-2 py-1 rounded mr-2">22K</span>
                  <span>91.6% pure gold, perfect for traditional jewellery</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-800 font-medium px-2 py-1 rounded mr-2">18K</span>
                  <span>75% pure gold, suitable for everyday wear</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-800 font-medium px-2 py-1 rounded mr-2">14K</span>
                  <span>58.3% pure gold, durable for daily use</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Gold Purity"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

