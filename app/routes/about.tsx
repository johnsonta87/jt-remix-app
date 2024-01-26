import type { MetaFunction } from "@remix-run/node";
import { Heading } from "~/components/ui/heading";
import { Tools } from "~/components/ui/tools";

export const meta: MetaFunction = () => {
  return [
    { title: "Johnson Ta 🚀 Abut me" },
    { name: "description", content: "Learn more about me" },
  ];
};

export default function About() {
  return (
    <>
      <Heading text="About me" />

      <p className="mb-4">
        I’m Johnson, a <span className="text-rose-500">software engineer</span>{" "}
        in Canada.
      </p>

      <p className="mb-4">
        I have been developing applications for over 8 years. Much of my
        experience lies in building modern stack, highly optimized and
        performant applications. I can turn your mockups and data into user
        interfaces that work in the browser and mobile applications.
      </p>

      <p className="mb-4">
        I am a fast learning and am able to adapt to new workflows and coding
        projects.
      </p>

      <p className="mb-4">
        Whether it be in the real or software worlds, I love building products
        that are elegant, useful, and cost-effective.
      </p>

      <blockquote className="bg-amber-100 p-6 my-6">
        <p className="font-semibold text-black">
          TL;DR I do everything from architecture design, development, testing &
          squashing bugs, deploy and getting the project ready for production.
        </p>
      </blockquote>

      <Tools />
    </>
  );
}
