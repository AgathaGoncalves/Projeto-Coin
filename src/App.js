import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
    </Router>
  return (
    
    <Login/>
  );
}

export default App;
