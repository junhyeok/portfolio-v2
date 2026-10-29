// each work page

import { Suspense } from "react";
import { getProject, getProjects } from "@/lib/work";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import BackToTop from "@/components/BackToTop";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-2">
        {project.frontmatter.title}
      </h1>

      <p className="text-zinc-500 mb-8">
        {project.frontmatter.type}
        {" • "}
        {project.frontmatter.year}
      </p>
      
      <BackToTop />
      
      {project.frontmatter.thumbnail && (
        <div className="mb-10">
          <Image
            src={project.frontmatter.thumbnail}
            alt={project.frontmatter.title}
            width={1200}
            height={675}
            className="w-full rounded-lg"
          />
        </div>
      )}


      <div className="prose prose-invert max-w-none">
        <MDXRemote source={project.source} />
      </div>
    </main>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto p-8">Loading...</div>}>
      <ProjectContent params={params} />
    </Suspense>
  );
}