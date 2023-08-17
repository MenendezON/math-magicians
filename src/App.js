import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuoteComponent from './pages/Quote';
import Calculator from './pages/Calculator';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
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
