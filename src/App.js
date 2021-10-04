import './App.css';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Partners from './components/Partners/Partners';
import NotFound from './components/NotFound/NotFound';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App main">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/partners">
            <Partners></Partners>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
