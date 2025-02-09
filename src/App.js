import BlockLevelUp from "./components/blockLevelUp";
import Cases from "./components/cases";
import ContactUs from "./components/contactUs";
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
      <BlockLevelUp/>
      <ContactUs/>
    </div>
  );
}

export default App;
