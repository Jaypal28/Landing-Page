import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import AuthSidebar from '../components/AuthSidebar';

export default function Resetpassword() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 px-6 py-12 sm:p-10 md:p-16 flex items-center justify-center bg-white text-slate-900">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-8">
               <BriefcaseBusiness strokeWidth={1.5} className="w-6 h-6 text-blue-600" />
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
                variant="custom2"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 rounded-lg transition"
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

        <AuthSidebar 
          title="Reset your credentials" 
          subtitle="to keep your profile safe." 
        />
      </div>
    </>
  );
}
