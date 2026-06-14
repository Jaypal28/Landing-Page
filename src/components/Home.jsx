import {BriefcaseBusiness,Building,Users,Search,MapPin,TextCursorInput} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import backgroundImage from '../assets/image.png';
import {Link} from 'react-router-dom';
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Home() {
  return (


    <div className="relative min-h-screen bg-black-300 text-white  font-sans flex flex-col justify-between">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>


      <div className="absolute rounded-full  blur-[150px] "></div>
      <div className="absolute pt-[10%] w-[500px] h-[500px] rounded-full blur-[150px] "></div>
      <div className="absolute py-[30%] w-[400px] h-[400px] blur-[120px] "></div>

      
      <header className="w-full border-b border-white/5 bg-gray-850 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/20 text-teal-400">
            <BriefcaseBusiness />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">Job Portal</span>
          </div>

          {/* Navigation links*/}
         {/* <nav className="">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      

        
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link to="#" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav> */}

    <div  >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild >
              <Link to="/" className='px-12 hover:bg-teal-600 '>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className='px-12 hover:bg-teal-600'>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/services" className=' px-12 hover:bg-teal-600'>Services</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" className='px-12 hover:bg-teal-600'>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
   


          
          <div className="flex items-center gap-5">
            {/* <button className="text-sm font-semibold text-gray-300 hover:text-white ">
              Login
            </button>  */}
            <Button >
             <Link to="/Signin" >Login </Link>
            </Button>
           
            
            {/* <button className="px-5 py-2.5 text-sm font-semibold bg-teal-400 hover:bg-teal-500 text-white rounded-lg   ">
              Register
            </button> */}
            <Button>
              <Link to="/Createaccount">Register</Link></Button>
          </div>
        </div>
      </header>

      
      <main className="relative  flex-grow flex flex-col items-center justify-center px-6 py-16 text-center max-w-7xl mx-auto w-full">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-4xl font-display">
          Find Your Dream Job <span className="text-teal-300">Today!</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6  text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl font-light">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        
        <form  className="mt-9  w-full max-w-4xl bg-gray-400 rounded-2xl md:bg-white/5  
        md:rounded-2xl sm:rounded-2xl  border border-white flex flex-col md:flex-row items-center gap-2 ">         
          <div className="w-full md:flex-1 sm:flex-2 flex items-center px-4 py-2 border-b border-white/10 md:border-b-0  border-gray-100">
            <Search />
            {/* <input
              type="text"
              name="jobQuery"
              placeholder="Job Title or Company"
              className="w-full bg-transparent text-white placeholder-gray-500 font-medium  text-sm py-1"
            /> */}
            <Input type="text" 
             style={{border:"none"}}/>
          </div>

          {/* Select Location Dropdown (Native HTML Select) */}
          <div className="relative w-full md:w-56 flex items-center px-4 py-2 border-b border-white/10   border-gray-100 ">
            <MapPin />
            {/* <select 
              className="w-full  text-white md:text-gray-400 font-medium  text-sm py-1   pr-6"
            >Select Location
              <option value="Select Location" >Select Location</option>
              
                <option className=" bg-gray-300 md:bg-blue-500 text-black md:text-gray-800 ">Remote</option>
                  <option className="bg-gray-300 md:bg-blue-500 text-black text-white md:text-gray-800">Lucknow</option>
                    <option className=" bg-gray-300 md:bg-blue-500 text-black text-white md:text-gray-800">Mumbi</option>
                      <option className="  bg-gray-300 md:bg-blue-500 text-black text-white md:text-gray-800">Kanpur</option>
                        <option className="  bg-gray-300 md:bg-blue-500 text-black text-white md:text-gray-800">Siddharth Nagar</option>
             
            </select> */}

            <Select>
  <SelectTrigger className="w-[180px] border-none">
    <SelectValue placeholder="Select Location" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="Mum">Mumbhai</SelectItem>
      <SelectItem value="Luck">Lucknow</SelectItem>
      <SelectItem value="Kanpur">Kanpur</SelectItem>
      <SelectItem value="Pune">Pune</SelectItem>
      <SelectItem value="Channani">Channani</SelectItem>
      <SelectItem value="Gujrat">Gujrat</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
            <div className="absolute right-4  ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>

         
          <div className="relative w-full md:w-60 flex items-center px-4 py-2 cursor-pointer">
            <TextCursorInput />
            {/* <select  className="w-full  text-white md:text-gray-400 font-medium text-sm py-1 cursor-pointer pr-6"
            >Select Category
              <option value="Select Category" >Select Category</option>
            
                <option className="bg-gray-300 md:bg-white text-white md:text-gray-800">Software Engineering</option>
                 <option className="bg-gray-300 md:bg-white text-white md:text-gray-800">Web Development</option>
                  <option className="bg-gray-300 md:bg-white text-white md:text-gray-800">Front-end development</option>
                   <option className="bg-gray-300 md:bg-white text-white md:text-gray-800">Back-end development</option>
                    <option className="bg-gray-300 md:bg-white text-white md:text-gray-800">Full Stack Development</option>
                     <option className="bg-gray-300 md:bg-white text-white md:text-gray-800">UI development</option>
             
            </select> */}
           <Select>
  <SelectTrigger className="w-45 border-none">
    <SelectValue placeholder="Select Categery" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="Soft">Software-Development</SelectItem>
      <SelectItem value="Web">Web-Development</SelectItem>
      <SelectItem value="Front">Front-End Development</SelectItem>
      <SelectItem value="Back">Back-End Development </SelectItem>
      <SelectItem value="Full">Full Stack DevelopmentBack-end Development</SelectItem>
      <SelectItem value="UI">UI Development</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

            <div className="absolute right-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>

          
          {/* <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-4 bg-teal-400 hover:bg-teal-500 text-white rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2   "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <span>Search Job</span>
          </button> */}
            <Button className=" size-16 w-30 rounded-l-none rounded-r-2xl " > <Search/>
            <span>Search Job</span></Button>
        
        </form> 
         
        {/* Stats Section */}
        <div className="mt-30 flex flex-cols-1 sm:flex-row-1 gap-8   max-w-xl  w-full">
        
          <div className=" flex items-center gap-5 justify-center sm:justify-start bg-black-500 p-4 rounded-2xl border border-white/5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:border-0">
            <div className="w-14 h-14  bg-teal-300/60 border rounded-full border-teal-500/20 flex items-center justify-center text-teal-400 ">
             <BriefcaseBusiness style={{color:'white' }} />           </div>
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-white ">25,850</h3>
              <p className="text-sm font-semibold text-gray-400">Jobs</p>
            </div>
          </div>

          {/* Stat 2: Candidates */}
          <div className="flex items-center gap-5 justify-center sm:justify-start bg-black-500  p-4 rounded-2xl border border-white/5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:border-0">
            <div className="w-14 h-14  bg-teal-300/60 border rounded-full border-teal-500/20 flex items-center justify-center text-teal-400 shadow-inner">
              <Users style={{color:'white' }}  />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">10,250</h3>
              <p className="text-sm font-semibold text-gray-400">Candidates</p>
            </div>
          </div>

          <div className="flex items-center gap-5  justify-center sm:justify-start bg-black-500  p-4 rounded-2xl border border-white/5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:border-0">
            <div className="w-14 h-14  bg-teal-300/60 border rounded-full border-teal-500/20 flex items-center justify-center text-teal-400 shadow-inner">
             <Building style={{color:'white' }} />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">18,400</h3>
              <p className="text-sm font-semibold text-gray-400">Companies</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Brands */}
      <footer className="relative z-10 w-full  border-t border-white/5 bg-black mt-12 py-12">
        <div className="max-w-7xl  mx-auto px-12 flex flex-wrap items-center justify-center md:justify-between gap-30 md:gap-30">
         
          <div className="flex flex-wrap items-center justify-center gap-45">
            {/* Spotify */}
            <div className="flex items-center gap-2 text-blue-100 hover:text-white  cursor-pointer">
              <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>
             <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991S6.515 22 12.01 22 22 17.504 22 12.01c0-5.495-4.446-9.991-9.99-9.991m4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848m1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998m.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.94.94 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248"/></svg>
              <span className="font-bold text-lg font-display">Spotify</span>
            </div>

            {/* Slack */}
            <div className="flex items-center gap-2 text-=blue-100 hover:text-white  cursor-pointer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-auto">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.522-2.522V8.824a2.528 2.528 0 0 1 2.522-2.52h5.043zm10.135 3.696a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.52-2.522V3.78a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043zm-3.78 10.136a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.522h2.522a2.528 2.528 0 0 1 2.52 2.522zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.52h-5.043z"/>
              </svg>
              <span className="font-bold text-blue-100 hover:text-white text-lg font-display tracking-tight">slack</span>
            </div>

            {/* Adobe */}
            <div className="flex items-center gap-2.5 text-blue-100 hover:text-white cursor-pointer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-auto">
                <path d="M13.966 2H22v20zM10.034 2H2v20zM12 9.422L17.514 22h-3.414l-2.02-4.904H8.44L12 9.422z"/>
              </svg>
              <span className="font-bold text-lg tracking-tight font-display">Adobe</span>
            </div>

            {/* Asana */}
            <div className="flex items-center gap-2 text-blue-100 hover:text-white  cursor-pointer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-auto">
                <path d="M12 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm-5.5 9.5a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm11 0a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"/>
              </svg>
              <span className="font-bold text-lg font-display tracking-tight">asana</span>
            </div>

            {/* Linear */}
            <div className="flex items-center gap-2 text-blue-100 hover:text-white  cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool-icon lucide-pen-tool">
              <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/>
              <circle cx="11" cy="11" r="2"/></svg>
              <span className="font-bold text-lg font-display tracking-tight">Linear</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
