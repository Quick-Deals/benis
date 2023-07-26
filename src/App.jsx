import { styled } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
// import PrimaryNav from "./components/PrimaryNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Meme from "./components/Meme";
import Footer from "./components/Footer";
import FunnyPics from "./components/FunnyPics";

function App() {
  return (
    <>
      <Navbar />
      {/* <PrimaryNav/> */}
      <Main>
        <Hero />
        <About />
        <Meme/>
        <FunnyPics/>
      </Main>
      <Footer/>
    </>
  );
}

export default App;

const Main = styled.main``;
