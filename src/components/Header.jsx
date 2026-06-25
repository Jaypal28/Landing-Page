import { BriefcaseBusiness, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <>
      {/* Checkbox for mobile menu toggle (stateless/hookless) */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      <header className="relative w-full border-b border-white/5 bg-gray-900/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/20 text-teal-400">
              <BriefcaseBusiness strokeWidth={1.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">Job Portal</span>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="px-6 py-2 hover:text-teal-400 transition-colors">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/Jobs" className="px-6 py-2 hover:text-teal-400 transition-colors">Job</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="#" className="px-6 py-2 hover:text-teal-400 transition-colors">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="#" className="px-6 py-2 hover:text-teal-400 transition-colors">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
   
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="outline">
              <Link to="/Signin">Login</Link>
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white font-medium">
              <Link to="/Createaccount">Register</Link>
            </Button>
          </div>

          {/* Toggle label instead of button with click state */}
          <label 
            htmlFor="mobile-menu-toggle"
            className="block md:hidden p-2 text-gray-400 hover:text-white cursor-pointer select-none"
          >
            <div className="peer-checked-hide">
              <Menu strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div className="peer-checked-show hidden">
              <X strokeWidth={1.5} className="w-6 h-6" />
            </div>
          </label>
        </div>
        

        {/* Mobile menu dropdown using CSS selector */}
        <div className="mobile-menu-dropdown hidden md:hidden border-t border-white/5 bg-gray-900/95 px-6 py-4 flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <Link to="/" className="text-gray-300 hover:text-teal-400 py-2 font-medium">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-teal-400 py-2 font-medium">Job</Link>
          <Link to="/services" className="text-gray-300 hover:text-teal-400 py-2 font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-300 hover:text-teal-400 py-2 font-medium">Contact Us</Link>
          <div className="h-px bg-white/5 my-2"></div>
          <div className="flex flex-col gap-3">
            <Button asChild variant="outline" className="w-full text-center border-teal-500/20 text-white hover:bg-teal-500/10">
              <Link to="/Signin">Login</Link>
            </Button>
            <Button asChild className="w-full text-center bg-teal-600 hover:bg-teal-700 text-white">
              <Link to="/Createaccount">Register</Link>
            </Button>
          </div>
        </div>
        
      </header>
    </>
  );
}
