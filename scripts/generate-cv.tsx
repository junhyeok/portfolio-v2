import fs from "fs";
import path from "path";

import { pdf } from "@react-pdf/renderer";

import { CVDocument } from "./CVDocument";

import { profile } from "../content/cv/profile";

import { getExperiences } from "../lib/experience";
import { getPublications } from "../lib/publications";

async function generate() {
  const experiences = getExperiences();
  const publications = getPublications();

  const doc = (
    <CVDocument
      profile={profile}
      experiences={experiences}
      publications={publications}
    />
  );

  const blob = await pdf(doc).toBuffer();

  const outputPath = path.join(
    process.cwd(),
    "public/files/Junhyeok-Kim-CV.pdf"
  );

  fs.writeFileSync(outputPath, blob);

  console.log(
    "Successfully generated:",
    outputPath
  );
}

generate();