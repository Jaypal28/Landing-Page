import React from 'react';
import { User2, Clock5, BriefcaseBusiness, Calendar, GraduationCap, Wallet, MapPin } from 'lucide-react';
import mapImage from '../assets/gole map.png';

export default function JobOverviewCard({ overviewData }) {
  const defaultSpecs = [
    { icon: <User2 className="w-5 h-5 text-teal-655" />, label: "Job Title", value: "Corporate Solutions Executive" },
    { icon: <Clock5 className="w-5 h-5 text-teal-655" />, label: "Join Type", value: "Full Time" },
    { icon: <BriefcaseBusiness className="w-5 h-5 text-teal-655" />, label: "Category", value: "Commerce" },
    { icon: <Calendar className="w-5 h-5 text-teal-655" />, label: "Experience", value: "5 Years" },
    { icon: <GraduationCap className="w-5 h-5 text-teal-655" />, label: "Degree", value: "Master" },
    { icon: <Wallet className="w-5 h-5 text-teal-655" />, label: "Offered Salary", value: "$40800-$42200" },
    { icon: <MapPin className="w-5 h-5 text-teal-655" />, label: "Location", value: "New-York, USA" }
  ];

  const specs = overviewData || defaultSpecs;

  return (
    <div className="bg-slate-100 border border-slate-200/85 rounded-2xl p-6 shadow-xs w-full">
      <h2 className="text-xl font-bold text-slate-900 mb-6 font-display">Job Overview</h2>

      <div className="space-y-5">
        {specs.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-full bg-teal-50/50 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100/30">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold leading-tight">{item.label}</p>
              <p className="font-bold text-slate-800 text-sm mt-0.5 leading-snug">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mock Map Image */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-2xs group cursor-pointer">
        <img 
          src={mapImage} 
          alt="Office Map Location" 
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
