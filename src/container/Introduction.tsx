import floresta from "../assets/img/floresta.jpg";
import wildbeast from "../assets/parceiros/wildbeast.svg";
export function Introduction() {
  return (
    <section className="container">
      <div className="bg-gradient-to-t container from-verde-950/80 max-sm:pt-12 max-sm:px-4 overflow-hidden pb-8 pt-64 px-8 relative rounded-2xl text-white to-blue-800 z-0">
        <img
          className="-z-10 absolute inset-0 object-cover size-full"
          src={floresta}
          alt="Imagem de floresta"
        />
        <div className="bg-verde-950/60 flex flex-col gap-2 items-start mb-8 p-4 rounded-xl sm:bg-verde-950 sm:flex-row sm:gap-8 sm:inline-flex sm:items-center sm:pl-4 sm:pr-1 sm:py-1 sm:rounded-full">
          Vagas para Dezembro abertas
          <a
            className="bg-verde-400 inline-flex px-4 py-2 rounded-full text-verde-900"
            href=""
          >
            Reserve Hoje
          </a>
        </div>
        <h1 className="font-serif max-w-screen-sm mb-8 sm:mb-20 sm:text-5xl text-4xl text-balance">
          Venha Experimentar a Vida na Floresta
        </h1>
        <div className="items-end justify-between sm:flex">
          <p className="max-sm:mb-4 text-sm">
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
