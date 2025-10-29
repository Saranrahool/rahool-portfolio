import matter from "gray-matter";

export function getAllPosts() {
  const posts = import.meta.glob("../posts/*.md", { eager: true });
  return Object.keys(posts).map((key) => {
    const file = posts[key] as { default: string };
    const slug = key.split("/").pop()?.replace(".md", "");
    const { data, content } = matter(file.default);
    return { slug, frontmatter: data, content };
  });
}
