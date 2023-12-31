'use client'

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

export default function Navigation(props: { logo: string, hamburger: string, title: string, children: any }) {
  const [enabled, setEnabled] = useState<Boolean>(false);

  return (
    <nav className={styles.navigation}>
      <Image className={styles.company_icon} priority src={props.logo} alt="company icon" width={24} height={24} />
      <Link href="/"><h1 className=''>{props.title}</h1></Link>
      <button className={styles.hamburger_button} onClick={() => setEnabled(!enabled)}>
        <Image className={styles.hamburger_icon} priority src={props.hamburger} alt="hamburger icon" width={24} height={24} />
      </button>
      <div className={enabled ? styles.hamburger_menu : styles.hamburger_menu_hidden}>
        {props.children}
      </div>
    </nav>
  )
}
