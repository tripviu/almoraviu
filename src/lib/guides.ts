import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type GuideMeta = {
  title: string;
  slug: string;
  summary: string;
  category?: string;
  city?: string;
  country?: string;
  minutes?: number;
  image?: string;
};

export function getAllGuides(): GuideMeta[] {
  const dir = path.join(process.cwd(), "content/guides");
  return fs.readdirSync(dir)
    .filter(file => file.endsWith(".mdx"))
    .map(file => {
      const fullPath = path.join(dir, file);
      const source = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(source);
      return data as GuideMeta;
    });
}

export function getGuideBySlug(slug: string) {
  const dir = path.join(process.cwd(), "content/guides");
  const fullPath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(source);
  return { meta: data as GuideMeta, content };
}
