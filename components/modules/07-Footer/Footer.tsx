'use client'

import React from 'react';

import styles from './styles.module.css';

export default function Footer(props: { copyright: string }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>{props.copyright}</p>
    </footer>
  )
}
