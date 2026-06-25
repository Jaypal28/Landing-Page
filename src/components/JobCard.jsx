import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Bookmark, MapPin, Clock5, Wallet, BriefcaseBusiness, ShieldCheck, Palette, Network, Target, LineChart, Coins, Component } from 'lucide-react';

const getJobIcon = (title) => {
  if (title.includes("Security")) return <img src="\assets\Logo (1).png" alt="alcv" className="w-8 h-8  text-teal-600" />;
  if (title.includes("Creative") || title.includes("Designer") || title.includes("Coordinator")) return <img src='\assets\Logo (3).png' alt='avf' className="w-8 h-8 text-indigo-600" />;
  if (title.includes("Integration") || title.includes("Planner")) return <img src='\assets\Logo (4).png' alt='asd' className="w-8 h-8 text-orange-600" />;
  if (title.includes("Intranet") || title.includes("Director")) return <img src='assets\Logo (5).png' alt='vbk' className="w-8 h-8 text-blue-600" />;
  if (title.includes("Tactics") || title.includes("Facilitator")) return <Target strokeWidth={1.5} className="w-6 h-6 text-rose-600" />;
  if (title.includes("Accounts") || title.includes("Consultant")) return <Coins strokeWidth={1.5} className="w-6 h-6 text-emerald-600" />;
  return <Component strokeWidth={1.5} className="w-6 h-6 text-teal-600" />;
};

const getIconBg = (title) => {
  if (title.includes("Security")) return "bg-teal-50 border border-teal-100";
  if (title.includes("Creative") || title.includes("Designer") || title.includes("Coordinator")) return "bg-indigo-50 border border-indigo-100";
  if (title.includes("Integration") || title.includes("Planner")) return "bg-orange-50 border border-orange-100";
  if (title.includes("Intranet") || title.includes("Director")) return "bg-blue-50 border border-blue-100";
  if (title.includes("Tactics") || title.includes("Facilitator")) return "bg-rose-50 border border-rose-100";
  if (title.includes("Accounts") || title.includes("Consultant")) return "bg-emerald-50 border border-emerald-100";
  return "bg-teal-50 border border-teal-100";
};

export default function JobCard({ job, isBookmarked = false, onToggleBookmark }) {
  return (
    <Card className='relative bg-white   hover:border-teal-500/30 text-slate-800 hover:shadow-md transition-all duration-300 p-5 flex flex-col gap-4 w-full md:flex-row md:items-center justify-between'>
      
      {/* Bookmark Button */}
      <Button
        variant='outline'
        onClick={(e) => {
          e.stopPropagation();
          if (onToggleBookmark) onToggleBookmark(job.id);
        }}
        className='absolute top-5 right-5 p-2 bg-white border border-slate-200 hover:border-teal-500/25 rounded-full hover:bg-slate-50 hover:text-teal-600 transition-all cursor-pointer shadow-xs text-slate-400 z-10 w-8 h-8 flex items-center justify-center font-normal'
      >
        <Bookmark
          strokeWidth={1.5}
          className='w-4 h-4'
          fill={isBookmarked ? 'currentColor' : 'none'}
          color={isBookmarked ? '#0d9488' : 'currentColor'}
        />
      </Button>

      <div className='flex items-start gap-4 flex-1'>
        {/* Logo Icon inside stylized circle */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-xs ${getIconBg(job.title)}`}>
          {getJobIcon(job.title)}
        </div>

        <div className='flex-1 min-w-0'>
          {/* Time Posted Badge */}
          <div className='mb-2'>
            <span className='inline-block bg-teal-50 border border-teal-100/60 text-teal-600 font-bold text-xs px-2.5 py-1 rounded-full'>
              {job.postedTime || job.posted}
            </span>
          </div>

          {/* Title & Company */}
          <h2 
            className='text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug hover:text-teal-600 transition-colors cursor-pointer font-display' 
            onClick={() => { window.location.href = '/Jobdetial'; }}
          >
            {job.title}
          </h2>
          <p className='text-slate-500 text-sm font-semibold mt-1'>
            {job.company}
          </p>

          {/* Job Details Row */}
          <div className='flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium'>
            <div className='flex items-center gap-1.5'>
              <BriefcaseBusiness strokeWidth={1.5} className='w-4 h-4 text-slate-450' />
              <span>{job.category}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Clock5 strokeWidth={1.5} className='w-4 h-4 text-slate-450' />
              <span>{job.jobType}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Wallet strokeWidth={1.5} className='w-4 h-4 text-slate-450' />
              <span>{job.salary}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <MapPin strokeWidth={1.5} className='w-4 h-4 text-slate-450' />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details Button */}
      <div className='mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end shrink-0'>
        <Button 
          variant='JobDetial' 
          className='bg-teal-650 hover:bg-teal-700 text-white w-full md:w-auto font-semibold' 
          onClick={() => { window.location.href = '/Jobdetial'; }}
        >
          Job Details
        </Button>
      </div>

    </Card>
  );
}
