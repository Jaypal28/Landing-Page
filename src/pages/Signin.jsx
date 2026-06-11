import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Building, Eye, Building2, BriefcaseBusiness } from 'lucide-react';
import ch from '../assets/ch.png';
import { Button } from '@/components/ui/button';

export default function Signin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
<div className="flex min-h-screen">  
    <div className="w-1/2 p-10 flex items-center justify-center bg-white text-slate-900">
        <div className="w-full max-w-md">           
            <div className="absolute top-10 justify-between flex items-center gap-2">
                <div className="flex items-center gap-2">
                <Briefcase style={{ width: '24px', height: '24px', color: 'blue' }} />
                    <span className="text-black font-bold text-xl">MyJob</span>
                </div>
            </div>

            
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold py-2">Sign in</h1>
                    <p className="text-gray-500 text-sm">
                        Don't have an account?
                      <Link to="/Createaccount" className="text-blue-500">Create Account</Link>
                    </p>
                </div>
            </div>

          
            <input
                type="email"
                placeholder="Email Address"
                className="border border-slate-200 rounded-md w-full p-2 mb-4 bg-white text-black placeholder:text-gray-400"/>

          
            <div className="flex items-center border border-slate-200 rounded-md px-3 mb-4 bg-white">

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-2 outline-none bg-white text-black placeholder:text-gray-400"/>
             <Eye onClick={() => setShowPassword(!showPassword)} style={{width:'12' ,height:'12' ,color:'gray'}}/>       
            </div>

            
      
            <div className="mb-4">
                <label className="text-sm">
                    <input type="checkbox"/>
                    Remember me
                </label>
                  <label className="text-sm float-right">  
                <Link to="/Forgetpassword" className="text-blue-500">
                        Forget Password
                   </Link>
                </label>
            </div>

         
            <Button
                onClick={() => navigate("/Verification")}
                variant='custom'>
                Sign In 
            </Button>

            <p className="text-center text-gray-500 mb-4">or</p>

          
            <div className="flex gap-3">
                <Button
                variant='Sigoogle'
                   >
                <svg className="w-6 h-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>                  
                    Sign in with Facebook
                </Button>
                <Button
                  variant='Sigoogle'  >
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>               
                    Sign in with Google
                </Button>
            </div>
        </div>
    </div>

    
    <div className=" w-1/2 relative overflow-hidden">
        <img
            src={ch}
            alt="Checkerboard"
            className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4, 26, 60, 0.5) 0%, rgba(4, 26, 60, 1) 100%)" }}>
          </div>    
        <div className="absolute top-0 -left-9 h-full w-16 bg-white -skew-x-3 origin-left"></div>

        
        <div className="absolute bottom-48 left-22 text-white z-10">

            <h1 className="text-4xl font-samibold">
                Find your dream job.
            </h1>
            <p className="text-4xl font-samibold">
               waiting for good employess.
            </p>
        </div>

    
        <div className="absolute bottom-12 left-22 flex gap-25 text-white z-10">
            <div className="text-center">
                <div className="bg-white/15 p-3 rounded-lg mb-4">
                   <BriefcaseBusiness/>
                </div>

                <h3 className="font-semibold">1,75,324</h3>
                <p className="text-xs">Live Jobs</p>
            </div>
            <div className="text-center">
                <div className="bg-white/15 p-3 rounded-lg mb-4">
                 <Building2 />
                </div>
                <h3 className="font-semibold">97,354</h3>
                <p className="text-xs">Companies</p>
            </div>

            <div className="text-center">
                <div className="bg-white/15 p-3 rounded-lg mb-4">
              < Briefcase/>
                </div>

                <h3 className="font-semibold">7,532</h3>
                <p className="text-xs">New Jobs</p>
            </div>
        </div>
    </div>
</div>
</>
  )
}
