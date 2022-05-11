import React from 'react';
import Link from 'next/link';

const Post = ({post}) => {
  return (
    <div className="flex flex-col md:flex-row  mb-10 p-4 bg-white shadow-lg shadow-indigo-500/50 rounded-lg w-3/4 mx-auto bg-stone-50">
      <img
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        className="md:w-1/2 md:my-4 rounded-lg"
      />
      <div className="my-4 md:mx-4 flex flex-col text-slate-600">
        <div className="my-4">
          <h3 className="md:text-2xl font-bold  text-slate-700">
            {post.frontmatter.title}
          </h3>
          <div className="my-2">{post.frontmatter.date}</div>
          <div>{post.frontmatter.excerpt}</div>
        </div>
        <div className="my-2">
          <Link href={`/blog/${post.slug}`}>
            <a className="border-2 rounded-md px-4  py-2 bg-indigo-500 shadow-lg shadow-indigo-500/50  text-white">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;