import fs from 'fs';
import matter from 'gray-matter';

import React from 'react';

import { IExperience } from '@/components/models/experience.interface';

import styles from './styles.module.css';

const getExperienceMarkdown = (): IExperience[] => {
  const files = fs.readdirSync("markdown/experience/");
  const markdown = files.filter((file) => file.endsWith(".md"));
  
  const map = markdown.map((filename) => {
    const content = fs.readFileSync(`markdown/experience/${filename}`, "utf8");
    const frontmatter = matter(content);

    return {
      role: frontmatter.data.Role,
      description: frontmatter.data.Description,
      date: frontmatter.data.Date,
      icon: frontmatter.data.Icon,
      slug: filename.replace('.md', '')
    };
  })

  return map.reverse();
}

export default function Experience() {
  const experienceMarkdown = getExperienceMarkdown();
  const experiencePreview = experienceMarkdown.map((experience) => (
    <div key={experience.slug} className={styles.card}>
      <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" >
        <path strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" d="M11 11h1v5.5m0 0h1.5m-1.5 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9.5-4v-.5h.5V8h-.5Z"/>
      </svg>
      <div className={styles.container_inner}>
        <h2 className={styles.heading}>{experience.role}</h2>
        <p className={styles.paragraph}>{experience.description}</p>
        <h3 className={styles.date}>{experience.date}</h3>
      </div>
    </div>
  ));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {experiencePreview}
      </div>
    </section>
  )
}
