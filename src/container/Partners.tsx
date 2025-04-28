import { partners } from "../utils/data";

export default function Partners() {
  return (
    <section className="container pb-12 sm:pb-16">
      <ul className="*:*:max-h-8 *:py-4 divide-verde-900 flex flex-col items-center max-sm:divide-y-2 sm:border-b-1 sm:border-t-1 sm:border-verde-900 sm:flex-row sm:gap-8 sm:py-8">
        {partners.map((marca) => (
          <li className="flex flex-1 justify-center">
            <img src={marca.Image} alt={marca.nome} />
          </li>
        ))}
      </ul>
    </section>
  );
}
