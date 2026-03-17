import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

// Import all markdown files as raw strings
const modules = import.meta.glob<string>("../posts/*.md", {
  eager: true,
  as: "raw",
});

function parsePost(raw: string) {
  const lines = raw.split("\n");
  let inFrontmatter = false;
  const frontmatter: Record<string, string> = {};
  let contentStart = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        contentStart = i + 1;
        break;
      }
    } else if (inFrontmatter) {
      const colonIdx = lines[i].indexOf(":");
      if (colonIdx !== -1) {
        const key = lines[i].slice(0, colonIdx).trim();
        const value = lines[i]
          .slice(colonIdx + 1)
          .trim()
          .replace(/^["']|["']$/g, "");
        frontmatter[key] = value;
      }
    }
  }

  return {
    frontmatter,
    content: lines.slice(contentStart).join("\n"),
  };
}

export default function Post() {
  const { slug } = useParams();

  // Find the matching module
  const matchedEntry = Object.entries(modules).find(([filepath]) =>
    filepath.endsWith(`/${slug}.md`)
  );

  if (!matchedEntry) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Post not found
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 mb-8">
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

  const { frontmatter, content } = parsePost(matchedEntry[1]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-6 py-16"
    >
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-8"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">
        {frontmatter.title ?? slug}
      </h1>
      <p className="text-gray-500 dark:text-zinc-400 mb-10">
        {frontmatter.date}
      </p>

      <div
        className="
          prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:text-gray-700 dark:prose-p:text-zinc-300
          prose-a:text-cyan-600 dark:prose-a:text-cyan-400
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-code:text-cyan-600 dark:prose-code:text-cyan-400
          prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900
          prose-blockquote:border-cyan-500
          prose-blockquote:text-gray-600 dark:prose-blockquote:text-zinc-400
        "
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </motion.article>
  );
}