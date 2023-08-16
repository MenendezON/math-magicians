import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
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
              <NavLink
                to="/"
                className={({ isPending }) => (isPending ? 'active' : 'pending')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculator"
                className={({ isPending }) => (isPending ? 'active' : 'pending')}
              >
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quote"
                className={({ isPending }) => (isPending ? 'active' : 'pending')}
              >
                Quote
              </NavLink>
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
