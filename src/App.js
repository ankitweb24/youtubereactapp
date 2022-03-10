import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Route, Switch, Redirect} from "react-router-dom";
import Nav from "./components/Nav";
import './index.css';
const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route component = {Error}/> */}
        <Redirect to = "/" />
      </Switch>
    </>
  );
};

export default App;

