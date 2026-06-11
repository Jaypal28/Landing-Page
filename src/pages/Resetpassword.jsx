import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness,Eye } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function Resetpassword() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
<>
 <div className="w-full min-h-screen flex flex-col items-center justify-center p-10 gap-6 bg-white text-slate-900">

    <div className="flex items-center gap-2 mb-30">
     <BriefcaseBusiness style={{width:'23',height:'23', color:'Blue'}}/>
        <span className="text-black font-bold text-xl">MyJob</span>
    </div>

    <header className="flex flex-col items-center text-center max-w-md">
        <h1 className="text-3xl font-bold mb-3">
            Reset Password
        </h1>

        <p className="text-gray-500 text-sm">
            Make the password strong and easy to remember.
        </p>
    </header>

    
    <div className="w-full max-w-md">

                 <div className="flex items-center border border-slate-200 rounded-md px-3 mb-4 bg-white">

                <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full p-2 outline-none bg-white text-black placeholder:text-gray-400"/>

              <Eye onClick={() => setShowNewPassword(!showNewPassword)} style={{width:'12',height:'12', color:'gray'}}/>

            </div>

            </div>

    
     <div className="w-full max-w-md">

                 <div className="flex items-center border border-slate-200 rounded-md px-3 mb-4 bg-white">

                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    className="w-full p-2 outline-none bg-white text-black placeholder:text-gray-400"/>

                <Eye onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{whidth:'12',height:'12', color:'gray'}} />

            </div>

            </div>

   
    <Button
        onClick={() => navigate("/")}
      variant="custom2"
    >
        Reset Password 
    </Button>


</div>
</>
  )
}
