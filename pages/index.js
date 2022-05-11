import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Head from 'next/head';
import Post from '../components/Post';
import {sortByDate} from '../utils';
// import Image from 'next/image';

export default function Home({posts}) {
  console.log(posts);
  return (
    <div className="container w-full">
      <Head>
        <title>Big Blog</title>
      </Head>
      <div className="container">
        {posts.map((post, index) => (
          <Post
            key={index}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // to get files from the posts directory
  const files = fs.readdirSync(path.join('posts'));
  // to get slug and frontmatter from posts
  const posts  = files.map(filename => {
    // create  slug
    const slug  =  filename.replace('.md','');
    // create frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8');
    const {data : frontmatter}  = matter(markdownWithMeta);
    // console.log(frontmatter);
    return {
      slug,
      frontmatter,
    };
  });
  // console.log(posts);
  // console.log(files);
  // console.log('hello');
  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}