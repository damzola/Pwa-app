import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from './home';
import Old from "./module/old";
import Latest from "./module/latest";
import Book from "./module/Books";
import Heading from "./navigation/navbar";
function App() {
  return (
    <div>
      <Heading/>
    <Router>
      <Routes>      
      <Route path="/" Component={Home}></Route>
      <Route path="/old" Component={Old}></Route>
      <Route path="/latest" Component={Latest}></Route>
      <Route path="/book" Component={Book}></Route>
      </Routes>
    </Router>

    </div>
  
  );
}

export default App;
