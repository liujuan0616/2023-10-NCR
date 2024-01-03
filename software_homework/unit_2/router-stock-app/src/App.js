
import './App.css';
import data from './data.js'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock.js';
import Nav from './components/Nav';


function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock data={data}/>} />
        <Route path="/stocks" element={<Dashboard data={data}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
