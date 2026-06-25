import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <div className="w-full relative bg-white text-slate-900 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-black rounded-3xl overflow-hidden min-h-80 flex items-center border border-slate-800 shadow-xl mt-10">
          <div   className="img-Style absolute inset-0 bg-cover bg-right sm:bg-center opacity-60 sm:opacity-80 pointer-events-none md:block hidden" ></div>
          <div  className="banner-bg absolute inset-0 bg-cover bg-right sm:bg-center opacity-40 pointer-events-none md:hidden block">

          </div>
          
          <div className="absolute inset-0 bg-linear-to-r from-black via-red to-transparent z-0"></div>
          <div className="relative z-10 max-w-xl px-8 py-12 sm:px-12 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Create A Better <br className="hidden sm:inline" /> Future For Yourself
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus..
            </p>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-bold h-11 px-6 rounded-lg mt-6 shadow-md transition-all duration-200 cursor-pointer">
              <Link to="/">Search Job</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
