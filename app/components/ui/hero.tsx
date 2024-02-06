type cta = {
  text: string;
  link: string;
};

type Props = {
  title: string;
  description: string;
  cta: cta;
};

export function Hero({ title, description }: Props) {
  // const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        {/* <Avatar>
          <AvatarImage src="/avatar-jpg.jpg" alt="Johnson Ta" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <h1 className="font-semibold text-4xl md:text-2xl">
          Hello👋 I am Johnson
        </h1>
      </div>

      {title && (
        <h2 className="font-semibold text-4xl md:text-4xl mb-4">{title}</h2>
      )}
      {description && <p className="mb-4">{description}</p>}

      {/* {cta?.text && (
        <Button onClick={() => navigate(cta?.link)}>{cta?.text}</Button>
      )} */}
    </div>
  );
}
