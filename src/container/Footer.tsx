import LogoForest from "../assets/img/forest.svg";
import { SocialMedia } from "../utils/data";
export default function Footer() {
  return (
    <footer className="container pb-8 sm:pb-12">
      <div className="bg-verde-900 dm:p-12 mb-8 p-6 rounded-2xl">
        <div>
          <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:gap-12">
            <div>
              <h3 className="font-serif mb-4 text-white text-xl">Endereço</h3>
              <p className="text-gray-400">
                Rua da Mata 123 <br />
                Floresta Nacional <br /> São Paulo - SP{" "}
              </p>
            </div>
            <div>
              <h3 className="font-serif mb-4 text-white text-xl">Contato</h3>
              <p className="text-gray-400">
                <a href="mailto:oliveira.frontend@gmail.com">
                  oliveira.frontend@gmail.com
                </a>{" "}
                <br />
                (11)-9999-99999
              </p>
            </div>
            <div className="lg:justify-self-end mb-4">
              <img src={LogoForest} alt="Logo Forest" />
              <p className="text-gray-400">Conecte-se com a Natureza </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-between lg:flex-row max-md:flex-col-reverse text-gray-400 text-sm">
        <p>
          Criado por{" "}
          <a
            className="cursor-pointer hover:text-verde-400"
            target="_blank"
            href="https://www.origamid.com/"
          >
            Origamid
          </a>{" "}
          Desenvolvido por{" "}
          <a
            target="_blank"
            className="cursor-pointer hover:text-verde-400"
            href="https://www.portfolio.ofs.dev.br"
          >
            Emmanuel Oliveira
          </a>
        </p>
        <p>© Forest. Todos os Direitos Reservados</p>

        <ul className="*:hover:text-verde-300 flex gap-8">
          {SocialMedia.map((media, index) => (
            <li key={index}>
              <a href={media.href}></a>
              {media.name}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
