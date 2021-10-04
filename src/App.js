
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        {/* Router start */}
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        {/* Router End */}
      </div>
    </div>
  );
}

export default App;
