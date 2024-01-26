type Props = {
  text: string;
};

export function Heading({ text }: Props) {
  if (!text) return;

  return <h3 className="text-2xl font-semibold mb-4">{text}</h3>;
}
