import Image from "next/image"
import Link from "next/link"
import CollectionCard from "@/components/collection-card"
import ProductCard from "@/components/product-card"

export default function Home() {
  // Sample data for collections
  const collections = [
    { title: "Soulmate", image: "/placeholder.svg?height=300&width=400", link: "/collections/soulmate" },
    { title: "Giving It", image: "/placeholder.svg?height=300&width=400", link: "/collections/giving-it" },
    { title: "Moments", image: "/placeholder.svg?height=300&width=400", link: "/collections/moments" },
  ]

  // Sample data for categories
  const categories = [
    { title: "Earrings", image: "/placeholder.svg?height=200&width=200", link: "/collections/earrings" },
    { title: "Pendants", image: "/placeholder.svg?height=200&width=200", link: "/collections/pendants" },
    { title: "Bracelets", image: "/placeholder.svg?height=200&width=200", link: "/collections/bracelets" },
    { title: "Necklaces", image: "/placeholder.svg?height=200&width=200", link: "/collections/necklaces" },
    { title: "Bangles", image: "/placeholder.svg?height=200&width=200", link: "/collections/bangles" },
    { title: "Rings", image: "/placeholder.svg?height=200&width=200", link: "/collections/rings" },
    { title: "Chains", image: "/placeholder.svg?height=200&width=200", link: "/collections/chains" },
    { title: "View All", image: "/placeholder.svg?height=200&width=200", link: "/collections" },
  ]

  // Sample data for products
  const products = [
    { id: "1", name: "Diamond Stud Earrings", price: "₹24,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "Gold Chain Necklace", price: "₹56,999", image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Ruby Pendant", price: "₹32,499", image: "/placeholder.svg?height=300&width=300" },
    { id: "4", name: "Pearl Bracelet", price: "₹18,999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="For your timeless love"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl md:text-5xl font-serif font-light max-w-md">For your timeless love</h1>
              <Link
                href="/collections/wedding"
                className="mt-6 inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tanishq Collections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Tanishq Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <CollectionCard key={index} title={collection.title} image={collection.image} link={collection.link} />
            ))}
          </div>
        </div>
      </section>

      {/* Pick up where you left */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-serif mb-6">Pick up where you left</h2>
          <p className="text-gray-600 mb-4">Continue browsing your recently viewed products</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product, index) => (
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

      {/* Find Your Perfect Match */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Find Your Perfect Match</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="relative aspect-square overflow-hidden rounded-md mb-2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center text-sm font-medium">{category.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tanishq World */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Tanishq World</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/occasions/wedding" className="relative aspect-square overflow-hidden rounded-md group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Wedding"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">Wedding</h3>
              </div>
            </Link>
            <Link href="/occasions/traditional" className="relative aspect-square overflow-hidden rounded-md group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Traditional"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">Traditional</h3>
              </div>
            </Link>
            <Link href="/occasions/casual" className="relative aspect-square overflow-hidden rounded-md group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Casual"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">Casual</h3>
              </div>
            </Link>
            <Link href="/occasions/office-wear" className="relative aspect-square overflow-hidden rounded-md group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Office Wear"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">Office Wear</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tanishq Assurance */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Tanishq Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Authentic Jewellery" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium mb-2">100% Authentic Jewellery</h3>
              <p className="text-gray-600 text-sm">Every piece is hallmarked and certified for quality</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Lifetime Exchange" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium mb-2">Lifetime Exchange</h3>
              <p className="text-gray-600 text-sm">Exchange your jewellery anytime with our lifetime policy</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Secure Shipping" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium mb-2">Secure Shipping</h3>
              <p className="text-gray-600 text-sm">Free, insured shipping across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Program */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif mb-4">Welcome to Tanishq's Exchange Program</h2>
              <p className="text-gray-700 mb-6">
                Trade in your old gold jewellery for new designs. Get the best value for your old gold.
              </p>
              <Link
                href="/exchange-program"
                className="inline-block bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800"
              >
                Know More
              </Link>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Exchange Program"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Fair Value" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium text-sm">Fair Value</h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Transparent Process" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium text-sm">Transparent Process</h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Convenient Exchange" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium text-sm">Convenient Exchange</h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Image src="/placeholder.svg?height=40&width=40" alt="New Designs" width={40} height={40} />
                </div>
              </div>
              <h3 className="font-medium text-sm">New Designs</h3>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif">New Arrivals</h2>
            <Link href="/collections/new-arrivals" className="text-amber-700 hover:underline">
              View All
            </Link>
          </div>
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

      {/* Promotional Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-red-800 text-white rounded-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-serif mb-2">Mia's PAYDAY SALE is back!</h2>
                <p className="text-xl mb-4">Flat 20% off on all designs</p>
                <Link
                  href="/sale"
                  className="inline-block bg-white text-red-800 px-6 py-3 rounded hover:bg-gray-100 w-max"
                >
                  Shop Now
                </Link>
              </div>
              <div className="relative h-[200px] md:h-auto">
                <Image src="/placeholder.svg?height=300&width=500" alt="Sale Banner" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

