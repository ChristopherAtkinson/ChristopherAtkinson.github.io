import fs from 'fs';
import matter from 'gray-matter';

import React from 'react';
import Image from 'next/image';

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
      <Image className={styles.company_icon} priority src={experience.icon} alt="company icon" width={48} height={48} />
      <div>
        <h2 className={styles.heading}>{experience.role} | {experience.date}</h2>
        <p className={styles.paragraph}>{experience.description}</p>
      </div>
    </div>
  ));

  return (
    <section className={styles.section}>
      {experiencePreview}
    </section>
  )
}
