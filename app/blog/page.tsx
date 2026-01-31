import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Raghuvir Singh",
  description: "Thoughts and learnings.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-16 max-w-xl mx-auto">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← back
      </Link>

      <h1 className="text-2xl font-semibold mb-8">blog</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          no posts yet. add markdown files to <code className="bg-secondary px-1.5 py-0.5 rounded text-sm">content/blog/</code>
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <h2 className="font-medium group-hover:text-muted-foreground transition-colors mt-1">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
