import type { MetaFunction } from "@remix-run/node";
import { Heading } from "~/components/ui/heading";

export const meta: MetaFunction = () => {
  return [
    { title: "Johnson Ta 🚀 Selected Works" },
    {
      name: "description",
      content: "A few selected applications that I've built",
    },
  ];
};

export default function Works() {
  return (
    <div className="text-center">
      <Heading text="Selected works" />
    </div>
  );
}
