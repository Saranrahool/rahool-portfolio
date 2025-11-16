import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllPosts } from "../utils/getPosts";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

export default function Post() {
  const { slug } = useParams();
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Post not found
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-4 py-16"
    >
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-8"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-3 text-black dark:text-white">
        {post.frontmatter.title}
      </h1>
      <p className="text-gray-600 dark:text-zinc-400 mb-8">
        {post.frontmatter.date}
      </p>

      <div className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:text-black dark:prose-headings:text-white
        prose-p:text-gray-700 dark:prose-p:text-zinc-300
        prose-a:text-cyan-600 dark:prose-a:text-cyan-400
        prose-strong:text-black dark:prose-strong:text-white
        prose-code:text-cyan-600 dark:prose-code:text-cyan-400
        prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900
        prose-blockquote:border-cyan-500 dark:prose-blockquote:border-cyan-400
        prose-blockquote:text-gray-700 dark:prose-blockquote:text-zinc-300
      ">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </motion.article>
  );
}