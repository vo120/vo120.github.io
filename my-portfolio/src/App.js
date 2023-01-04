import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Resume from "./Resume/Resume.jsx";
import PortfolioDisplay from "./PortfolioDisplay/PortfolioDisplay.jsx";
import Project1 from "./Projects/Project1/Project1.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioDisplay />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/project1" element={<Project1 />} />
      </Route>
    </>
  )
);
function App() {
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
{
  /*
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
</div>*/
}
