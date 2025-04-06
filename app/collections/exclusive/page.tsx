import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/product-card"

export default function ExclusivePage() {
  // Sample data for products
  const products = [
    {
      id: "1",
      name: "Limited Edition Diamond Necklace",
      price: "₹245,999",
      image: "/placeholder.svg?height=300&width=300",
    },
    { id: "2", name: "Signature Gold Bangle", price: "₹178,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Designer Ruby Earrings", price: "₹89,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Platinum Engagement Ring", price: "₹124,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[300px] w-full">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Exclusive Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-serif">Exclusive Collection</h1>
              <p className="text-white mt-2 max-w-md">Limited edition pieces crafted for the discerning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Collections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Designer Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/collections/exclusive/designer1" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Designer Collection 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">Designer Name 1</h3>
                </div>
              </div>
            </Link>
            <Link href="/collections/exclusive/designer2" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Designer Collection 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">Designer Name 2</h3>
                </div>
              </div>
            </Link>
            <Link href="/collections/exclusive/designer3" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Designer Collection 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">Designer Name 3</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Exclusive Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Featured Exclusive Pieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Limited Edition */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-amber-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-serif mb-4">Limited Edition Collection</h2>
                <p className="text-gray-700 mb-6">
                  Discover our limited edition pieces, crafted in small batches by master artisans. Each piece is
                  numbered and comes with a certificate of authenticity.
                </p>
                <Link
                  href="/collections/exclusive/limited-edition"
                  className="inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
                >
                  Explore Collection
                </Link>
              </div>
              <div className="relative h-[250px]">
                <Image
                  src="/placeholder.svg?height=250&width=500"
                  alt="Limited Edition"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

