import RouterComponent from "./config/router"
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";



function App() {
  return (
    <div className="App h-[100vh] w-full ">
      <Router>
      <RouterComponent/>
      </Router>
    </div>
  );
}

export default App;
