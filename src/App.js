
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import {About, Fac, Home, Signup} from "./pages"
import {Nav} from "./components"

const App = () => {
  return (
    <Router>
    <Nav/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/about"><About/></Route>
      <Route exact path="/fac"><Fac/></Route>
      <Route exact path="/signin"><Signup/></Route>
    </Switch>
    </Router>
  );
}

export default App;
