import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main';
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
              <Header />
          </Switch>
          <Switch>
            <Main />
          </Switch>
          <Switch>
            <Footer />
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
