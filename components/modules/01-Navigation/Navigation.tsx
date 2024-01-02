'use client'

import React, { useState } from 'react';

import Link from 'next/link';

import styles from './styles.module.css';

export default function Navigation(props: { title: string, children: any }) {
  const [enabled, setEnabled] = useState<Boolean>(false);

  return (
    <nav className={styles.navigation}>
      <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"/>
      </svg>
      <Link href="/"><h1 className={styles.heading}>{props.title}</h1></Link>
      <button className={styles.hamburger_button} onClick={() => setEnabled(!enabled)}>
        <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <g strokeLinecap="round" strokeWidth="2"><path d="M4 6h16"/> <path d="M4 10h16"/> <path d="M4 14h16"/> <path d="M4 18h16"/></g>
        </svg>
      </button>
      <div className={enabled ? styles.hamburger_menu : styles.hamburger_menu_hidden}>
        {props.children}
      </div>
    </nav>
  )
}
