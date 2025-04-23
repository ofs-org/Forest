export function Events() {
  return (
    <section
      id="eventos"
      className="bg-verde-900 pb-12 py-12 sm:pb-16 sm:py-16"
    >
      <div className="container">
        <p className="mb-4 text-center text-sm text-verde-200 tracking-widest uppercase">
          CONECTE-SE COM A NATUREZA
        </p>
        <h2 className="font-serif max-w-w-screen-md mb-8 mx-auto sm:text-6xl text-4xl text-balance text-center text-white">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h2>
        <div className="gap-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] overflow-x-auto pb-4 sm:gap-8 snap-mandatory snap-x">
          <div className="bg-verde-800 gap-4 grid p-6 rounded-xl sm:p-8 snap-center">
            <h3 className="font-serif text-2xl text-verde-300">Lua Nova</h3>
            <div className="text-white">
              <p className="font-serif text-5xl">23</p>
              <p className="text-xl">Março 2049</p>
            </div>
            <p className="text-balance text-gray-300">
              Melhor período para observação astronômica. O céu estará claro e
              as estrelas visíveis
            </p>
            <a
              className="bg-verde-400 inline-block justify-self-start px-4 py-2 rounded-full self-end text-verde-900"
              href="#contato"
            >
              Reservar 23/03
            </a>
          </div>
          <div className="bg-verde-800 gap-4 grid p-6 rounded-xl sm:p-8 snap-center">
            <h3 className="font-serif text-2xl text-verde-300">
              Aurora Boreal
            </h3>
            <div className="text-white">
              <p className="font-serif text-5xl">15</p>
              <p className="text-xl">Abril 2049</p>
            </div>
            <p className="text-balance text-gray-300">
              Melhor período para observação da Aurora Boreal, o céu estará
              iluminado pelas estrelas.
            </p>
            <a
              className="bg-verde-400 inline-block justify-self-start px-4 py-2 rounded-full self-end text-verde-900"
              href="#contato"
            >
              Reservar 15/04
            </a>
          </div>
          <div className="bg-verde-800 gap-4 grid p-6 rounded-xl sm:p-8 snap-center">
            <h3 className="font-serif text-2xl text-verde-300">
              Chuva de Meteoros
            </h3>
            <div className="text-white">
              <p className="font-serif text-5xl">18</p>
              <p className="text-xl">Agosto 2049</p>
            </div>
            <p className="text-balance text-gray-300">
              Melhor período para observação da Aurora de Meteoros, o céu estará
              iluminado pelas estrelas.
            </p>
            <a
              className="bg-verde-400 inline-block justify-self-start px-4 py-2 rounded-full self-end text-verde-900"
              href="#contato"
            >
              Reservar 18/08
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
