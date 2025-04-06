import Link from "next/link"
import Image from "next/image"

interface CollectionCardProps {
  title: string
  image: string
  link: string
}

export default function CollectionCard({ title, image, link }: CollectionCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-center font-medium">{title}</h3>
    </Link>
  )
}

