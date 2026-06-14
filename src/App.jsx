// import Home from './components/Home';
import './App.css'
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Resetpassword from './pages/Resetpassword';
// import Createaccount from './pages/Createaccount';
// import Forgetpassword from './pages/Forgetpassword';
// import Verification from './pages/Verification';
// import Signin from "./pages/Signin";
import Job from "./pages/Job";

function App() {
  return (
    <>
       
   {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
          <Route path="/Signin" element={<Signin />} />
        <Route path="/Createaccount" element={<Createaccount />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/Verification" element={<Verification />} />
      </Routes>
    </BrowserRouter> */}

    <Job/>
  
    </>
  )
}

export default App
