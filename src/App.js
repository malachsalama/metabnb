import './App.css';
import Adventure from './components/Adventure';
import Companies from './components/Companies';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Adventure />
    </div>
  );
}

export default App;
