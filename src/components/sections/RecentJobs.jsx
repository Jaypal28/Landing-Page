import { BookmarkPlus, BriefcaseBusiness, Clock5, Wallet, MapPin, Flower, Component } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Card from '../ui/card';

export default function RecentJobs() {
  return (
    <div className="w-full bg-white relative text-slate-900 font-sans sm:px-6 lg:px-1">
      <div className=" max-5xl mx-auto ">
        <h1 className="mt-4 px-8 p-4 text-3xl sm:text-4xl font-extrabold text-slate-900 ">
          Recent Jobs Available 
        </h1>       
        <div className='flex justify-between '>
          <p className=" text-slate-500 px-8 mb-3 max-w-xl text-sm sm:text-base font-medium">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
          </p>
          
          <Link 
            to="https://google.com" 
            className="pr-3 text-teal-500 hover:text-teal-600 font-bold text-sm sm:text-base transition-colors duration-200"
          >
            View all
          </Link>
        </div>
      </div>
        
      <div className="space-y-0.5">
        {/* --- JOB CARD 1 --- */}
        <Card className="m-2 sm:p-7">
          <Button variant="JobBTN">
            <BookmarkPlus strokeWidth={1.5} className="w-5 h-5 text-gray-500 hover:text-teal-600 transition-colors" />
          </Button>

          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-teal-100 shadow-sm">
            <img src='\assets\Logo.png' alt='Logo'/>
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <span className="inline-block bg-teal-50/50 border border-teal-100 text-teal-600 font-bold text-xs px-2.5 py-1 rounded-full">
                  10 min ago
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                Forward Security Director
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Bauch, Schuppe and Schulist Co
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <BriefcaseBusiness strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Hotels & Tourism</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock5 strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Full time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wallet strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>$40000-$42000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>New-York, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
            <Button variant="JobDetial">
              Job Details
            </Button>
          </div>
        </Card>

        {/* --- JOB CARD 2 --- */}
        <Card className="m-2">
          <Button variant="JobBTN">
            <BookmarkPlus strokeWidth={1.5} className="w-5 h-5 text-gray-500 hover:text-teal-600 transition-colors" />
          </Button>

          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 shadow-sm">
              <img src="\assets\Logo (1).png" alt="Logo" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <span className="inline-block bg-teal-50/50 border border-teal-100 text-teal-600 font-bold text-xs px-2.5 py-1 rounded-full">
                  12 min ago
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                Regional Creative Facilitator
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Wisozk - Becker Co
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <BriefcaseBusiness strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Media</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock5 strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Part time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wallet strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>$28000-$32000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Los- Angeles, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
            <Button variant="JobDetial">
              Job Details
            </Button>
          </div>
        </Card>

        {/* --- JOB CARD 3 --- */}
        <Card className="m-2">
          <Button variant="JobBTN">
            <BookmarkPlus strokeWidth={1.5} className="w-5 h-5 text-gray-500 hover:text-teal-600 transition-colors" />
          </Button>

          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden shrink-0 border border-teal-100 shadow-sm">
            <img src="assets\Logo (2).png" alt="logo2" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <span className="inline-block bg-teal-50 border border-teal-100 text-teal-850 font-bold text-xs px-2.5 py-1 rounded-full">
                  15 min ago
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                Internal Integration Planner
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Mraz, Quigley and Feest Inc.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <BriefcaseBusiness strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Construction</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock5 strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Full time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wallet strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>$48000-$50000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Texas, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
            <Button variant="JobDetial">
              Job Details
            </Button>
          </div>
        </Card>

        {/* --- JOB CARD 4 --- */}
        <Card className="m-2">
          <Button variant="JobBTN">
            <BookmarkPlus strokeWidth={1.5} className="w-5 h-5 text-gray-500 hover:text-teal-600 transition-colors" />
          </Button>

          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden shrink-0 border border-teal-100 shadow-sm">
             <img src="\assets\Logo (3).png" alt="logo3" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <span className="inline-block bg-teal-50/50 border border-teal-100 text-teal-600 font-bold text-xs px-2.5 py-1 rounded-full">
                  24 min ago
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                District Intranet Director
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                VonRueden - Weber Co
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <BriefcaseBusiness strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Commerce</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock5 strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Full time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wallet strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>$42000-$48000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Florida, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
            <Button variant="JobDetial">
              Job Details
            </Button>
          </div>
        </Card>

        {/* --- JOB CARD 5 --- */}
        <Card className="m-2">
          <Button variant="JobBTN">
            <BookmarkPlus strokeWidth={1.5} className="w-5 h-5 text-gray-500 hover:text-teal-600 transition-colors" />
          </Button>

          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center overflow-hidden shrink-0 border border-teal-100 shadow-sm">
              <img src="assets\Logo (4).png" alt="logo4"/>
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <span className="inline-block bg-teal-50/50 border border-teal-100 text-teal-600 font-bold text-xs px-2.5 py-1 rounded-full">
                  26 min ago
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                Corporate Tactics Facilitator
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Cormier, Turner and Flatley Inc
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <BriefcaseBusiness strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Commerce</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock5 strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Full time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wallet strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>$38000-$40000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin strokeWidth={1.5} className="w-4 h-4 text-teal-600" />
                  <span>Boston, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-end">
            <Button variant="JobDetial">
              Job Details
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
