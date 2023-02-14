import Link from 'next/link'
import React from 'react'
import { CardContainer } from 'ui'

const Hero = () => {
  return (
    <div className="flex flex-col mx-auto mt-10 ">
      <h1 className="px-12 mb-2 text-2xl font-bold text-center text-gray-500">
        React Toolkit Query vs React Query Demo
      </h1>

      <div className="grid max-w-5xl grid-cols-1 gap-5 m-4 mt-10 md:grid-cols-2">
        <CardContainer>
          <Link href="/rtk-query">
            <h2>React Toolkit Query Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link>
        </CardContainer>
        <CardContainer>
          <Link href="/react-query">
            <h2>React Query Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link>
        </CardContainer>
        <CardContainer>
          <Link href="/about">
            <h2>About Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link>
        </CardContainer>
        <CardContainer>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </CardContainer>
      </div>
    </div>
  )
}

export default Hero
