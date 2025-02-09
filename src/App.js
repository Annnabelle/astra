import Cases from "./components/cases";
import Header from "./components/header";
import Hero from "./components/hero";
import PartnersBlock from "./components/partnersBlock";
import Services from "./components/services";
import StaticBlock from "./components/static";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <PartnersBlock/>
      <Services/>
      <StaticBlock/>
      <Cases/>
    </div>
  );
}

export default App;
