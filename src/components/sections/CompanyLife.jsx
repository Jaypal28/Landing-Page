import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import companyImage from '../../assets/image.png';

export default function CompanyLife() {
  return (
    <div className="w-full relative bg-white text-slate-900 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-slate-100 hover:shadow-lg transition flex items-center justify-center bg-slate-50 aspect-[4/3] md:aspect-auto md:h-full">
              <img src={companyImage} alt="Good Company Life" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl flex flex-col justify-center hover:shadow-lg transition p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">Good Life Begins With A Good Company</h2>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas
                amet faucibus tempor blandit. Elit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean.
                Vulputate praesent congue faucibus in euismod feugiat euismod volutpat...
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button variant="default" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm cursor-pointer">
                  Search Job
                </Button>
                <Link to="#" className="text-teal-700 hover:text-teal-900 font-semibold underline text-sm">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Clients stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-center hover:shadow-md transition">
              <h3 className="text-3xl font-extrabold text-teal-600">14k+</h3>
              <h4 className="font-bold text-slate-800 mt-2">Clients worldwide</h4>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum..
              </p>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-center hover:shadow-md transition">
              <h3 className="text-3xl font-extrabold text-teal-600">12k+</h3>
              <h4 className="font-bold text-slate-800 mt-2">Jobs filled</h4>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum..
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-center hover:shadow-md transition">
              <h3 className="text-3xl font-extrabold text-teal-600">20k+</h3>
              <h4 className="font-bold text-slate-800 mt-2">Active resumes</h4>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
