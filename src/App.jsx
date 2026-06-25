import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Signin from './pages/Signin';
import Createaccount from './pages/Createaccount';
import Forgetpassword from './pages/Forgetpassword';
import Resetpassword from './pages/Resetpassword';
import Verification from './pages/Verification';
import Jobs from './pages/Jobs';
import Jobdetial from './pages/Jobdetial';

function App() {
  return (
    <>     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
          <Route path="/Signin" element={<Signin />} />
        <Route path="/Createaccount" element={<Createaccount />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path ="/Jobs"  element={<Jobs/>}/>
        < Route path="/Jobdetial" element={<Jobdetial/>}/>    
      </Routes>  
    </BrowserRouter>  
    </>
  )
}

export default App
