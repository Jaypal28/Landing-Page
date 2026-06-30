import { Sprout, Handbag, Warehouse, GraduationCap, Bus } from 'lucide-react';
export default function BrowseCategory() {
  return (
    <div className="w-full relative bg-teal-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="text-center ">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Browse by Category</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="w-full aspect-square  bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
            <Sprout strokeWidth={1.5} className="w-10 h-10 text-teal-700 mb-3" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Agriculture</h3>
            <p className="text-xs sm:text-sm text-slate-500">1254 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-6 cursor-pointer">
            <img src="/assets/agriculture 2.png" alt="agriculture 2" width="40" />
            <h3 className="pt-4 font-semibold text-center text-sm sm:text-base text-slate-900">Metal Production</h3>
            <p className="text-xs sm:text-sm text-slate-500">816 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
            <Handbag strokeWidth={1.5} className="w-10 h-10 text-teal-700 mb-3" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Commerce</h3>
            <p className="text-xs sm:text-sm text-slate-500">2082 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
            <Warehouse strokeWidth={1.5} className="w-10 h-10 text-teal-700 mb-3" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Construction</h3>
            <p className="text-xs sm:text-sm text-slate-500">1520 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
            <img src="/assets/Group.png" alt="" width="40" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900 pt-4">Hotels & Tourism</h3>
            <p className="text-xs sm:text-sm text-slate-500">1022 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
            <GraduationCap strokeWidth={1.5} className="w-10 h-10 text-teal-700 mb-3" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Education</h3>
            <p className="text-xs sm:text-sm text-slate-500">1496 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
          <img src="/assets/Clip path group.png" alt="" width="40" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900 p-4">Financial Services</h3>
            <p className="text-xs sm:text-sm text-slate-500">1529 Jobs</p>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-4 cursor-pointer">
            <Bus strokeWidth={1.5} className="w-10 h-10 text-teal-700 mb-3" />
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Transport</h3>
            <p className="text-xs sm:text-sm text-slate-500">1244 Jobs</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
