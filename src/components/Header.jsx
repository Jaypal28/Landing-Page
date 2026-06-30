import { BriefcaseBusiness, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer';

export default function Header() {
  return (
    <>
      <header className="relative w-full border-b border-white/5 bg-gray-900/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/20 text-teal-400">
              <BriefcaseBusiness strokeWidth={1.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">Job Portal</span>
          </div>
        
          <div className="hidden md:block ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="px-6 py-2 hover:text-teal-400 transition-colors">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/Jobs" className="px-6 py-2 hover:text-teal-400 transition-colors">Jobs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/AboutUs" className="px-6 py-2 hover:text-teal-400 transition-colors">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/Contact" className="px-6 py-2 hover:text-teal-400 transition-colors">Contact Us</Link>
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

          {/* Mobile menu trigger using shadcn UI Drawer */}
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-400 hover:text-white hover:bg-transparent cursor-pointer">
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gray-950/95 border-r border-white/5 text-white flex flex-col h-full rounded-r-2xl max-w-xs">
              <DrawerHeader className="border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/20 text-teal-400">
                    <BriefcaseBusiness strokeWidth={1.5} className="w-5 h-5" />
                  </div>
                  <DrawerTitle className="text-lg font-bold text-white font-display">Job Portal</DrawerTitle>
                </div>
                <DrawerDescription className="text-gray-400 text-xs text-left mt-1">
                  Navigate through our job search portal.
                </DrawerDescription>
              </DrawerHeader>
              
              <div className="flex flex-col gap-4 p-6 flex-1">
                <DrawerClose asChild>
                  <Link to="/" className="text-gray-300 hover:text-teal-400 py-2 font-medium text-base transition-colors">Home</Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to="/Jobs" className="text-gray-300 hover:text-teal-400 py-2 font-medium text-base transition-colors">Jobs</Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to="/AboutUs" className="text-gray-300 hover:text-teal-400 py-2 font-medium text-base transition-colors">About Us</Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to="/Contact" className="text-gray-300 hover:text-teal-400 py-2 font-medium text-base transition-colors">Contact Us</Link>
                </DrawerClose>
                
                <div className="h-px bg-white/5 my-2"></div>
                
                <div className="flex flex-col gap-3 mt-4">
                  <DrawerClose asChild>
                    <Button asChild variant="outline" className="w-full text-center border-teal-500/20 text-white hover:bg-teal-500/10 h-11">
                      <Link to="/Signin">Login</Link>
                    </Button>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Button asChild className="w-full text-center bg-teal-600 hover:bg-teal-700 text-white h-11">
                      <Link to="/Createaccount">Register</Link>
                    </Button>
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
}
