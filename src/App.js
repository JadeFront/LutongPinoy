import './App.css';
import Recipe from './Components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Menubar from './Components/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Home/>
      <About/>
      <Recipe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
