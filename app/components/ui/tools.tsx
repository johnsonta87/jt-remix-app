import { Heading } from "./heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const experiences = [
  {
    language: "Javascript",
    libaries: "React/Vue",
    backend: "GraphQL",
  },
  {
    language: "Typescript",
    libaries: "Next.js",
    backend: "REST API",
  },
  {
    language: "HTML5",
    libaries: "TailwindCSS",
    backend: "HTMX",
  },
  {
    language: "SCSS/CSS",
    libaries: "Astro",
    backend: "Node",
  },
  {
    language: "Dart",
    libaries: "Remix",
    backend: "Flutter",
  },
  {
    language: "Liquid",
    libaries: "Nuxt",
    backend: "React Native",
  },
  {
    language: "",
    libaries: "ShadCN",
    backend: "",
  },
  {
    language: "",
    libaries: "Redux",
    backend: "",
  },
];

export function Tools() {
  return (
    <div className="my-10 w-full md:w-3/4">
      <Heading text="Tech stack ⚡️" />
      <p className="mb-4">
        Here is a list of languages, libraries and frameworks I have worked with
        but am not limited to. Definitely missing a few but you get the idea.
      </p>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-rose-500 text-left">Languages</TableHead>
            <TableHead className="text-rose-500 text-center">
              Libraries/Frameworks
            </TableHead>
            <TableHead className="text-rose-500 text-right">Others</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {experiences.map((experience) => (
            <TableRow
              className="hover:bg-transparent"
              key={experience.language}
            >
              <TableCell className="text-left">{experience.language}</TableCell>
              <TableCell className="text-center">
                {experience.libaries}
              </TableCell>
              <TableCell className="text-right">{experience.backend}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
