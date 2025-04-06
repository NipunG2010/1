import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CollectionCard from "@/components/collection-card"; // Assuming this exists and is styled
import ProductCard from "@/components/product-card"; // Assuming this exists and is styled

export default function Home() {
  // Sample data (replace with actual data fetching later)
  const collections = [
    { title: "Gold Collection", image: "/placeholder.jpg", link: "/collections/gold" },
    { title: "Diamond Sparkle", image: "/placeholder.jpg", link: "/collections/diamond" },
    { title: "Wedding Wonders", image: "/placeholder.jpg", link: "/collections/wedding" },
  ];

  const categories = [
    { title: "Earrings", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=earrings" },
    { title: "Rings", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=rings" },
    { title: "Pendants", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=pendants" },
    { title: "Necklaces", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=necklaces" },
    { title: "Bracelets", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=bracelets" },
    { title: "Bangles", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=bangles" },
    { title: "Chains", image: "/placeholder.svg?height=150&width=150", link: "/shop?category=chains" },
    { title: "View All", image: "/placeholder.svg?height=150&width=150", link: "/shop" },
  ];

  const newArrivals = [
    { id: "na1", name: "Elegant Gold Hoops", price: "₹15,999", image: "/placeholder.jpg" },
    { id: "na2", name: "Solitaire Diamond Ring", price: "₹75,000", image: "/placeholder.jpg" },
    { id: "na3", name: "Pearl Drop Necklace", price: "₹22,500", image: "/placeholder.jpg" },
    { id: "na4", name: "Ruby Stud Earrings", price: "₹30,000", image: "/placeholder.jpg" },
  ];

  const curatedForYou = [
    { id: "cfy1", name: "Sapphire Pendant Set", price: "₹45,000", image: "/placeholder.jpg" },
    { id: "cfy2", name: "Men's Gold Chain", price: "₹60,000", image: "/placeholder.jpg" },
    { id: "cfy3", name: "Emerald Bracelet", price: "₹55,000", image: "/placeholder.jpg" },
    { id: "cfy4", name: "Platinum Wedding Band", price: "₹40,000", image: "/placeholder.jpg" },
  ];

  const tanishqWorldItems = [
     { title: "Gifting Guide", image: "/placeholder.jpg", link: "/collections/gifts" },
     { title: "Exclusive Designs", image: "/placeholder.jpg", link: "/collections/exclusive" },
     { title: "Store Locator", image: "/placeholder.jpg", link: "/store-locator" }, // Placeholder link
     { title: "Brand Story", image: "/placeholder.jpg", link: "/about-us" }, // Placeholder link
  ];

  const featuredCollections = [
    {
      title: "Gold Collection",
      description: "Explore timeless treasures meticulously crafted in radiant 18k and 22k gold.",
      image: "https://images.unsplash.com/photo-1610223515982-5bae48b7c2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzM3OTB8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2V8ZW58MHwyfHx8MTc0MzkzNjkxNXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "/collections/gold"
    },
    {
      title: "Diamond Sparkle",
      description: "Discover breathtaking diamonds, ethically sourced and set in stunning, intricate designs.",
      image: "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzM3OTB8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZ3xlbnwwfDJ8fHwxNzQzOTM2OTMwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "/collections/diamond"
    },
    {
      title: "Wedding Wonders",
      description: "Find the perfect symbols of your everlasting love, from engagement rings to wedding bands.",
      image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzM3OTB8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmFuZHN8ZW58MHwyfHx8MTc0MzkzNjk0M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "/collections/wedding"
    },
    {
      title: "Exclusive Designs",
      description: "Unveil unique, limited-edition jewellery pieces for the truly discerning collector.",
      image: "https://images.unsplash.com/photo-1740567177735-b3a751eb3891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzM3OTB8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBicmFjZWxldHxlbnwwfDJ8fHwxNzQzOTM2OTUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "/collections/exclusive"
    }
  ];
  const borderColors = [
    "border-yellow-500", // Gold
    "border-blue-300",   // Diamond
    "border-pink-300",   // Wedding
    "border-purple-700"  // Exclusive
  ];


  return (
    <div className="bg-brand-offwhite text-gray-800 font-sans">
      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[450px] w-full bg-gradient-to-r from-brand-red via-red-800 to-brand-red text-white flex items-center overflow-hidden">
        <Image
          src="/placeholder.jpg" // Using local placeholder
          alt="Luxury Jewellery Hero Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-30" // Slightly increased visibility
          priority // Load hero image faster
        />
        <div className="container mx-auto px-6 z-10 relative text-center py-20 md:py-24">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-4">
            Timeless Elegance, Crafted For You
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover exquisite collections that celebrate life's precious moments.
          </p>
          <Button asChild size="lg" className="bg-brand-gold hover:bg-yellow-600 text-brand-red font-semibold px-10 py-3 rounded-full transition-colors duration-300">
            <Link href="/shop">Discover Our Collections</Link>
          </Button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12 text-brand-red">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCollections.map((collection, index) => (
              <Link key={index} href={collection.link} className="group block">
                <Card className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-200 h-full flex flex-col border-l-4 ${borderColors[index]}`}>
                  <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="relative aspect-square w-full"> {/* Using square aspect ratio */}
                      <Image
                        src="/placeholder.jpg" // Using local placeholder for all collections
                        alt={collection.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                      <h3 className="text-lg font-medium text-brand-red group-hover:text-brand-gold transition-colors duration-300 mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {collection.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-brand-offwhite"> {/* Consistent background */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12 text-brand-red">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "fp1", name: "Elegant Gold Hoops", price: "$499", image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzM3OTB8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3N8ZW58MHwyfHx8MTc0MzkzNzA3M3ww&ixlib=rb-4.0.3&q=80&w=1080", link: "/product/fp1" },
              { id: "fp2", name: "Shimmering Diamond Pendant", price: "$1250", image: "https://images.unsplash.com/photo-1693212793367-60001caf3b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzM3OTB8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcGVuZGFudHxlbnwwfDJ8fHwxNzQzOTM3MDg3fDA&ixlib=rb-4.0.3&q=80&w=1080", link: "/product/fp2" },
              { id: "fp3", name: "Classic Silver Bracelet", price: "$299", image: "/placeholder.jpg", link: "/product/fp3" }, // Placeholder image
              { id: "fp4", name: "Luxury Timepiece", price: "$2500", image: "/placeholder.jpg", link: "/product/fp4" }, // Placeholder image
            ].map((product) => (
              <ProductCard
                key={product.id}
                id={product.id} // Pass id
                name={product.name}
                price={product.price}
                image={product.image}
                // Link is handled internally by ProductCard using the id
              />
            ))}
          </div>
           {/* Optional: Add View All link */}
           <div className="text-center mt-12">
             <Button variant="outline" asChild className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white rounded-full px-8 py-2 transition-colors duration-300">
               <Link href="/shop?filter=featured">View All Featured</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Tanishq Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12 text-brand-red">
            Our Signature Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                title={collection.title}
                image={collection.image}
                link={collection.link}
                // Removed className and titleClassName as they are not direct props
                // Styling should be handled within the CollectionCard component itself or via parent selectors if needed.
              />
            ))}
          </div>
           <div className="text-center mt-12">
             <Button variant="outline" asChild className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white rounded-full px-8 py-2 transition-colors duration-300">
               <Link href="/collections">View All Collections</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Find Your Perfect Match (Categories) */}
      <section className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12 text-brand-red">
            Find Your Perfect Match
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group text-center block">
                <div className="relative aspect-square w-full max-w-[120px] mx-auto overflow-hidden rounded-full mb-3 border-2 border-brand-gold group-hover:border-brand-red transition-colors duration-300 shadow-md group-hover:shadow-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors duration-300">{category.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif text-brand-red">New Arrivals</h2>
            <Button variant="link" asChild className="text-brand-gold hover:text-yellow-600 px-0">
              <Link href="/shop?sort=newest">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                // Removed className as it's not a direct prop
                // Styling should be handled within the ProductCard component itself or via parent selectors if needed.
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curated For You */}
      <section className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif text-brand-red">Curated For You</h2>
             {/* Optional: Add View All link if applicable */}
             {/* <Button variant="link" asChild className="text-brand-gold hover:text-yellow-600 px-0">
               <Link href="/shop?filter=curated">View All</Link>
             </Button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {curatedForYou.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                // Removed className as it's not a direct prop
                // Styling should be handled within the ProductCard component itself or via parent selectors if needed.
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tanishq World */}
      <section className="py-16 bg-gradient-to-b from-white to-brand-offwhite">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12 text-brand-red">
            Explore the Tanishq World
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {tanishqWorldItems.map((item, index) => (
                <Link key={index} href={item.link} className="group block">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-200">
                        <CardContent className="p-0">
                        <div className="relative aspect-video w-full">
                            <Image
                            src={item.image}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-medium text-brand-red group-hover:text-brand-gold transition-colors duration-300">{item.title}</h3>
                            {/* Optional: Add a short description */}
                            {/* <p className="text-sm text-gray-600 mt-1">Learn more about {item.title.toLowerCase()}.</p> */}
                        </div>
                        </CardContent>
                    </Card>
                </Link>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
