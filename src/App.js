import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Posts from './Posts'; 
import About from './About'; 
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
			<Route exact path="/posts" component={Posts} />
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
