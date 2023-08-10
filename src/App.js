import './App.css';
import Calculator from './components/Calculator';
import QuoteComponent from './components/quotes';

function App() {
  return (
    <div className="App">
      <div className="side-left">
        <QuoteComponent />
      </div>
      <div className="side-right">
        <h1>Simple Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
