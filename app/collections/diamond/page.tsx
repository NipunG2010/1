import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/product-card"

export default function DiamondPage() {
  // Sample data for products
  const products = [
    { id: "1", name: "Diamond Stud Earrings", price: "₹24,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Diamond Pendant", price: "₹32,499", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Diamond Ring", price: "₹89,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Diamond Bracelet", price: "₹67,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "5", name: "Diamond Necklace", price: "₹124,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "6", name: "Diamond Bangle", price: "₹78,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "7", name: "Diamond Nose Pin", price: "₹12,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "8", name: "Diamond Mangalsutra", price: "₹99,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[300px] w-full">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Diamond Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-serif">Diamond Collection</h1>
              <p className="text-white mt-2 max-w-md">Brilliance that lasts forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Explore Diamond Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/collections/diamond/earrings" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Diamond Earrings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Earrings</h3>
            </Link>
            <Link href="/collections/diamond/pendants" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Diamond Pendants"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Pendants</h3>
            </Link>
            <Link href="/collections/diamond/rings" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Diamond Rings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Rings</h3>
            </Link>
            <Link href="/collections/diamond/necklaces" className="group">
              <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Diamond Necklaces"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium">Necklaces</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Diamond Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Featured Diamond Jewellery</h2>
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

      {/* Diamond Quality Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">The 4Cs of Diamond Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl mb-3">Cut</h3>
              <p className="text-gray-700">
                The cut of a diamond determines its brilliance and sparkle. A well-cut diamond reflects light internally
                and disperses it through the top of the stone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl mb-3">Color</h3>
              <p className="text-gray-700">
                Diamond color is graded from D (colorless) to Z (light yellow or brown). The less color, the higher the
                grade and value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl mb-3">Clarity</h3>
              <p className="text-gray-700">
                Clarity measures the absence of inclusions and blemishes. Diamonds with fewer imperfections receive
                higher clarity grades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl mb-3">Carat</h3>
              <p className="text-gray-700">
                Carat refers to a diamond's weight. One carat equals 200 milligrams. Larger diamonds are rarer and more
                valuable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

