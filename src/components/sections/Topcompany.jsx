
import { Button } from "@/components/ui/button";

export default function BrowseCategory() {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  sm:gap-6">
          <div className="w-full aspect-square  bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-9 cursor-pointer">
         <div className='  p-3 m-3'>
          <img src="\assets\Icon+ bg.png" alt="insta" />
          </div>
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Instagram</h3>
            <p className="text-xs sm:text-sm text-slate-500">Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</p>
            <Button
              className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer"
            >3 open jobs</Button>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-9 cursor-pointer">
            <div className='w-14 h-14 bg-black rounded p-3 m-3'>
              <img src="\assets\Icon+ bg (1).png" alt="tesla" />
            </div>
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Tesla</h3>
            <p className="text-xs sm:text-sm text-slate-500">At pellentesque amet odio cras imperdiet nisl.Ac magna aliquet massa leo</p>
            <Button className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer">10 open jobs</Button>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-9 cursor-pointer">
            <div className='h-14 w-14 bg-black rounded p-3  m-3'>
             <img src="\assets\Icon+ bg (2).png" alt="" /> 
              </div>
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Mc Donald's</h3>
            <p className="text-xs sm:text-sm text-slate-500">Odio aliquet tellus tellus masecenas. Faucibus in viverra venenatis phasellus</p>
            <Button className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer">12 open jobs</Button>
          </div>

          <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:border-teal-500/20 transition p-10  cursor-pointer">
         <div className='w-14 h14 bg-black rounded p-3 m-2' > 
         <img src="\assets\Icon+ bg (3).png" alt="" />
         
          </div>
            <h3 className="font-semibold text-center text-sm sm:text-base text-slate-900">Apple</h3>
            <p className="text-xs sm:text-sm text-slate-500">Et odio sem tellus ultrices posures consequet .Tristique nascetur sapien</p>
            <Button className="bg-teal-50 text-teal-600 border border-teal-100/30 hover:bg-teal-100 mt-5 font-semibold text-xs py-1 px-3 h-8 rounded-lg shadow-none cursor-pointer">3 open jobs</Button>
          </div> 
        </div>
      </div>
    </div>
  );
}
