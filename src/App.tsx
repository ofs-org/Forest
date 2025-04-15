import { Climate } from "./components/Climate";
import { Introduction } from "./components/Introduction";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <main className="bg-verde-800 font-sans h-full w-full">
        <Climate />
        <Menu />
        <Introduction />
      </main>
    </>
  );
}

export default App;
