import fs from 'fs';
import matter from 'gray-matter';

import React from 'react';
import Link from 'next/link';

import { IArticle } from '@/components/models/article.interface';

import styles from './styles.module.css';

const getArticleMarkdown = (): IArticle[] => {
  const files = fs.readdirSync("markdown/articles/");
  const markdown = files.filter((file) => file.endsWith(".md"));

  return markdown.map((filename) => {
    const content = fs.readFileSync(`markdown/articles/${filename}`, "utf8");
    const frontmatter = matter(content);

    return {
      title: frontmatter.data.Title,
      description: frontmatter.data.Description,
      date: frontmatter.data.Date,  
      slug: filename.replace('.md', '')
    };
  })
}

export default function Article() {
  const articleMarkdown = getArticleMarkdown();
  const articlePreview = articleMarkdown.map((article) => (
    <div key={article.slug} className={styles.card}>
      <Link href={`/articles/${article.slug}`}><h2 className={styles.heading}>{article.title}</h2></Link>
      <p className={styles.paragraph}>{article.description}</p>
    </div>
  ));

  return (
    <section className={styles.section}>
      {articlePreview}
    </section>
  )
}
