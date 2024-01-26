import { useNavigate } from "@remix-run/react";
import { Button } from ".";

type cta = {
  text: string;
  link: string;
};

type Props = {
  title: string;
  description: string;
  cta: cta;
};

export function Hero({ title, description, cta }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-semibold text-4xl text-lg md:text-2xl mb-8">
        Hello👋 I am Johnson
      </h1>

      {title && (
        <h2 className="font-semibold text-4xl text-lg md:text-4xl mb-4">
          {title}
        </h2>
      )}
      {description && <p className="mb-4">{description}</p>}

      {cta?.text && (
        <Button onClick={() => navigate(cta?.link)}>{cta?.text}</Button>
      )}
    </div>
  );
}
