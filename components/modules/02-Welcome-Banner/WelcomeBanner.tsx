'use client'

import React from 'react';

import styles from './styles.module.css';

export default function WelcomeBanner(props: { heading: string, paragraph: string }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{props.heading}</h1>
      <p className={styles.paragraph}>{props.paragraph}</p>
    </section>
  )
}
