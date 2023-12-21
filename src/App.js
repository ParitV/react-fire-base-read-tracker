import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReadTracker } from "./pages/read-tracker";
import { Auth } from "./pages/auth/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/read-tracker" exact element={<ReadTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
