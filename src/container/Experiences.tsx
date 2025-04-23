import canoagem from "../assets/img/canoagem.jpg";
import observacao_noturna from "../assets/img/observacao-noturna.jpg";
import vida_selvagem from "../assets/img/vida-selvagem.jpg";
export function Experiences() {
  return (
    <section
      id="experiencias"
      className="container gap-8 grid pb-12 sm:grid-cols-2 sm:pt-16"
    >
      <div className="bg-verde-900 p-6 rounded-xl sm:p-8">
        <p className="mb-4 text-sm text-verde-200 tracking-widest uppercase">
          Experiências exclusivas
        </p>
        <h2 className="capitalize font-serif lg:text-5xl mb-8 sm:text-4xl text-3xl text-balance text-white">
          Escolha a sua proxima aventura
        </h2>
        <h3 className="before:bg-verde-400 before:h-0.5 before:transition-[width] before:w-6 duration-1000 ease-in-out flex gap-4 hover:before:w-10 items-center text-white text-xl">
          Observação Noturna
        </h3>
        <p className="mb-8 pl-10 text-balance text-gray-400">
          Explore a vida selvagem em seu habitat natural sob as estrelas.
        </p>
        <h3 className="before:bg-verde-400 before:h-0.5 before:transition-[width] before:w-6 duration-1000 ease-in-out flex gap-4 hover:before:w-10 items-center text-white text-xl">
          Vida Selvagem
        </h3>
        <p className="mb-8 pl-10 text-balance text-gray-400">
          Observe a vida selvagem em seu habitat natural.
        </p>
        <h3 className="before:bg-verde-400 before:h-0.5 before:transition-[width] before:w-6 duration-1000 ease-in-out flex gap-4 hover:before:w-10 items-center text-white text-xl">
          Canoagem
        </h3>
        <p className="mb-8 pl-10 text-balance text-gray-400">
          Conquiste novos horizontes com nossa equipe especializada.
        </p>
      </div>
      <div className="gap-4 grid grid-cols-2">
        <div className="cursor-pointer group overflow-hidden relative rounded-xl">
          <img
            className="group-hover:scale-110 object-cover size-full transition-transform"
            src={canoagem}
            alt="Praticando canoagem"
          />
          <div className="absolute bg-gradient-to-t flex from-verde-950/80 group-hover:opacity-100 inset-0 items-end opacity-0 p-4 transition-opacity">
            <span className="text-white">Canoagem</span>
          </div>
        </div>
        <div className="cursor-pointer group overflow-hidden relative rounded-xl row-span-2">
          <img
            className="group-hover:scale-110 object-cover size-full transition-transform"
            src={observacao_noturna}
            alt="Observação Noturna"
          />
          <div className="absolute bg-gradient-to-t flex from-verde-950/80 group-hover:opacity-100 inset-0 items-end opacity-0 p-4 transition-opacity">
            <span className="text-white">Observação Noturna</span>
          </div>
        </div>
        <div className="cursor-pointer group overflow-hidden relative rounded-xl">
          <img
            className="group-hover:scale-110 object-cover size-full transition-transform"
            src={vida_selvagem}
            alt="Vida Selvagem"
          />
          <div className="absolute bg-gradient-to-t flex from-verde-950/80 group-hover:opacity-100 inset-0 items-end opacity-0 p-4 transition-opacity">
            <span className="text-white">Vida Selvagem</span>
          </div>
        </div>
      </div>
    </section>
  );
}
