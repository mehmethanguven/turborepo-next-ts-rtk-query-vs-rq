import Image from 'next/image'
import React from 'react'
import { ISocialLink } from 'types'

const SocialItem = ({ title, imageUrl, url }: ISocialLink) => {
  return (
    <a href={url}>
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src={imageUrl}
        alt={title}
        className="w-8 h-8 p-1 transition-all duration-200 hover:translate-y-0.5 hover:rounded-lg"
      />
    </a>
  )
}

export default SocialItem
