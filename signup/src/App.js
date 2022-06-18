// import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Data from "./Data";
import Loggeduser from "./Loggeduser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="signup">
          <button>sign up</button>
        </Link>
        <br />
        <Link to="Data">
          <button>home</button>
        </Link>
        <Link to="log">
          <button>log in</button>
        </Link>
        {/* <Switch> */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/log" element={<Loggeduser />} />

        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}
