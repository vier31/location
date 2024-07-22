import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Loift App" },
    { name: "Loift", content: "Exploring data visualization with location data." },
  ];
};

export default function Index() {
  return (
    <div>Hello World</div>
  );
}
