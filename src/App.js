import './App.css';
import Day from './components/Day';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather App
      </header>
      <section className="day-list">
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      </section>
    </div>
  );
}

export default App;
