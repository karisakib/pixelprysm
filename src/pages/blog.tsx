import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <Layout>
     <div className="">
     <h2 className="text-3xl font-semibold tracking-tight">
      Blog
     </h2>
    </div>
    </Layout>
  );
}
