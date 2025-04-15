import floresta from "../assets/img/floresta.jpg";
import wildbeast from "../assets/parceiros/wildbeast.svg";
export function Introduction() {
  return (
    <section className="container">
      <div className="bg-gradient-to-t container from-verde-950/80 overflow-hidden pb-8 pt-64 px-8 relative rounded-2xl text-white to-blue-800 z-0">
        <img
          className="-z-10 absolute inset-0 object-cover size-full"
          src={floresta}
          alt="Imagem de floresta"
        />
        <div className="bg-verde-950 gap-8 inline-flex items-center mb-8 pl-4 pr-1 py-1 rounded-full">
          Vagas para Dezembro abertas
          <a
            className="bg-verde-400 inline-flex px-4 py-2 rounded-full text-verde-900"
            href=""
          >
            Reserve Hoje
          </a>
        </div>
        <h1 className="font-serif max-w-screen-sm mb-20 text-5xl text-balance">
          Venha Experimentar a Vida na Floresta
        </h1>
        <div className="flex items-end justify-between">
          <p className="text-sm">
            Melhores locais para visitar{" "}
            <a
              className="decoration-2 hover:no-underline underline underline-offset-4"
              href=""
            >
              2049
            </a>{" "}
          </p>
          <div>
            <p className="mb-2 uppercase">Recomendado por </p>
            <p className="flex gap-4 items-center">
              <img className="w-28" src={wildbeast} alt="logo Wildbeast" />
              <span>|</span>
              Revista Nacional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
