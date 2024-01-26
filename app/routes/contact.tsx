import type { MetaFunction } from "@remix-run/node";
import { Heading } from "~/components/ui/heading";

export const meta: MetaFunction = () => {
  return [
    { title: "Johnson Ta 🚀 Abut me" },
    { name: "description", content: "Learn more about me" },
  ];
};

export default function Contact() {
  return (
    <div className="text-center">
      <Heading text="Around the web" />

      <p className="mb-4">
        The best way to get in touch with me is to email me at{" "}
        <a href="mailto:jnsn@gmail.com" className="text-rose-500">
          jnsn@gmail.com
        </a>
      </p>
      <ul>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/johnsonta87"
            target="_blank"
            rel="noreferrer"
            className="text-rose-500"
          >
            https://github.com/johnsonta87
          </a>
        </li>
      </ul>
    </div>
  );
}
