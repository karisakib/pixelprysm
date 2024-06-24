import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";
import * as fs from "fs";
import * as path from "path";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="mr-10">
        <h2 className="text-3xl font-semibold tracking-tight">Blog</h2>
        <div className="my-3">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col my-20">
              <Link href={post.title} className="text-4xl font-semibold tracking-tight">
                {post.title}
              </Link>
              <span className="text-sm font-light">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogDir = "./content/blog";
  const files = fs.readdirSync(blogDir);
  const posts = [];

  files.forEach((file, err) => {
    if (file) {
      if (path.extname(file) === ".md") console.log(file);
      else if (path.extname(file) === ".json") {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        let data = JSON.parse(fileContent);
        console.log(data);
        posts.push(data);
      } else {
        // console.log(file);
      }
    } else {
      console.log(err);
    }
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
