import { Climate } from "./components/Climate";
import { Menu } from "./components/Menu";
import { Accommodations } from "./container/accommodations";
import Contact from "./container/Contact";
import { Events } from "./container/Events";
import { Experiences } from "./container/Experiences";
import { Introduction } from "./container/Introduction";
import { NaturalCycle } from "./container/NaturalCycle";

function App() {
  return (
    <>
      <>
        <main className="bg-verde-800 font-sans h-full w-full">
          <header>
            <Climate />
            <Menu />
          </header>
          <>
            <Introduction />
            <Accommodations />
            <Events />
            <Experiences />
            <NaturalCycle />
            <Contact />
          </>
        </main>
      </>
    </>
  );
}
export default App;
