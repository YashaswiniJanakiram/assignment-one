import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import { SidebarData } from './components/SidebarData';
import SubMenu from './components/SubMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
function App() {
return (
	<Router>
	<Sidebar />
	<Switch>
		<Route path="/about-us" exact component={AboutUs} />
		<Route path="/about-us/aim" exact component={OurAim} />
		<Route path="/about-us/vision" exact component={OurVision} />
		<Route path="/services" exact component={Services} />
		<Route path="/services/services1" exact component={ServicesOne} />
		<Route path="/services/services2" exact component={ServicesTwo} />
		<Route path="/services/services3" exact component={ServicesThree} />
		<Route path="/contact" exact component={Contact} />
		<Route path="/events" exact component={Events} />
		<Route path="/events/events1" exact component={EventsOne} />
		<Route path="/events/events2" exact component={EventsTwo} />
		<Route path="/support" exact component={Support} />
	</Switch>
	</Router>
);
}

export default App;



{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/}
