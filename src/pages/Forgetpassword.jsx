import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import AuthSidebar from '../components/AuthSidebar';
import Header from "@/components/Header";

export default function Forgetpassword() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between">
      <Header />
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-16  flex items-center justify-center bg-white text-slate-900">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <div className="flex items-center gap-2">
                
                 <span className="text-black font-bold text-xl">MyJob</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold py-2">Forget Password</h1>
                <p className="text-gray-500 text-sm">
                  Go back to
                  <Link to="/Signin" className="text-blue-500 ml-1 hover:underline">Sign In</Link>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Don't have account
                  <Link to="/Createaccount" className="text-blue-500 ml-1 hover:underline">Create Account</Link>     
                </p>
              </div>
            </div>

            <Input
              type="email"
              placeholder="Email Address"
              className=" p-2 "
            />

            <Button 
              onClick={() => { window.location.href = "/Resetpassword"; }}
              variant="custom3"
            >
              Reset Password
            </Button>

            <p className="text-center text-gray-500 mb-4">or</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button variant="Sigoogle">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span className="ml-2 font-medium text-slate-800">Sign up with Google</span>
              </Button>

              <Button variant="Sigoogle">
                <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-2 font-medium text-slate-800">Sign up with Facebook</span>
              </Button>
            </div>

          </div>
        </div>

        <AuthSidebar 
          title="Over 1,75,324 candidates" 
          subtitle="waiting for good employees." 
        />
      </div>
    </div>
  );
}
