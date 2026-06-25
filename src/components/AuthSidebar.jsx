import React from 'react';
import { BriefcaseBusiness, Building2 } from 'lucide-react';
import ch from '../assets/ch.png';

export default function AuthSidebar({ title, subtitle }) {
  return (
    <div className="w-full lg:w-1/2 relative overflow-hidden min-h-120 lg:min-h-screen bg-slate-950 py-16 px-6 sm:px-12 lg:px-20 flex flex-col justify-end text-white select-none"> 
      <img
        src={ch}
        alt="Checkerboard"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#041a3c]/50 to-[#041a3c]"></div>
      
      <div className="hidden lg:block absolute top-0 -left-9 h-full w-16 bg-white -skew-x-3 origin-left"></div>

      <div className="relative text-white z-10 mb-8 max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-3xl sm:text-4xl mt-2 font-bold leading-normal">
          {subtitle}
        </p>
      </div>

      <div className="relative flex flex-row gap-6 sm:gap-10 text-white z-10 max-w-md">
        <div className="text-center flex-1">
          <div className="bg-white/15 p-3 rounded-lg mb-4 flex items-center justify-center mx-auto w-12 h-12">
            <BriefcaseBusiness strokeWidth={1.5} className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl">1,75,324</h3>
          <p className="text-xs">Live Jobs</p>
        </div>

        <div className="text-center flex-1">
          <div className="bg-white/15 p-3 rounded-lg mb-4 flex items-center justify-center mx-auto w-12 h-12">
            <Building2 strokeWidth={1.5} className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl">97,354</h3>
          <p className="text-xs">Companies</p>
        </div>

        <div className="text-center flex-1">
          <div className="bg-white/15 p-3 rounded-lg mb-4 flex items-center justify-center mx-auto w-12 h-12">
            <BriefcaseBusiness strokeWidth={1.5} className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl">7,532</h3>
          <p className="text-xs">New Jobs</p>
        </div>
      </div>
    </div>
  );
}
