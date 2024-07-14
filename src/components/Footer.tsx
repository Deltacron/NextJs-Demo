import React from 'react'
import { Subtitle } from './Typography'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex gap-8 mt-6 items-center justify-center tracking-normal text-center leading-[171%] max-md:mt-10">
      <Link href="/">
        <Subtitle variant='subtitle2' className="!text-primary">
          Privacy & Terms
        </Subtitle>
      </Link>
      <Link href="/">
        <Subtitle variant='subtitle2' className="!text-primary">
          Help? Contact Support
        </Subtitle>
      </Link>
    </div>
  )
}

export default Footer
