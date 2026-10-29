import fs from "fs";
import path from "path";
import matter from "gray-matter";

const workDir = path.join(process.cwd(), "content/work");

export function getProjects() {
  const files = fs.readdirSync(workDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const source = fs.readFileSync(
      path.join(workDir, file),
      "utf8"
    );

    const { data } = matter(source);

    return {
      slug,
      ...data,
    };
  });
}

export function getProject(slug: string) {
  const filePath = path.join(workDir, `${slug}.mdx`);

  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);

  return {
    slug,
    frontmatter: data,
    source: content,
  };
}