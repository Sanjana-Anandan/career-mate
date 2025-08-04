import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
        <nav>
            <Link href="/" >
            <Image src = '/career-logo.png' alt='careermate' width={200} height={60} className='h-20 py-1 w-auto object-contain'/>
            </Link>
        </nav>
        <div>
            <SignedIn>
                <Link href={"/dashboard"}>
                <Button>
                    <LayoutDashboard className='h-4 w-4'/>
                    Industry Insights
                </Button>
                </Link>
            </SignedIn>
        </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Header
