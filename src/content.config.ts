// src/content.config.ts
// 今回の記事自動生成ツール（rakuten_article_gen）が出力するFrontmatterに合わせたスキーマ。
// ツール側のフィールドを変えたら、ここも合わせて変更してください。
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    slug: z.string(),
    pr: z.boolean().default(false),          // アフィリエイトリンクを含む記事か（PR表記の出し分けに使用）
    priceCheckedAt: z.coerce.date().optional(),
    draft: z.boolean().default(true),         // true の間は一覧・個別ページに出さない
  }),
});

export const collections = { blog };
