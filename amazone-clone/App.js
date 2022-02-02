import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Header from "./Header";
import App1 from "./App.css";
import Home from "./Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
