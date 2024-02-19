import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Weather /> 
    </div>
  );
}

export default App;
