import Home from './Home';
import Projects from './Projects';
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
            <Route exact path="/projects" component={Projects} /> 
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
