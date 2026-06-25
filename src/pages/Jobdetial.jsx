import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import PageBackground from "../components/PageBackground";
import {Link} from 'react-router-dom';
import { 
  BriefcaseBusiness, Clock5, Wallet,MapPin,CircleCheck,  ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCard from "../components/JobCard";
import JobOverviewCard from "../components/JobOverviewCard";
import SendMessageForm from "../components/SendMessageForm";

export default function Jobdetial() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between'>
      <PageBackground />
      <Header />
      
      {/* Page Title Header */}
      <div className='relative z-10 w-full flex flex-col items-center justify-center py-12 text-center max-w-7xl mx-auto px-6'>
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display'>Job Details</h1>
      </div>

      {/* Main Content Wrapper (Light Theme Section) */}
      <div className='relative w-full bg-white text-slate-700 py-12 z-10 '>
        <main className="relative flex flex-col items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <div className="w-full mb-6 flex">
            <button 
              onClick={() => { window.location.href = "/Jobs"; }}
              className="flex items-center gap-2 text-slate-600 hover:text-teal-600 font-semibold text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to search</span>
            </button>
          </div>

          {/* Job Header Card */}
          <div className="w-full bg-white   p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row justify-between sm:items-center gap-6 ">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">Corporate Solutions Executive</h1>
              <p className="text-teal-650 text-sm mt-1.5 font-semibold">Loffler and Sons</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  <span>New-York, USA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock5 className="w-4 h-4 text-teal-500" />
                  <span>Full Time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wallet className="w-4 h-4 text-teal-500" />
                  <span>$40000-$42000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BriefcaseBusiness className="w-4 h-4 text-teal-500" />
                  <span>Commerce</span>
                </div>
              </div>
            </div>
            <div>
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2.5 h-11 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto cursor-pointer"
                onClick={() => alert("Application submitted successfully!")} >
                Apply Job
              </Button>
            </div>
          </div>

          {/* Main Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            
            {/* Left Column (Main Info & Related Jobs) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Job Details Card */}
              <div className=" p-4 sm:p-8 space-y-8 shadow-xs">
                
                {/* Job Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Job Description</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Nunc sed a nisl purus. Nunc eleifend mi id purus tristique, sit congue non vitae odio sit amet in. Felis ac ultrices class massa. Commodo fringilla sed tempor mus laoreet ultrices ipsum. Habitant morbi finibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Et diam ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing varius fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus checklist porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa. Tortor varius nam elementum duis blandit elit id sit. Ante mauris morbi diam habitant donec.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Key Responsibilities</h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      
                      <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      <span>Et diam ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae cras ornare. Cras facilisis dignissim augue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      <span>Cras facilisis dignissim augue lorem amet adipiscing varius fames mauris. Tortor amet porta proin in.</span>
                    </li>
                    <li className="flex items-start gap-3">
                     <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                     
                      <span>Ornare varius faucibus nisi vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing purus fames.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta.</span>
                    </li>
                  </ul>
                </div>

                {/* Professional Skills */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Professional Skills</h3>
                  <ul className="space-y-3 text-slate-650 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Et diam ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae cras ornare.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                      <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Ornare varius faucibus nisi vitae cras ornare.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                        <span >
                         <CircleCheck className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 text-teal-500"/>
                      </span>
                      </span>
                      <span>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.</span>
                    </li>
                  </ul>
                </div>

                {/* Tags Section */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-slate-900 font-bold text-sm">Tags:</span>
                    {['Full time', 'Commerce', 'New - York', 'Corporate', 'Location'].map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-lg text-xs font-semibold text-teal-600" >
                        {tag} </span>))}
                  </div>
                </div>

                {/* Share Job Section */}
                <div className="flex items-center gap-5 pt-2">
                  <span className="text-slate-950 font-semibold text-sm">Share Job:</span>
                  <div className="flex gap-2.5">
                    <Link To="#"  className="  flex items-center justify-center hover:bg-teal-650 transition-colors">
                      <img src="\assets\facebook.png" alt="facebook" width="50" />
                    </Link>
                    <Link To="#"  className=" mt-2 flex items-center justify-center hover:bg-teal-650 transition-colors">
                      <img src="\assets\twitter.png" alt="twitter" width="30" />
                    </Link>
                    <Link To="#" className="flex items-center justify-center hover:bg-teal-650 transition-colors">
                      <img src="\assets\Linkdin.png" alt="Linkdin" width="50" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Related Jobs Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 font-display">Related Jobs</h2>
                  <p className="text-slate-500 text-sm mt-1">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      id: "related-1",
                      title: "Internal Creative Coordinator",
                      company: "Green Group",
                      postedTime: "3h ago",
                      salary: "$44000-$46000",
                      category: "Commerce",
                      jobType: "Full time",
                      location: "New-York, USA"
                    },
                    {
                      id: "related-2",
                      title: "District Intranet Director",
                      company: "VonRueden - Weber Co",
                      postedTime: "24 min ago",
                      salary: "$42000-$48000",
                      category: "Commerce",
                      jobType: "Full time",
                      location: "New-York, USA"
                    },
                    {
                      id: "related-3",
                      title: "Corporate Tactics Facilitator",
                      company: "Cormier, Turner and Flatley Inc",
                      postedTime: "26 min ago",
                      salary: "$38000-$40000",
                      category: "Commerce",
                      jobType: "Full time",
                      location: "New-York, USA"
                    }
                  ].map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-6">
              <JobOverviewCard />
              <SendMessageForm />
            </div>
          </div>

        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}