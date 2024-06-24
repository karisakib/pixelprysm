import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Layout>
    <h2 className="text-3xl font-semibold tracking-tight">
      Latest
     </h2>
    </Layout>
    </>
  );
}
