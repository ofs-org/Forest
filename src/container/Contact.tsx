export default function Contact() {
  return (
    <section
      id="contato"
      className="asm:pt-16 container gap-8 grid lg:grid-cols-2 pb-12 pt-12 sm:pb-16"
    >
      <div>
        <h1 className="font-serif mb-4 text-4xl text-verde-300">
          Nossos Contatos
        </h1>
        <p className="mb-8 text-balance text-gray-200">
          Tem interesse em passar ma temporada no Forest? Entre e contato com a
          gente por telefone e e-mail
        </p>
        <div className="gap-4 grid">
          <div>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>
            <h2 className="font-serif mb-2 text-2xl text-verde-300">Base</h2>
            <p className="text-gray-300">
              Rua da Mata, 123, Floresta Nacional - RJ
            </p>
          </div>
          <div>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>
            <h2 className="font-serif mb-2 text-2xl text-verde-300">Email</h2>
            <p className="text-gray-300">oliveira.frontend@gmail.com</p>
          </div>
          <div>
            <span className="bg-verde-400 h-0.5 inline-block w-6"></span>
            <h2 className="font-serif mb-2 text-2xl text-verde-300">
              Telefone
            </h2>
            <p className="text-gray-300">(11)- 99999-9999</p>
          </div>
        </div>
      </div>
      <form
        action=""
        className="bg-verde-900 gap-4 grid lg:p-8 p-4 rounded-xl shadow-2xl"
      >
        <div className="gap-1 grid">
          <label htmlFor="nome" className="text-white">
            Nome
          </label>
          <input
            placeholder="Nome"
            className="bg-verde-800 border-2 border-verde-800 focus:border-verde-900 focus:outline-none focus:ring-2 focus:ring-verde-400 p-2 placeholder:text-verde-900 rounded-md text-white"
            type="text"
            id="nome"
          />
        </div>
        <div className="gap-4 grid sm:grid-cols-2">
          <div className="gap-1 grid">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              placeholder="email"
              className="bg-verde-800 border-2 border-verde-800 focus:border-verde-900 focus:outline-none focus:ring-2 focus:ring-verde-400 p-2 placeholder:text-verde-900 rounded-md text-white"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="gap-1 grid">
            <label htmlFor="telefone" className="text-white">
              Telefone
            </label>
            <input
              placeholder="(11)99999-9999"
              id="telefone"
              name="telefone"
              className="bg-verde-800 border-2 border-verde-800 focus:border-verde-900 focus:outline-none focus:ring-2 focus:ring-verde-400 p-2 placeholder:text-verde-900 rounded-md text-white"
              type="text"
            />
          </div>
        </div>
        <div className="gap-1 grid">
          <label htmlFor="mensagem" className="text-white">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            className="bg-verde-800 border-2 border-verde-800 focus:border-verde-900 focus:outline-none focus:ring-2 focus:ring-verde-400 p-2 placeholder:text-verde-900 resize-none rounded-md text-white"
            rows={5}
          ></textarea>
        </div>
        <button className="bg-verde-400 cursor-pointer inline-block place-self-start px-4 py-2 rounded-full text-verde-900">
          Enviar Email
        </button>
      </form>
    </section>
  );
}
