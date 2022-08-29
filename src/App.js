import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Landing } from "./components/Landing/Landing";
import { Marketplace } from "./components/Marketplace/Marketplace";
import { RunIt } from "./components/Marketplace/Forms/RunIt";
import { Details } from "./components/Marketplace/Details/Details";
import { CheckOut } from "./components/Marketplace/CheckOut/CheckOut";
function App() {
  // const [user, setUser] = useState(null);

  // if (!user) {
  //   return <Login />;
  // }

  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/marketplace/runit" element={<RunIt />} />
            <Route path="/marketplace/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
