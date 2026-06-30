import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";


export default function Verification() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const email = params.get("email") || "emailaddress@gmail.com";
  
  return(
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-white px-4 sm:px-6 md:px-10 lg:px-16">
  <div className="w-full max-w-md">
    


          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-8">
          
               <span className="text-black font-bold text-xl">MyJob</span>
            </div>

            <header className="flex flex-col items-start text-left w-full mb-6">
                <h1 className="text-3xl font-bold mb-3">
                    Email Verification
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed break-words">
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
                variant="custom"
              
            >
                Verify Email
            </Button>

            <div className="mt-6 space-y-2 text-left">
                <p className="text-gray-500 text-sm">
                    Didn't receive any code?
                    <Link to="#" className="text-blue-600 hover:underline ml-1">
                        Resend
                    </Link>
                </p>
                <p className="text-gray-500 text-sm">
                    Already verified or want to cancel?
                    <Link to="/Signin" className="text-blue-600 hover:underline font-semibold ml-1">
                        Go back to Sign In
                    </Link>
                </p>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  )
}
