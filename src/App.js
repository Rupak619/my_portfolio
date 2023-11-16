import NavBar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro'
import Skills  from "./components/Skills/skills";
import Works  from "./components/Works/works";
import Contact  from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
