import type { Metadata } from 'next'
import './globals.css'

import React from "react";

import Link from 'next/link';
import HamburgerIcon from '../public/resources/hamburger menu icon.svg';
import BoxIcon from '../public/resources/box logo icon.svg';

import Navigation from '@/components/modules/01-Navigation/Navigation';
import Footer from '@/components/modules/07-Footer/Footer';

export const metadata: Metadata = {
  title: 'Christopher Atkinson',
  description: "Explore Christopher Atkinson's portfolio showcasing development and design expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation logo={BoxIcon} hamburger={HamburgerIcon} title='Christopher Atkinson'>
          <Link href="#articles-section"><h2 >Article</h2></Link>
          <Link href="#experience-section"><h2 >Experience</h2></Link>
          <Link href="#curriculum-vitae-section"><h2 >Curriculum Vitae</h2></Link>
          <Link href="#portfolio-section"><h2 >Portfolio</h2></Link>
        </Navigation>
        {children}
        <Footer copyright='© 2023 Christopher Atkinson. All rights reserved.'/>
      </body>
    </html>
  )
}
