import { useState } from 'react';
import Topcompany from '../components/sections/Topcompany';
import Footer from '../components/sections/Footer';
import Header from '../components/Header';
import PageBackground from '../components/PageBackground';
import JobCard from '../components/JobCard';


import {
  Search, MapPin, ChevronRight, SlidersHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import futureBannerImage from '../assets/future_banner.png';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';

const jobsData = [
  {
    id: 1,
    title: 'Forward Security Director',
    company: 'Bauch, Schuppe and Schulist Co',
    postedTime: '10 min ago',
    category: 'Hotels & Tourism',
    jobType: 'Full Time',
    salary: '$40000-$42000',
    location: 'New-York, USA',
    experience: 'Intermediate',
    datePosted: 'Last Hour',
    tags: ['engineering']
  },
  {
    id: 2,
    title: 'Regional Creative Facilitator',
    company: 'Wiszack - Becker Co',
    postedTime: '12 min ago',
    category: 'Media',
    jobType: 'Part Time',
    salary: '$28000-$32000',
    location: 'Los-Angeles, USA',
    experience: 'Fresher',
    datePosted: 'Last Hour',
    tags: ['design', 'ui/ux']
  },
  {
    id: 3,
    title: 'Internal Integration Planner',
    company: 'Mraz, Quigley and Feest Inc',
    postedTime: '15 min ago',
    category: 'Construction',
    jobType: 'Full Time',
    salary: '$48000-$50000',
    location: 'Texas, USA',
    experience: 'Expert',
    datePosted: 'Last Hour',
    tags: ['construction', 'management']
  },
  {
    id: 4,
    title: 'District Intranet Director',
    company: 'VonRueden - Weber Co',
    postedTime: '24 min ago',
    category: 'Commerce',
    jobType: 'Full Time',
    salary: '$42000-$48000',
    location: 'Florida, USA',
    experience: 'Expert',
    datePosted: 'Last Hour',
    tags: ['engineering', 'management']
  },
  {
    id: 5,
    title: 'Corporate Tactics Facilitator',
    company: 'Cormier, Turner and Flatley Inc',
    postedTime: '26 min ago',
    category: 'Commerce',
    jobType: 'Full Time',
    salary: '$38000-$40000',
    location: 'Boston, USA',
    experience: 'Intermediate',
    datePosted: 'Last Hour',
    tags: ['marketing', 'management']
  },
  {
    id: 6,
    title: 'Forward Accounts Consultant',
    company: 'Miller Group',
    postedTime: '30 min ago',
    category: 'Financial Services',
    jobType: 'Full Time',
    salary: '$45000-$48000',
    location: 'Boston, USA',
    experience: 'No-experience',
    datePosted: 'Last Hour',
    tags: ['soft']
  }
];

function FiltersContent({ prefix = "desktop" }) {
  const [salary, setSalary] = useState(9999);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categoriesOptions = [
    { label: "Commerce", count: 10 },
    { label: "Telecommunications", count: 10 },
    { label: "Hotels & Tourism", count: 10 },
    { label: "Education", count: 10 },
    { label: "Financial Services", count: 10 },
    { label: "Media", count: 10 },
    { label: "Construction", count: 10 },
  ];

  const jobTypesOptions = [
    { label: "Full Time", count: 10 },
    { label: "Part Time", count: 10 },
    { label: "Freelance", count: 10 },
    { label: "Seasonal", count: 10 },
    { label: "Fixed-Price", count: 10 },
  ];

  const experienceOptions = [
    { label: "No-experience", count: 10 },
    { label: "Fresher", count: 10 },
    { label: "Intermediate", count: 10 },
    { label: "Expert", count: 10 },
  ];

  const datePostedOptions = [
    { label: "All", count: 10 },
    { label: "Last Hour", count: 10 },
    { label: "Last 24 Hours", count: 10 },
    { label: "Last 7 Days", count: 10 },
    { label: "Last 30 Days", count: 10 },
  ];

  const tagsOptions = ["engineering", "design", "ui/ux", "marketing", "management", "soft", "construction"];

  return (
    <>
      {/* Search by Job Title */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2.5 font-display'>Search by Job Title</h3>
        <div className='relative'>
          <Search className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
          <Input
            type='text'
            placeholder='Job title or company'
            id={`${prefix}-search-input-field`}
            className='bg-white border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-10 w-full h-11 focus-visible:ring-teal-600/20 focus-visible:border-teal-600'
          />
        </div>
      </div>

      {/* Location dropdown */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2.5 font-display'>Location</h3>
        <div className='relative'>
          <Select defaultValue="all">
            <SelectTrigger className='bg-white border-slate-200 text-slate-900 rounded-xl w-full h-11 pl-10 pr-4 relative flex items-center justify-between text-sm cursor-pointer shadow-sm focus:border-[#309689] focus:ring-1 focus:ring-[#309689]/20'>
              <MapPin className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
              <SelectValue placeholder='Choose city' />
            </SelectTrigger>
            <SelectContent className='bg-white border border-slate-200 rounded-xl shadow-md z-50 text-slate-900'>
              <SelectItem value='all' className='cursor-pointer hover:bg-slate-50'>Choose city</SelectItem>
              <SelectItem value='new-york' className='cursor-pointer hover:bg-slate-50'>New-York, USA</SelectItem>
              <SelectItem value='los-angeles' className='cursor-pointer hover:bg-slate-50'>Los-Angeles, USA</SelectItem>
              <SelectItem value='texas' className='cursor-pointer hover:bg-slate-50'>Texas, USA</SelectItem>
              <SelectItem value='florida' className='cursor-pointer hover:bg-slate-50'>Florida, USA</SelectItem>
              <SelectItem value='boston' className='cursor-pointer hover:bg-slate-50'>Boston, USA</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category checkboxes */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2 font-display'>Category</h3>
        <div className='flex flex-col gap-2'>
          {categoriesOptions
            .slice(0, showAllCategories ? categoriesOptions.length : 5)
            .map((opt) => (
              <div key={opt.label} className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-3'>
                  <Checkbox
                    id={`${prefix}-cat-${opt.label}`}
                    className='bg-white border-slate-300 rounded-md data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 data-[state=checked]:text-white focus-visible:ring-[#309689]/20 cursor-pointer'
                  />
                  <label htmlFor={`${prefix}-cat-${opt.label}`} className='text-slate-700 text-sm font-medium cursor-pointer select-none hover:text-slate-950'>
                    {opt.label}
                  </label>
                </div>
                <span className='text-slate-500 text-xs font-semibold'>
                  <div className='bg-white/85 border border-slate-200/60 rounded-full px-2 py-0.5'>{opt.count}</div>
                </span>
              </div>
            ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAllCategories(!showAllCategories)}
          className='text-teal-600 hover:text-teal-700 text-xs font-bold mt-2 cursor-pointer select-none block'
        >
          {showAllCategories ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* Job Type checkboxes */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2 font-display'>Job Type</h3>
        <div className='flex flex-col gap-2'>
          {jobTypesOptions.map((opt) => (
            <div key={opt.label} className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Checkbox
                  id={`${prefix}-type-${opt.label}`}
                  className='bg-white border-slate-300 rounded-md data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 data-[state=checked]:text-white focus-visible:ring-teal-600/20 cursor-pointer'
                />
                <label htmlFor={`${prefix}-type-${opt.label}`} className='text-slate-700 text-sm font-medium cursor-pointer select-none hover:text-slate-950'>
                  {opt.label}
                </label>
              </div>
              <span className='text-slate-500 text-xs font-semibold'>
                <div className='bg-white/85 border border-slate-200/60 rounded-full px-2 py-0.5'>{opt.count}</div>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Level checkboxes */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2 font-display'>Experience Level</h3>
        <div className='flex flex-col gap-2'>
          {experienceOptions.map((opt) => (
            <div key={opt.label} className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Checkbox
                  id={`${prefix}-exp-${opt.label}`}
                  className='bg-white border-slate-300 rounded-md data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 data-[state=checked]:text-white focus-visible:ring-teal-600/20 cursor-pointer'
                />
                <label htmlFor={`${prefix}-exp-${opt.label}`} className='text-slate-700 text-sm font-medium cursor-pointer select-none hover:text-slate-950'>
                  {opt.label}
                </label>
              </div>
              <span className='text-slate-500 text-xs font-semibold'>
                <div className='bg-white/85 border border-slate-200/60 rounded-full px-2 py-0.5'>{opt.count}</div>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Date Posted checkboxes */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2 font-display'>Date Posted</h3>
        <div className='flex flex-col gap-2'>
          {datePostedOptions.map((opt) => (
            <div key={opt.label} className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Checkbox
                  id={`${prefix}-date-${opt.label}`}
                  className='bg-white border-slate-300 rounded-md data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 data-[state=checked]:text-white focus-visible:ring-[#309689]/20 cursor-pointer'
                />
                <label htmlFor={`${prefix}-date-${opt.label}`} className='text-slate-700 text-sm font-medium cursor-pointer select-none hover:text-slate-950'>
                  {opt.label}
                </label>
              </div>
              <span className='text-slate-500 text-xs font-semibold'>
                <div className='bg-white/85 border border-slate-200/60 rounded-full px-2 py-0.5'>{opt.count}</div>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Salary range slider */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-2.5 font-display'>Salary</h3>
        <div className='relative w-full mt-4 mb-5'>
          <input
            type='range'
            min='0'
            max='9999'
            id={`${prefix}-max-salary-slider`}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className='w-full h-1.5 bg-slate-200 accent-teal-600 rounded-lg appearance-none cursor-pointer focus:outline-none'
          />
        </div>

        <div className='flex justify-between items-center mt-3'>
          <span className='text-slate-700 text-xs font-semibold'>
            Salary: <span>$0 - ${salary}</span>
          </span>
          <Button
            className='bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 h-7 text-xs rounded-lg cursor-pointer'
            onClick={() => alert("Salary filter applied!")}
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Tags section */}
      <div>
        <h3 className='text-slate-900 font-bold text-sm mb-3 font-display'>Tags</h3>
        <div className='flex flex-wrap gap-2'>
          {tagsOptions.map((tag) => (
            <button
              key={tag}
              className='px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer select-none bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100'
              onClick={() => alert(`Tag ${tag} filter applied!`)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical hiring banner at bottom of sidebar */}
      <div className='relative overflow-hidden rounded-2xl h-60 bg-slate-900 flex flex-col justify-end p-5 group shadow-sm mt-2 border border-slate-200/50'>
        <img
          src={futureBannerImage}
          alt='We Are Hiring'
          className='absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500 blur-[0.5px]'
        />
        <div className='absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent' />
        <div className='relative z-10 flex flex-col gap-1'>
          <h2 className='text-xl font-bold text-white tracking-wider font-display'>WE ARE HIRING</h2>
          <p className='text-slate-300 text-xs font-medium'>Apply Today!</p>
        </div>
      </div>
    </>
  );
}

export default function Jobs() {
  // Static Bookmarks for Mock display
  const bookmarkedJobs = [1, 4];

  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between'>
      
      <PageBackground/>
      <Header/>
      
      {/* Page Title Header */}
      <div className='relative z-10 w-full flex flex-col items-center justify-center py-12 text-center max-w-7xl mx-auto px-6'>
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display'>Jobs</h1>
        <p className='text-slate-400 text-sm mt-2 max-w-lg'>Find your dream job from our curated list of elite tech positions.</p>
      </div>

      {/* Main Page Content Section - Styled Light Theme */}
      <div className='relative w-full bg-[#f8fafc] text-slate-800 py-12 z-10 border-t border-slate-200/60'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8'>
          
          {/* SIDEBAR FILTERS - Styled Light Theme (Desktop only) */}
          <aside className='hidden lg:flex w-full lg:w-60 shrink-0 bg-[#edf2f6] border border-slate-200/50 rounded-2xl p-4 flex-col gap-4 shadow-sm text-slate-800'>
            <FiltersContent prefix="desktop" />
          </aside>

          {/* JOB LISTINGS SECTION */}
          <main className='flex-1 flex flex-col text-slate-800'>
            
            {/* Header: results count & sort */}
            <div className='flex flex-wrap justify-between items-center gap-4 mb-8'>
              <div className='flex items-center gap-4'>
                <span className='text-slate-500 text-sm font-semibold'>
                  Showing 1-{jobsData.length} of {jobsData.length} results
                </span>

                {/* Mobile Drawer Trigger for Filters */}
                <Drawer direction="left">
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="lg:hidden flex items-center gap-2 bg-[#edf2f6] hover:bg-[#e2e8f0] text-slate-800 border border-slate-200 rounded-xl px-4 py-2 h-11 font-medium shadow-xs transition-all cursor-pointer">
                      <SlidersHorizontal className="w-4.5 h-4.5 text-teal-600" />
                      <span>Filters</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-[#f8fafc] border-r border-slate-200 text-slate-800 flex flex-col h-full rounded-r-2xl max-w-xs sm:max-w-sm">
                    <DrawerHeader className="border-b border-slate-200/60 pb-4">
                      <DrawerTitle className="text-slate-900 font-bold font-display text-lg flex items-center gap-2">
                        <SlidersHorizontal className="w-4.5 h-4.5 text-teal-600" />
                        <span>Filter Jobs</span>
                      </DrawerTitle>
                      <DrawerDescription className="text-slate-500 text-xs">
                        Refine the job listings to match your preferences.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
                      <FiltersContent prefix="mobile" />
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>

              <div className='flex items-center gap-3'>
                <select
                  defaultValue='latest'
                  className='border border-slate-200 rounded-xl text-slate-700 py-2 px-3 bg-white hover:bg-slate-50 cursor-pointer text-xs font-bold focus:outline-none shadow-sm transition-colors'
                  onChange={() => alert("List sorted!")}
                >
                  <option value='latest'>Sort by Latest</option>
                  <option value='oldest'>Oldest</option>
                </select>
              </div>
            </div>

            {/* List of Job Cards */}
            <div className='flex flex-col gap-3 '>
              {jobsData.map((job) => {
                const isBookmarked = bookmarkedJobs.includes(job.id);
                return (
                  <JobCard
                    key={job.id}
                    job={job}
                    isBookmarked={isBookmarked}
                    onToggleBookmark={() => alert("Bookmark state updated!")}
                  />
                );
              })}
            </div>

            {/* Pagination at bottom */}
            <div className='flex justify-center items-center gap-2 mt-8'>
              <Button variant='jay'>1</Button>
              <Button variant='pal'>2</Button>
              <Button variant='him'>
                Next <ChevronRight className='w-3.5 h-3.5' />
              </Button>
            </div>

          </main>
         
        </div>
        <Topcompany/>
        
      </div>
      <Footer/>
    </div>
  );
}
