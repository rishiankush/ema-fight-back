import { blogPosts, type BlogBlock, type BlogPost } from "@/content/blogPosts";

export type ProgramMediaBlock = Extract<BlogBlock, { type: "img" | "video" | "youtube" }>;

export type ProgramMediaPost = {
  slug: string;
  title: string;
  date: string;
  media: ProgramMediaBlock[];
};

function mediaBlocks(post: BlogPost): ProgramMediaBlock[] {
  return post.blocks.filter(
    (block): block is ProgramMediaBlock =>
      block.type === "img" || block.type === "video" || block.type === "youtube",
  );
}

/** Women Fight Back on emafitness.com shows seminar photos and videos from the blog feed. */
export function getProgramMediaPosts(slug: string): ProgramMediaPost[] {
  if (slug !== "women") return [];
  return blogPosts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      media: mediaBlocks(post),
    }))
    .filter((post) => post.media.length > 0);
}
