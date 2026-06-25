import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import AuthSidebar from '../components/AuthSidebar';

export default function Verification() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const email = params.get("email") || "emailaddress@gmail.com";
  
  return(
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 px-6 py-12 sm:p-10 md:p-16 flex items-center justify-center bg-white text-slate-900">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-8">
               <BriefcaseBusiness strokeWidth={1.5} className="w-6 h-6 text-teal-600" />
               <span className="text-black font-bold text-xl">MyJob</span>
            </div>

            <header className="flex flex-col items-start text-left w-full mb-6">
                <h1 className="text-3xl font-bold mb-3">
                    Email Verification
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed wrap-break-word">
                    We've sent a verification email to 
                    <span className="text-black font-bold break-all"> {email}</span> to verify your email address and activate your account.
                </p>
            </header>

            <div className="w-full mb-4">
                <Input
                    type="text"
                    placeholder="Enter the code"
                    className="w-full text-center tracking-widest text-lg py-6 focus:ring-2 focus:ring-teal-500"
                />
            </div>

            <Button
                onClick={() => { window.location.href = "/Resetpassword"; }}
                variant="custom2"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-6 rounded-lg transition"
            >
                Verify Email
            </Button>

            <div className="mt-6 space-y-2 text-left">
                <p className="text-gray-500 text-sm">
                    Didn't receive any code?
                    <Link to="#" className="text-teal-600 hover:underline ml-1">
                        Resend
                    </Link>
                </p>
                <p className="text-gray-500 text-sm">
                    Already verified or want to cancel?
                    <Link to="/Signin" className="text-teal-600 hover:underline font-semibold ml-1">
                        Go back to Sign In
                    </Link>
                </p>
            </div>
          </div>
        </div>

        <AuthSidebar 
          title="Check your email" 
          subtitle="to activate your profile." 
        />
      </div>
    </>
  )
}
