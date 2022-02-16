import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Section from './Components/Section';
import Authors from './Components/Authors';
import Features from './Components/Features';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div id="container">
     <Navbar/>
     <Main/>
     <Section/>
     <Authors/>
     <Features/>
     <Footer/>
    </div>
  );
}

export default App;
