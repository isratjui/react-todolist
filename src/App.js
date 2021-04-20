import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      </Router>
  );
}

export default App;
