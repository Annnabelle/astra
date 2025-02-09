import BlockLevelUp from "./components/blockLevelUp";
import Cases from "./components/cases";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import FooterContactUs from "./components/footer/footerContactUs";
import Header from "./components/header";
import Hero from "./components/hero";
import PartnersBlock from "./components/partnersBlock";
import Services from "./components/services";
import StaticBlock from "./components/static";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header/>
      <Hero/>
      <PartnersBlock/>
      <Services/>
      <StaticBlock/>
      <Cases/>
      <BlockLevelUp/>
      <ContactUs/>
      <Footer/>
      <FooterContactUs/>
    </div>
  );
}

export default App;
