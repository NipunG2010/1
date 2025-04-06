import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/product-card"

export default function WeddingPage() {
  // Sample data for products
  const products = [
    { id: "1", name: "Bridal Necklace Set", price: "₹245,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Wedding Bangles", price: "₹178,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Mangalsutra", price: "₹89,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Wedding Rings", price: "₹67,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Wedding Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-serif">Wedding Collection</h1>
              <p className="text-white mt-2 max-w-md">
                Celebrate your special day with our exquisite wedding jewellery
              </p>
              <Link
                href="/collections/wedding/bridal"
                className="mt-6 inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
              >
                Explore Bridal Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Wedding Jewellery Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/collections/wedding/bridal" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Bridal Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">Bridal Collection</h3>
                </div>
              </div>
            </Link>
            <Link href="/collections/wedding/groom" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Groom Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">Groom Collection</h3>
                </div>
              </div>
            </Link>
            <Link href="/collections/wedding/engagement" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Engagement Rings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">Engagement Rings</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Wedding Products */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Featured Wedding Jewellery</h2>
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

      {/* Wedding Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Our Wedding Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Personal Shopper" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium mb-2">Personal Shopper</h3>
              <p className="text-gray-600 text-sm">Get personalized assistance from our bridal jewellery experts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Customization" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium mb-2">Customization</h3>
              <p className="text-gray-600 text-sm">Create bespoke wedding jewellery that matches your vision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Try at Home" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium mb-2">Try at Home</h3>
              <p className="text-gray-600 text-sm">Experience our wedding collection in the comfort of your home</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

