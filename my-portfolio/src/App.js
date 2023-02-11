import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Resume from "./Resume/Resume.jsx";
import PortfolioDisplay from "./PortfolioDisplay/PortfolioDisplay.jsx";
import PersonalPortfolio from "./Projects/PersonalPortfolio/PersonalPortfolio.jsx";
import TiktokRedesign from "./Projects/TiktokRedesign/TiktokRedesign.jsx";
import ChessApp from "./Projects/ChessApp/ChessApp.jsx";
import NotesApp from "./Projects/NotesApp/NotesApp.jsx";
import CaseConverter from "./Projects/CaseConverter/CaseConverter.jsx";
import BlockchainSite from "./Projects/BlockchainSite/BlockchainSite.jsx";
import ImageGenerator from "./Projects/ImageGenerator/ImageGenerator.jsx";
import ChromeRedesignConcept from "./Projects/ChromeRedesignConcept/ChromeRedesignConcept";
import BankApp from "./Projects/BankApp/BankApp.jsx";
import BlogSite from "./Projects/BlogSite/BlogSite.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import WOW from "wowjs";
import { useEffect } from "react";

/**
 * Project1: personal portfolio,
 * Project2: Tiktok redesign,
 * Project3: Chess,
 * Project4: NotesApp,
 * Project5: CaseConverter
 * Project6: ChromeRedesign
 * Project7: Blockchain website for web3,
 * Project8: OpenAI Image Generator
 * Project9: BankApp
 * Project10: Blog Site
 * **/

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio-projects" element={<PortfolioDisplay />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/projects/personal-portfolio"
          element={<PersonalPortfolio />}
        />
        <Route path="/projects/tiktok-redesign" element={<TiktokRedesign />} />
        <Route path="/projects/chess-app" element={<ChessApp />} />
        <Route path="/projects/notes-app" element={<NotesApp />} />
        <Route path="/projects/case-converter" element={<CaseConverter />} />
        <Route
          path="/projects/chrome-redesign-concept"
          element={<ChromeRedesignConcept />}
        />
        <Route path="/projects/blockchain-site" element={<BlockchainSite />} />
        <Route path="/projects/image-generator" element={<ImageGenerator />} />
        <Route path="/projects/bank-app" element={<BankApp />} />
        <Route path="/projects/blog-site" element={<BlogSite />} />
      </Route>
    </>
  ),
  { basename: "/" }
);
function App() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);
  return (
    <>
      <div className="wrapper">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
