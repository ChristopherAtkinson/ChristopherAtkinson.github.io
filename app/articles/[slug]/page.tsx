import fs from "fs";
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const getArticleContent = (slug: string) => {
  const file = `markdown/articles/${slug}.md`;
  const markdown = fs.readFileSync(file, "utf8");
  const content = matter(markdown);
  return content.content;
}

const getArticleMarkdown = (): string[] => {
  const files = fs.readdirSync("markdown/articles/");
  const markdown = files.filter((file) => file.endsWith(".md"));
  
  return markdown.map((filename) => {
    return filename.replace('.md', '');
  })
}

export const generateStaticParams = async () => {
  const articles = getArticleMarkdown();
  return articles.map((article) => ({slug: article}));
}

export default function ArticlePage(props: any) {
  const slug = props.params.slug;
  const content = getArticleContent(slug);

  return (<div><Markdown>{content}</Markdown></div>)
}
