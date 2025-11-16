import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/getPosts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Blog</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-zinc-400 text-lg">
            No blog posts yet. Check back soon! 📝
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