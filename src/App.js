import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About'; 
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  ReactGA.initialize('UA-160710711-1');
  ReactGA.pageview('/homepage');  
  
  return (
    <div> 
      <Router> 
        <Switch>
            <Route exact path="/" component={Home} /> 
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} /> 
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
