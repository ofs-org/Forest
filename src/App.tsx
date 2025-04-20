import { Climate } from "./components/Climate";
import { Menu } from "./components/Menu";
import { Accommodations } from "./container/accommodations";
import { Introduction } from "./container/Introduction";

function App() {
  return (
    <>
      <main className="bg-verde-800 font-sans h-full w-full">
        <header>
          <Climate />
          <Menu />
        </header>
        <section>
          <Introduction />
          <Accommodations />
        </section>
      </main>
    </>
  );
}

export default App;
