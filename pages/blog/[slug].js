import fs from 'fs';
import path from 'path';
import  matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import React from 'react'

export default function PostPage({frontmatter:{title,date,cover_image},slug,content}) {
    return (
      <>
        <div className="w-5/6 mx-auto text-slate-700">
          <Link href="/">
            <a className="rounded-full bg-red-400 py-2 px-6 text-white mt-4">
              Back
            </a>
          </Link>
          <div className="my-8  text-3xl font-bold">
            <h1>{title}</h1>
          </div>
          <div>{date}</div>
          <img src={cover_image} alt={title} className="mb-8"/>
          <div>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }} className="text-xl" style={{wordSpacing:"5px"}}></div>
          </div>
        </div>
      </>
    );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", slug + ".md"),
      "utf-8"
    );
    const { data: frontmatter,content} = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

