import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllPosts } from "../utils/getPosts";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const { slug } = useParams();
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) return <p className="text-center py-20 text-zinc-400">Post not found.</p>;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-4 py-16 prose prose-invert dark:prose-invert"
    >
      <h1>{post.frontmatter.title}</h1>
      <p className="text-zinc-400">{post.frontmatter.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </motion.article>
  );
}
