export function Accommodations() {
  return (
    <section
      id="acomodacoes"
      className="container gap-8 grid lg:grid-cols-[2fr_3fr] pb-12 pt-16 sm:pb-16"
    >
      <div className="bg-[url('./src/assets/img/padrao.svg')] bg-contain bg-left-bottom bg-no-repeat content-end">
        <h2 className="font-serif lg:text-5xl mb-8 text-4xl text-white">
          Refúgio natural
        </h2>
        <ul className="*:flex *:gap-4 *:items-center gap-4 grid sm:text-xl text-gray-200">
          <li>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>
            Experimente a natureza de perto
          </li>
          <li>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>
            Conecte-se com a natureza
          </li>
          <li>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>
            Desconecte-se do digital
          </li>
          <li>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>{" "}
            Observe a vida selvagem
          </li>
          <li>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>Escolha
            a cidade preferida
          </li>
        </ul>
      </div>
      <div className="gap-4 grid grid-cols-[2fr_1fr] sm:gap-8">
        <div className="*:col-start-1 *:row-start-1 col-span-full grid">
          <img
            className="h-52 object-cover rounded-xl w-full"
            src="./src/assets/img/casa1.jpg"
            alt="Casa no  lago"
          />
          <span className="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase">
            ruby
          </span>
        </div>
        <div className="*:col-start-1 *:row-start-1 grid">
          <img
            className="object-cover rounded-xl size-full"
            src="./src/assets/img/casa2.jpg"
            alt="Casa no  lago"
          />
          <span className="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase">
            emerald
          </span>
        </div>
        <div className="*:col-start-1 *:row-start-1 grid">
          <img
            className="object-cover rounded-xl size-full"
            src="./src/assets/img/casa3.jpg"
            alt="Casa no  lago"
          />
          <span className="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase">
            saphire
          </span>
        </div>
      </div>
    </section>
  );
}
