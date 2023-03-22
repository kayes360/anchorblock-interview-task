import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn"; 
import SignUp from "./SignUp"; 
import Users from "./Users";
import Dashboard from "./Dashboard";

function App() { 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
       
    </div>
  )
}

export default App
