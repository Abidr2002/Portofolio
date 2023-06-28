import Beranda from "./component/Beranda";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import Skill from "./component/Skill";
import SosMed from "./component/SosMed";
import Tentang from "./component/Tentang";

function App() {
  return (
    <div>
      <NavBar />
      <Beranda />
      <Tentang />
      <Portfolio />
      <Skill />

      <SosMed />
    </div>
  );
}

export default App;
