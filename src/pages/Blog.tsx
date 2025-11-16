import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  let posts: any[] = [];
  let error: string | null = null;

  try {
    // Try to import the module directly
    const modules = import.meta.glob("../posts/*.md", {
      eager: true,
      as: "raw",
    });

    console.log("Modules found:", modules);
    console.log("Number of modules:", Object.keys(modules).length);

    posts = Object.entries(modules).map(([filepath, content]) => {
      console.log("Processing:", filepath);
      console.log("Content preview:", content?.substring(0, 100));

      const slug = filepath.split("/").pop()?.replace(".md", "") || "";
      
      // Simple frontmatter parsing
      const lines = content.split('\n');
      let inFrontmatter = false;
      let frontmatter: any = {};
      let contentStart = 0;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '---') {
          if (!inFrontmatter) {
            inFrontmatter = true;
          } else {
            contentStart = i + 1;
            break;
          }
        } else if (inFrontmatter) {
          const [key, ...valueParts] = lines[i].split(':');
          if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            frontmatter[key.trim()] = value;
          }
        }
      }

      const markdown = lines.slice(contentStart).join('\n');

      return {
        slug,
        frontmatter: {
          title: frontmatter.title || "Untitled",
          date: frontmatter.date || "No date",
          excerpt: frontmatter.excerpt || "No excerpt",
        },
        content: markdown,
      };
    });

    console.log("Processed posts:", posts);
  } catch (e: any) {
    error = e.message;
    console.error("Error loading posts:", e);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Blog</h1>
      
      {/* Debug info */}
      <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm">
        <p className="font-bold mb-2">Debug Info:</p>
        <p>Posts found: {posts.length}</p>
        {error && <p className="text-red-600 dark:text-red-400">Error: {error}</p>}
        <details className="mt-2">
          <summary className="cursor-pointer">View raw data</summary>
          <pre className="mt-2 overflow-auto text-xs">
            {JSON.stringify(posts, null, 2)}
          </pre>
        </details>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-zinc-400 text-lg">
            No blog posts found. Check console for details.
          </p>
        </div>
      ) : (
        <div className="grid gap-8">
          {posts.map(({ slug, frontmatter }) => (
            <Link key={slug} to={`/blog/${slug}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">
                  {frontmatter.title}
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 text-sm mb-3">
                  {frontmatter.date}
                </p>
                <p className="text-gray-700 dark:text-zinc-300 mb-3">
                  {frontmatter.excerpt}
                </p>
                <span className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-sm font-medium">
                  Read more →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </motion.section>
  );
}