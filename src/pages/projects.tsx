import ProjectList from "@/components/ProjectList";
import Layout from "@/layouts/Layout";

export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col pr-16">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
      </div>
      <ProjectList />
    </Layout>
  );
}
