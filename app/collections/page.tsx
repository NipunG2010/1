import Image from "next/image"
import CollectionCard from "@/components/collection-card"

export default function Collections() {
  // Sample data for collections
  const collections = [
    { title: "Soulmate", image: "/placeholder.svg?height=300&width=400", link: "/collections/soulmate" },
    { title: "Giving It", image: "/placeholder.svg?height=300&width=400", link: "/collections/giving-it" },
    { title: "Moments", image: "/placeholder.svg?height=300&width=400", link: "/collections/moments" },
    { title: "Rivaah", image: "/placeholder.svg?height=300&width=400", link: "/collections/rivaah" },
    { title: "Mia", image: "/placeholder.svg?height=300&width=400", link: "/collections/mia" },
    { title: "Aveer", image: "/placeholder.svg?height=300&width=400", link: "/collections/aveer" },
  ]

  // Sample data for categories
  const categories = [
    { title: "Gold", image: "/placeholder.svg?height=300&width=400", link: "/collections/gold" },
    { title: "Diamond", image: "/placeholder.svg?height=300&width=400", link: "/collections/diamond" },
    { title: "Platinum", image: "/placeholder.svg?height=300&width=400", link: "/collections/platinum" },
    { title: "Silver", image: "/placeholder.svg?height=300&width=400", link: "/collections/silver" },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[300px] w-full">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Collections" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-serif">Our Collections</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <CollectionCard key={index} title={collection.title} image={collection.image} link={collection.link} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-8">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CollectionCard key={index} title={category.title} image={category.image} link={category.link} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

