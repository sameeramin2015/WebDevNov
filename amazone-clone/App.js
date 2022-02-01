import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
