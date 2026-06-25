import { BriefcaseBusiness } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input} from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full relative z-10 bg-black py-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col justify-between px-6 md:px-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1 gap-6 md:gap-8">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 ">
              <BriefcaseBusiness strokeWidth={1.5} className="w-6 h-6" />
              <h1 className="font-bold text-xl tracking-wide text-white">Job Portal</h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quis enim pellentesque viverra tellus eget malesuada facilisic. Congue nibh vivamus aliquet nunc mauris d...
            </p>
          </div>

          <div className="text-left">
            <h1 className="font-bold text-lg mb-3 pb-1">Company</h1>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="hover:text-white cursor-pointer transition-colors">About Us</p>
              <p className="hover:text-white cursor-pointer transition-colors">Our Team</p>
              <p className="hover:text-white cursor-pointer transition-colors">Partners</p>
              <p className="hover:text-white cursor-pointer transition-colors">For Candidates</p>
              <p className="hover:text-white cursor-pointer transition-colors">Employers</p>
            </div>
          </div>

          <div className="text-left">
            <h1 className="font-bold text-lg mb-3 pb-1">Job Categories</h1>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="hover:text-white cursor-pointer transition-colors">Telecommunication</p>
              <p className="hover:text-white cursor-pointer transition-colors">Hotels & Tourism</p>
              <p className="hover:text-white cursor-pointer transition-colors">Construction</p>
              <p className="hover:text-white cursor-pointer transition-colors">Education</p>
              <p className="hover:text-white cursor-pointer transition-colors">Financial Services</p>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <h1 className="font-bold text-lg">Newsletter</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Eu nunc pretium vitage platea. Non netus elementum vulputate
            </p>

          <Input type="email"

          placeholder="Email Address">
          </Input>
            <Button variant="custom" className="bg-teal-600 hover:bg-teal-700">
              Subscribe now
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-gray-500 border-t border-white/5">
          <p>© Copyright Job Portal. Developed by figmagrou.com</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors">Terms-Privacy</Link>
            <Link className="hover:text-white transition-colors">Terms and condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
