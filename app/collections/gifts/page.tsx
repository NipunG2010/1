import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/product-card"

export default function GiftsPage() {
  // Sample data for products
  const products = [
    { id: "1", name: "Diamond Pendant", price: "₹32,499", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Gold Bracelet", price: "₹64,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Pearl Earrings", price: "₹15,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Silver Cufflinks", price: "₹8,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "5", name: "Gemstone Ring", price: "₹24,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "6", name: "Gold Chain", price: "₹45,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "7", name: "Diamond Bracelet", price: "₹67,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "8", name: "Silver Anklet", price: "₹12,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  // Sample data for occasions
  const occasions = [
    { title: "Birthday", image: "/placeholder.svg?height=300&width=300", link: "/collections/gifts/birthday" },
    { title: "Anniversary", image: "/placeholder.svg?height=300&width=300", link: "/collections/gifts/anniversary" },
    { title: "Wedding", image: "/placeholder.svg?height=300&width=300", link: "/collections/gifts/wedding" },
    { title: "Valentine's Day", image: "/placeholder.svg?height=300&width=300", link: "/collections/gifts/valentines" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[300px] w-full">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Gift Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-serif">Gift Collection</h1>
              <p className="text-white mt-2 max-w-md">Perfect jewellery gifts for every occasion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift by Occasion */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Gift by Occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Link key={index} href={occasion.link} className="group">
                <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                  <Image
                    src={occasion.image || "/placeholder.svg"}
                    alt={occasion.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center text-sm font-medium">{occasion.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gift by Price */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Gift by Price</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              href="/collections/gifts/under-10000"
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium">Under ₹10,000</h3>
            </Link>
            <Link
              href="/collections/gifts/10000-25000"
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium">₹10,000 - ₹25,000</h3>
            </Link>
            <Link
              href="/collections/gifts/25000-50000"
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium">₹25,000 - ₹50,000</h3>
            </Link>
            <Link
              href="/collections/gifts/above-50000"
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium">Above ₹50,000</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gift Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Featured Gift Ideas</h2>
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

      {/* Gift Cards */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif mb-4">Gift Cards</h2>
              <p className="text-gray-700 mb-6">
                Can't decide on the perfect gift? Let them choose with a Tanishq Gift Card. Available in various
                denominations and valid for 12 months.
              </p>
              <Link
                href="/gift-cards"
                className="inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
              >
                Buy Gift Card
              </Link>
            </div>
            <div className="relative h-[250px]">
              <Image
                src="/placeholder.svg?height=250&width=500"
                alt="Gift Card"
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

