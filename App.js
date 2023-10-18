import { BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Dasbord from "./components/Dasbord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = { <Login/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route path="/dashboard" element = {<><Navbar/><Dasbord/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
