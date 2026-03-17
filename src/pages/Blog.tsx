import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

// Manually list posts here — add a new entry whenever you add a .md file
const posts: Post[] = [
  {
    slug: "building_lab",
    title: "Building My Home Lab — From Ubuntu Server to Enterprise Simulation",
    date: "October 2025",
    excerpt:
      "How I turned spare hardware into a fully virtualized home lab for networking, Active Directory, and infrastructure troubleshooting.",
  },
];

export default function Blog() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-16"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
        <p className="mt-2 text-gray-500 dark:text-zinc-400">
          Thoughts on IT, home labs, and things I've learned along the way.
        </p>
      </motion.div>

      {posts.length === 0 ? (
        <motion.div variants={item} className="text-center py-24">
          <p className="text-gray-500 dark:text-zinc-400 text-lg">
            No posts yet — check back soon.
          </p>
        </motion.div>
      ) : (
        <motion.div variants={item} className="mt-10 grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-colors"
              >
                <p className="text-xs text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-2">
                  {post.date}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                  Read more →
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}