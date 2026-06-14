import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness,Eye } from "lucide-react";
import { Button } from '@/components/ui/button';
import  { Input } from "@/components/ui/input";

export default function Resetpassword() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
<>
 <div className="w-full min-h-screen flex flex-col items-center justify-center p-10 gap-6 bg-white text-slate-900">

     <div className="flex items-center gap-2 mb-30">
      <BriefcaseBusiness style={{width:'23px',height:'23px', color:'blue'}}/>
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

                 <div className="flex items-center   px-3 mb-4 ">

                 <Input
                    type="password"
                    placeholder="New Password"
                   />

             

            </div>

            </div>

    
     <div className="w-full max-w-md">

                 <div className=" items-center px-3 mb-4">

                 <Input
                    type= "password"
                    placeholder="Confirm New Password"
                    />


            </div>

            </div>

   
    <Button
        onClick={() => navigate("/Signin")}
      variant="custom2"
    >
        Reset Password 
    </Button>


</div>
</>
  )
}
