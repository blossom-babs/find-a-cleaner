
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import {About, FAC, Home, Signup} from "./pages"
import {Nav} from "./components"

const App = () => {
  return (
    <Router>
    <Nav/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/about"><About/></Route>
      <Route exact path="/fac"><FAC/></Route>
      <Route exact path="/signin"><Signup/></Route>
    </Switch>
    </Router>
  );
}

export default App;
