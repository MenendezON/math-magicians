import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import QuoteComponent from './pages/Quote';
import Calculator from './pages/Calculator';

function App() {
  return (
    <>
      <header>
        <div>
          Math Magicians
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<QuoteComponent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
