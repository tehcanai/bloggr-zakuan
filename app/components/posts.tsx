import Link from "next/link";
import { formatDate, getBlogPosts } from "app/rant/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/rant/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="w-[100px] tabular-nums text-neutral-700">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
