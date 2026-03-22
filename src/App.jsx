import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Spec from './pages/Spec';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import ThankYou from './pages/ThankYou';
import PitchDeck from './pages/PitchDeck';
import Placeholder from './pages/Placeholder';
import AgentRuntime from './pages/AgentRuntime';
import Governance from './pages/Governance';
import Documentation from './pages/Documentation';
import ApiReference from './pages/ApiReference';
import Community from './pages/Community';
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
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/pitch-deck" element={<PitchDeck />} />
          <Route path="/agent-runtime" element={<AgentRuntime />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/security" element={<Documentation />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
