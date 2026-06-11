import { Link, useNavigate, useLocation } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from '@/components/ui/button';
export default function Verification() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "emailaddress@gmail.com";
  return(

    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-10 gap-6 bg-white text-slate-900">

    <div className="flex items-center gap-2 mb-30">
       <BriefcaseBusiness style={{width:'24',height:"24",color:'blue'}}/>
        <span className="text-black font-bold text-xl">MyJob</span>
    </div>

    
    <header className="flex flex-col items-center text-center max-w-md">
        <h1 className="text-3xl font-bold mb-3">
            Email Verification
        </h1>

        <p className="text-gray-500 text-sm">
            We've sent a verification email to
            <b className="text-black"> {email}</b> to verify your email
            address and activate your account.
        </p>
    </header>

    <div className="w-full max-w-md">
        <input
            type="text"
            placeholder="Enter the code"
            className="w-full border border-slate-200 bg-white text-black placeholder:text-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <Button
        onClick={() => navigate("/Resetpassword")}
       variant="custom2"
    >
        Verify Email
    </Button>

    
    <div className="mb-4">

                <p className="text-gray-500 text-sm">
                    Didn't receive any code?
                    <Link to="#" className="text-blue-500">
                        Resend
                    </Link>
                </p>

    </div>
    </div>
    </>
  )
}
