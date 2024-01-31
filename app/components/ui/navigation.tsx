import { useLocation } from "@remix-run/react";
import { ThemeSwitcher } from "./themeSwitcher";

export function Navigation() {
  const location = useLocation();
  const links = [
    {
      link: "/",
      text: "Home",
      highlight: false,
    },
    {
      link: "/about",
      text: "About",
      highlight: false,
    },
    {
      link: "/works",
      text: "Works",
      highlight: false,
    },
    {
      link: "/contact",
      text: "Let's Chat",
      highlight: false,
    },
  ];

  const highlightClasses = `rounded font-semibold text-rose-500 hover:text-rose-600`;

  return (
    <header>
      <ul className="flex justify-center items-center">
        {links.map((link, index) => (
          <li key={index} className="mr-6">
            <a
              href={link.link}
              className={`transition ease-in-out delay-100 hover:text-rose-500 ${
                link.highlight ? highlightClasses : ""
              } ${location.pathname === link.link ? highlightClasses : ""}`}
            >
              {link.text}
            </a>
          </li>
        ))}
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
}
