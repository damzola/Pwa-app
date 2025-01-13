import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from './home';
import Book from "./module/Books";
import Heading from "./navigation/navbar";
function App() {
  return (
    <div>
      <Router>
      
      <Heading/>
    
      <Routes>      
      <Route path="/" Component={Home}></Route>
      <Route path="/book" Component={Book}></Route>
      </Routes>
    </Router>

    </div>
  
  );
}

export default App;
