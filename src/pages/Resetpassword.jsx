import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";


export default function Resetpassword() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-16 text-slate-900">
    <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-8">
              
               <span className="text-black font-bold text-xl">MyJob</span>
            </div>

            <header className="flex flex-col items-start text-left w-full mb-6">
                <h1 className="text-3xl font-bold mb-3">
                    Reset Password
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Make the password strong and easy to remember.
                </p>
            </header>

            <div className="w-full mb-6 space-y-4">
                 <Input
                    type="password"
                    placeholder="New Password"
                    className="w-full py-6"
                   />
                 <Input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full py-6"
                    />
            </div>

            <Button
                onClick={() => { window.location.href = "/Signin"; }}
                variant="custom3"         
            >
                Reset Password 
            </Button>

            <div className="mt-6 text-left">
                <p className="text-gray-500 text-sm">
                    Remembered your password?
                    <Link to="/Signin" className="text-blue-600 hover:underline font-semibold ml-1">
                        Go back to Sign In
                    </Link>
                </p>
            </div>
          </div>
        </div>      
    </div>
  );
}
