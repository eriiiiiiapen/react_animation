import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import Moving from './components/moving.jsx';
import Toggle from './components/toggle.jsx';

function App() {
  return (
    <div className="App">
        <Moving />
        <Toggle />
    </div>
  );
}

export default App;