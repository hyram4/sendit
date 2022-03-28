import Login from './Components/Login'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'
import Landingpage from './Components/landingpage'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Forgotpassword from './Components/Forgotpassword'
import Createparcel from './Components/Createparcel'
import Home from './Components/Homepage'
import History from './Components/History'
import Trackparcel from './Components/Trackparcel'
function App() {
  return (
    <div className="App">


    <BrowserRouter> 
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
       <Route  path='/Createparcel' element={<Createparcel/>}/>
       <Route  path='/History' element={<History/>}/>
       <Route  path='/Trackparcel' element={<Trackparcel/>}/>
       <Route  path='/Logout' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  <BrowserRouter>
  <Routes>
   
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Login/Signup' element={<Signup/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Signup/Login' element={<Login/>}/>
    <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
    <Route path='/Forgotpassword/Login' element={<Login/>}/>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
