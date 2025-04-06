import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: string
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${id}`} className="block relative">
        <div className="relative aspect-square overflow-hidden rounded-md mb-3">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-amber-700 mt-1">{price}</p>
      </Link>
    </div>
  )
}

