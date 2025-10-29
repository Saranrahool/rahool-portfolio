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
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map(({ slug, frontmatter }) => (
          <Link key={slug} to={`/blog/${slug}`}>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors">
              <h2 className="text-2xl font-semibold text-white">{frontmatter.title}</h2>
              <p className="text-zinc-400 text-sm mb-2">{frontmatter.date}</p>
              <p className="text-zinc-300 mb-3">{frontmatter.excerpt}</p>
              <span className="text-cyan-400 hover:text-cyan-300 text-sm">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
