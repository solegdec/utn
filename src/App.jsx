import './App.css';
import Public from './Routes/Public';
import Menu from "./Components/Menu"
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu />
        <div id="wrapper">
          <Public />
        </div> 
         
    </Router>
  );
}

export default App;
