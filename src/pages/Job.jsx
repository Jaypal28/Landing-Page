import React from 'react';

export default function Job() {
  return (
    <div className="w-full min-h-screen bg-white  text-slate-900 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200/60 pb-8 mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recent Jobs Available
            </h1>
            <p className="text-slate-500 mt-2 max-w-xl text-sm sm:text-base font-medium">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...
            </p>
          </div>
          <div>
            <a 
              href="#" 
              className="text-[#0d9488] hover:text-[#0f766e] font-bold text-sm sm:text-base transition-colors duration-200"
            >
              View all
            </a>
          </div>
        </div>

        {/* --- JOBS LIST --- */}
        <div className="space-y-4">
          
          {/* --- JOB CARD 1 --- */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Top Right Bookmark Icon */}
            <button className="absolute top-5 right-5 p-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-[#0d9488] transition-colors cursor-pointer">
             
            </button>

            {/* Left Column: Logo, Info */}
            <div className="flex items-start gap-4 flex-1">
              
              {/* Custom SVG Logo */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 shadow-sm">
               
              </div>

              <div className="flex-1 min-w-0">
                {/* Time Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-[#eefcf9] border border-teal-100 text-[#0d9488] font-bold text-xs px-2.5 py-1 rounded-full">
                    10 min ago
                  </span>
                </div>

                {/* Job Title & Company */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                  Forward Security Director
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Bauch, Schuppe and Schulist Co
                </p>

                {/* Details Row */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                  {/* Category */}
                  <div className="flex items-center gap-1.5">
                   
                    <span>Hotels & Tourism</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Full time</span>
                  </div>
                  {/* Salary */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>$40000-$42000</span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>New-York, USA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
              <button className="w-full md:w-auto px-5 py-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer text-center">
                Job Details
              </button>
            </div>
          </div>

          {/* --- JOB CARD 2 --- */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Top Right Bookmark Icon */}
            <button className="absolute top-5 right-5 p-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-[#0d9488] transition-colors cursor-pointer">
             
            </button>

            {/* Left Column: Logo, Info */}
            <div className="flex items-start gap-4 flex-1">
              
              {/* Overlapping Circles Logo */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 shadow-sm">
               
              </div>

              <div className="flex-1 min-w-0">
                {/* Time Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-[#eefcf9] border border-teal-100 text-[#0d9488] font-bold text-xs px-2.5 py-1 rounded-full">
                    12 min ago
                  </span>
                </div>

                {/* Job Title & Company */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                  Regional Creative Facilitator
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Wisozk - Becker Co
                </p>

                {/* Details Row */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                  {/* Category */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Media</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Part time</span>
                  </div>
                  {/* Salary */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>$28000-$32000</span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Los- Angeles, USA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
              <button className="w-full md:w-auto px-5 py-2.5 bg-teal-700 hover:bg-[#0f766e] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer text-center">
                Job Details
              </button>
            </div>
          </div>

          {/* --- JOB CARD 3 --- */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Top Right Bookmark Icon */}
            <button className="absolute top-5 right-5 p-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-[#0d9488] transition-colors cursor-pointer">
              
            </button>

            {/* Left Column: Logo, Info */}
            <div className="flex items-start gap-4 flex-1">
              
              {/* Circular Segmented Logo */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 shadow-sm">
               
              </div>

              <div className="flex-1 min-w-0">
                {/* Time Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-[#eefcf9] border border-teal-100 text-[ #0d948950] font-bold text-xs px-2.5 py-1 rounded-full">
                    15 min ago
                  </span>
                </div>

                {/* Job Title & Company */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                  Internal Integration Planner
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Mraz, Quigley and Feest Inc.
                </p>

                {/* Details Row */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                  {/* Category */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Construction</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Full time</span>
                  </div>
                  {/* Salary */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>$48000-$50000</span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Texas, USA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
              <button className="w-full md:w-auto px-5 py-2.5 bg-teal-700 hover:bg-[#0f766e] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer text-center">
                Job Details
              </button>
            </div>
          </div>

          {/* --- JOB CARD 4 --- */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Top Right Bookmark Icon */}
            <button className="absolute top-5 right-5 p-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-[#0d9488] transition-colors cursor-pointer">
              
            </button>

            {/* Left Column: Logo, Info */}
            <div className="flex items-start gap-4 flex-1">
              
              {/* Swirl Logo */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                
              </div>

              <div className="flex-1 min-w-0">
                {/* Time Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-[#eefcf9] border border-teal-100 text-[#0d9488] font-bold text-xs px-2.5 py-1 rounded-full">
                    24 min ago
                  </span>
                </div>

                {/* Job Title & Company */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                  District Intranet Director
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  VonRueden - Weber Co
                </p>

                {/* Details Row */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                  {/* Category */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Commerce</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center gap-1.5">
                   
                    <span>Full time</span>
                  </div>
                  {/* Salary */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>$42000-$48000</span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    
                    <span>Florida, USA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
              <button className="w-full md:w-auto px-5 py-2.5 bg-teal-700 hover:bg-[#0f766e] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer text-center">
                Job Details
              </button>
            </div>
          </div>

          {/* --- JOB CARD 5 --- */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Top Right Bookmark Icon */}
            <button className="absolute top-5 right-5 p-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-[#0d9488] transition-colors cursor-pointer">
              
            </button>

            {/* Left Column: Logo, Info */}
            <div className="flex items-start gap-4 flex-1">
              
              {/* Diamond Cross Logo */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 shadow-sm">
               
              </div>

              <div className="flex-1 min-w-0">
                {/* Time Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-[#eefcf9] border border-teal-100 text-[#0d9488] font-bold text-xs px-2.5 py-1 rounded-full">
                    26 min ago
                  </span>
                </div>

                {/* Job Title & Company */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                  Corporate Tactics Facilitator
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Cormier, Turner and Flatley Inc
                </p>

                {/* Details Row */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                  {/* Category */}
                  <div className="flex items-center gap-1.5">
                    
                   
                    <span>Commerce</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center gap-1.5">
                   
                    <span>Full time</span>
                  </div>
                  {/* Salary */}
                  <div className="flex items-center gap-1.5">
                  
                    <span>$38000-$40000</span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                   
                    <span>Boston, USA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
              <button className="w-full md:w-auto px-5 py-2.5 bg-teal-700 hover:bg-[#0f766e] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer text-center">
                Job Details
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
