import "./App.css";
import Landing from "./components/Landing";
import Home from "./components/Home";
import DogsDetail from "./components/DogsDetails";
import Form from "./components/Form"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={()=><Home />} />
      <Route path="/dogs/:id" component={DogsDetail} />
      <Route path="/createDog" component={Form} />
    </div>
  );
}

export default App;
