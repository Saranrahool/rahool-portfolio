import matter from "gray-matter";

// Import all markdown files from the posts directory
const modules = import.meta.glob<string>("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getAllPosts() {
  const posts = Object.entries(modules).map(([filepath, content]) => {
    // Extract slug from filepath
    const slug = filepath.split("/").pop()?.replace(".md", "") || "";
    
    // Parse frontmatter and content
    const { data, content: markdown } = matter(content);
    
    return {
      slug,
      frontmatter: data as { title: string; date: string; excerpt: string },
      content: markdown,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}