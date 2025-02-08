import Header from "./components/header";
import Hero from "./components/hero";
import PartnersBlock from "./components/partnersBlock";
import Services from "./components/services";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <PartnersBlock/>
      <Services/>
    </div>
  );
}

export default App;
