import Navbar from "./component/NavbarPart";
import JumbotronPart from "./component/JumbotronPart";
import About from "./component/About";
import Project from "./component/Project";
// import Album from "./component/Album";
import Album from "./album/Album";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "animate.css/animate.min.css";
import "./App.css";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <JumbotronPart />
      <About />
      <Project />
      {/* <Album /> */}
      <Album />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
