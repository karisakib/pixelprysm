import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="flex flex-col pr-16 justify-center items-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col pr-16">
        <h2 className="text-3xl font-semibold tracking-tight">{post.title}</h2>
        <span className="test-lg">{post.date}</span>
        <span className="text-sm">{post.description}</span>
        <p className="text-lg">{post.body}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const apiUrl =
    process.env.ENV === "dev"
      ? "http://localhost:3000"
      : "https://pixelprysm.com";

  try {
    const res = await fetch(`${apiUrl}/api/blog/${params.slug}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch post data: ${res.statusText}`);
    }
    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const apiUrl =
    process.env.ENV === "dev"
      ? "http://localhost:3000"
      : "https://pixelprysm.com";

  try {
    const res = await fetch(`${apiUrl}/api/blog`);
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }
    const posts = await res.json();

    const paths = posts.data.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
