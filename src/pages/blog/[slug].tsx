import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";

export default function BlogPost({ post }) {
  const router = useRouter();

  // If the page is not yet generated, show a loading state
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
        <p>{post.content}</p>
      </div>
    </Layout>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps({ params }) {
  const apiUrl =
    process.env.ENV === "dev"
      ? "http://localhost:3000"
      : "https://pixelprysm.com";

  // Call an external API endpoint to get post by slug.
  const res = await fetch(`http://localhost:3000/api/blog/${params.slug}`);
  const post = await res.json();

  // By returning { props: { post } }, the Blog component
  // will receive `post` as a prop at build time
  return {
    props: {
      post,
    },
  };
}

// This function gets called at build time on server-side.
// It defines the paths to be statically generated.
export async function getStaticPaths() {
  const apiUrl =
    process.env.ENV === "dev"
      ? "http://localhost:3000"
      : "https://pixelprysm.com";

  // Call an external API endpoint to get all posts.
  const res = await fetch(`${apiUrl}/api/blog`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: true } means other routes should render
  // fallback and then fetch the data client-side.
  return { paths, fallback: true };
}
