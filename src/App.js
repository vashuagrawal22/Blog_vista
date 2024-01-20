import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import SinglePost from "./components/singlepost/SinglePost";
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,
          //  Switch,
           Routes, 
           Route, Link } from "react-router-dom";

function App() {
  return (
   <Router>
   <Topbar/>
   <Routes>
    <Route exact path='/home' Component={Home}>
      {/* <Home/> */}
    </Route>

    <Route exact path='/register' Component={Register}>
      {/* <Register/> */}
    </Route>
   
    <Route exact path='/login' Component={Login}>
      {/* <Login/> */}
    </Route>

    <Route exact path='/write' Component={Write}>
      {/* <Write/> */}
    </Route>

    <Route exact path='/settings' Component={Settings}>
      {/* <Settings/> */}
    </Route>
    
    <Route exact path='/post/:postId' Component={Single}>
      {/* <Single/> */}
    </Route>
   </Routes>
   </Router>
  );
}

export default App;
