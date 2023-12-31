'use client'

import React from 'react';

import styles from './styles.module.css';

export default function CurriculumVitae(props: { heading: string, paragraph: string, filename: string}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{props.heading}</h2>
      <p className={styles.paragraph}>{props.paragraph}</p>
      <button className={styles.button}>
        <a href={props.filename} download>Download</a>
      </button>
    </section>
  )
}
