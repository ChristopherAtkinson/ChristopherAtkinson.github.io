import type { Metadata } from 'next'
import './globals.css'

import React from "react";

import Link from 'next/link';

import Navigation from '@/components/modules/01-Navigation/Navigation';
import Footer from '@/components/modules/07-Footer/Footer';

import styles from './styles.module.css';

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
        <Navigation title='Christopher Atkinson'>
          <Link href="/#articles-section"><p className={styles.paragraph}>Article</p></Link>
          <Link href="/#experience-section"><p className={styles.paragraph}>Experience</p></Link>
          <Link href="/#curriculum-vitae-section"><p className={styles.paragraph}>Curriculum Vitae</p></Link>
          <Link href="/#portfolio-section"><p className={styles.paragraph}>Portfolio</p></Link>
        </Navigation>
        {children}
        <Footer copyright='© 2023 Christopher Atkinson. All rights reserved.'/>
      </body>
    </html>
  )
}
