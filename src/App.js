import './App.css';
import Adventure from './components/Adventure';
import Companies from './components/Companies';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Nfts from './components/Nfts';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Adventure />
      <Nfts />
      <Footer />
    </div>
  );
}

export default App;
