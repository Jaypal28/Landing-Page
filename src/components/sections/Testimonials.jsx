import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="w-full relative bg-white text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Testimonials from Our Customers
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight text-left">
                Amazing services
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-3 text-left">
                Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-slate-50 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tl from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                    <img src="\assets\Avatar.png" alt="img" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Marco Kihn</h4>
                  <p className="text-slate-400 text-xs font-medium">Happy Client</p>
                </div>
              </div>
              <Quote strokeWidth={1.5} className="w-8 h-8 text-teal-400/20 group-hover:text-teal-400/40 transition-colors duration-300" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight text-left">
                Everything simple
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-3 text-left">
                Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-slate-50 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-pink-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                    <img src="\assets\Avatar.png" alt="img" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Kristin Hester</h4>
                  <p className="text-slate-400 text-xs font-medium">Happy Client</p>
                </div>
              </div>
              <Quote strokeWidth={1.5} className="w-8 h-8 text-teal-400/20 group-hover:text-teal-400/40 transition-colors duration-300" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
                <Star strokeWidth={1.5} className="w-4 h-4 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight text-left">
                Awesome, thank you!
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-3 text-left">
                Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-slate-50 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                     <img src="\assets\Avatar.png" alt="img" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 text-sm">Zion Cisneros</h4>
                  <p className="text-slate-400 text-xs font-medium">Happy Client</p>
                </div>
              </div>
              <Quote strokeWidth={1.5} className="w-8 h-8 text-teal-400/20 group-hover:text-teal-400/40 transition-colors duration-300" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
