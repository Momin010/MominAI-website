import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Spec from './pages/Spec';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/spec" element={<Spec />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
