import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/work";

export default function WorkPage() {
  const projects = getProjects();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">
        Work
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project: any) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group"
          >
            <div className="overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={220}
                height={130}
                className="
                  grayscale
                  group-hover:grayscale-0
                  transition-all
                  duration-300
                "
              />
            </div>

            <div className="mt-3">
              <div className="text-xs text-zinc-500">
                {project.type}
              </div>

              <h2 className="mt-1 font-medium">
                {project.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}