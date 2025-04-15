import logo from "../assets/img/forest.svg";
import { menu } from "../utils/data";
export function Menu() {
  return (
    <header className="container flex gap-8 items-center justify-between mt-8 py-8">
      <img src={logo} alt="Logo Forest" />
      <nav>
        <ul className="flex flex-wrap gap-8 text-white text-xl">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                className="hover:underline hover:underline-offset-8"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
