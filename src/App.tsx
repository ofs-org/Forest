import { Climate } from "./components/Climate";
import { Menu } from "./components/Menu";
import { Accommodations } from "./container/accommodations";
import { Events } from "./container/Events";
import { Experiences } from "./container/Experiences";
import { Introduction } from "./container/Introduction";

function App() {
  return (
    <>
      <body>
        <main className="bg-verde-800 font-sans h-full w-full">
          <header>
            <Climate />
            <Menu />
          </header>
          <section>
            <Introduction />
            <Accommodations />
            <Events />
            <Experiences />
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
