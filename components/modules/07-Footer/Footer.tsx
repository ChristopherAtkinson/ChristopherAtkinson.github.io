'use client'

import React from 'react';

import styles from './styles.module.css';

export default function Footer(props: { copyright: string }) {
  return (
    <footer className={styles.footer}>
        <h3>{props.copyright}</h3>
    </footer>
  )
}
