import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DrinkDetail from './pages/DrinkDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drink/:id" element={<DrinkDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
