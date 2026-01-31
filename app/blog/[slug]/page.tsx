import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Not Found | Raghuvir Singh" };
  }

  return {
    title: `${post.title} | Raghuvir Singh`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-16 max-w-xl mx-auto">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← back to blog
      </Link>

      <article>
        <header className="mb-8">
          <span className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {" · "}
            {post.readingTime}
          </span>
          <h1 className="text-2xl font-semibold mt-2">{post.title}</h1>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← all posts
        </Link>
      </div>
    </main>
  );
}
