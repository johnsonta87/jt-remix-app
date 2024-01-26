import type { MetaFunction } from "@remix-run/node";
import { Hero } from "../components/ui";

export const meta: MetaFunction = () => {
  return [
    { title: "Johnson Ta 🚀 Home" },
    { name: "description", content: "Welcome to my site!" },
  ];
};

export default function Index() {
  return (
    <Hero
      title="Proactive, analytical and versatile Software Engineer with a passion for finding pragmatic solutions to technical challenges."
      description="I build performant, scalable, accessible and modular applications with React, Vue and TypeScript. Currently in beautiful Canada."
      cta={{
        text: "Learn More",
        link: "/about/",
      }}
    />
  );
}
