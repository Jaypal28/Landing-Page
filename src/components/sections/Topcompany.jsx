
import { Button } from "@/components/ui/button";

export default function Topcompany() {
  return (
    <div className="w-full relative bg-teal-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="text-center ">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Top Company</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="w-full bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-between hover:shadow-md hover:border-teal-500/20 transition p-6 sm:p-8 cursor-pointer min-h-[300px]">
            <div className='p-2 m-2'>
              <img src="/assets/Icon+ bg.png" alt="insta" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold text-sm sm:text-base text-slate-900">Instagram</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-3">Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</p>
            </div>
            <Button
              className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer"
            >
              3 open jobs
            </Button>
          </div>

          <div className="w-full bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-between hover:shadow-md hover:border-teal-500/20 transition p-6 sm:p-8 cursor-pointer min-h-[300px]">
            <div className='w-14 h-14 bg-black rounded p-1 m-4 flex items-center justify-center'>
              <img src="/assets/Icon+ bg (1).png" alt="tesla" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold text-sm sm:text-base text-slate-900">Tesla</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-3">At pellentesque amet odio cras imperdiet nisl.Ac magna aliquet massa leo</p>
            </div>
            <Button className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer">
              10 open jobs
            </Button>
          </div>

          <div className="w-full bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-between hover:shadow-md hover:border-teal-500/20 transition p-6 sm:p-8 cursor-pointer min-h-[300px]">
            <div className='h-14 w-14 bg-black rounded p-1 m-4 flex items-center justify-center'>
              <img src="/assets/Icon+ bg (2).png" alt="mcdonalds" /> 
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold text-sm sm:text-base text-slate-900">Mc Donald's</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-3">Odio aliquet tellus tellus masecenas. Faucibus in viverra venenatis phasellus</p>
            </div>
            <Button className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer">
              12 open jobs
            </Button>
          </div>

          <div className="w-full bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-between hover:shadow-md hover:border-teal-500/20 transition p-6 sm:p-8 cursor-pointer min-h-[300px]">
            <div className='w-14 h-14 bg-black rounded p-1 m-4 flex items-center justify-center' > 
              <img src="/assets/Icon+ bg (3).png" alt="apple" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold text-sm sm:text-base text-slate-900">Apple</h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-3">Et odio sem tellus ultrices posures consequet .Tristique nascetur sapien</p>
            </div>
            <Button className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer">
              3 open jobs
            </Button>
          </div> 
        </div>
      </div>
    </div>
  );
}
