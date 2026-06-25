import { BriefcaseBusiness, Building, Users, Search, MapPin, TextCursorInput } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Main() {
  return (
    <main className="relative grow flex flex-col items-center justify-center px-6 py-16 text-center max-w-7xl mx-auto w-full">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-4xl font-display">
        Find Your Dream Job <span className="text-teal-300">Today!</span>
      </h1>
      
      {/* Subtitle */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl font-light">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>

      
      <form className="mt-9 w-full max-w-4xl bg-white backdrop-blur-md rounded-2xl border border-white/10 flex flex-col md:flex-row items-center p-2 gap-2">         
        <div className="w-full md:flex-1 flex items-center px-4 py-2 border-b border-white/5 md:border-b-0 md:border-r border-white/5 gap-2">
          <Search strokeWidth={1.5} className="w-5 h-5 text-gray-400" />
          <Input type="text" placeholder="Job Title or Company" className="w-full bg-transparent text-white border-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0" />
        </div>

        {/* Select Location Dropdown */}
        <div className="relative w-full md:w-56 flex items-center px-4 py-2 border-b border-white/5 md:border-b-0 md:border-r border-white/5 gap-2">
          <MapPin strokeWidth={1.5} className="w-5 h-5 text-gray-400" />
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none text-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Mum">Mumbai</SelectItem>
                <SelectItem value="Luck">Lucknow</SelectItem>
                <SelectItem value="Kanpur">Kanpur</SelectItem>
                <SelectItem value="Pune">Pune</SelectItem>
                <SelectItem value="Chennai">Chennai</SelectItem>
                <SelectItem value="Gujarat">Gujarat</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Select Category Dropdown */}
        <div className="relative w-full md:w-60 flex items-center px-4 py-2 gap-2">
          <TextCursorInput strokeWidth={1.5} className="w-5 h-5 text-gray-400" />
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none text-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Soft">Software-Development</SelectItem>
                <SelectItem value="Web">Web-Development</SelectItem>
                <SelectItem value="Front">Front-End Development</SelectItem>
                <SelectItem value="Back">Back-End Development</SelectItem>
                <SelectItem value="Full">Full Stack Development</SelectItem>
                <SelectItem value="UI">UI Development</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full md:w-auto px-6 h-12 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer shrink-0" >
          <Search strokeWidth={1.5} className="w-5 h-5" />
          <span>Search Job</span>
        </Button>
      </form> 
       
      {/* Stats Section */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 max-w-2xl w-full justify-between">
      
        <div className="flex items-center gap-4 justify-center sm:justify-start bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-2xl border border-white/5 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none flex-1">
          <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400 shrink-0">
            <BriefcaseBusiness strokeWidth={1.5} className="w-5 h-5 text-teal-400" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-extrabold text-white">25,850</h3>
            <p className="text-sm font-semibold text-gray-400">Jobs</p>
          </div>
        </div>

        {/* Stat 2: Candidates */}
        <div className="flex items-center gap-4 justify-center sm:justify-start bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-2xl border border-white/5 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none flex-1">
          <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400 shrink-0">
            <Users strokeWidth={1.5} className="w-5 h-5 text-teal-400" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-extrabold text-white">10,250</h3>
            <p className="text-sm font-semibold text-gray-400">Candidates</p>
          </div>
        </div>

        {/* Stat 3: Companies */}
        <div className="flex items-center gap-4 justify-center sm:justify-start bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-2xl border border-white/5 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none flex-1">
          <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400 shrink-0">
            <Building strokeWidth={1.5} className="w-5 h-5 text-teal-400" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-extrabold text-white">18,400</h3>
            <p className="text-sm font-semibold text-gray-400">Companies</p>
          </div>
        </div>
      </div>
    </main>
  );
}
