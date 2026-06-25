import { Link } from 'react-router-dom';
import blogImage from '../../assets/blog_image.png';
import blogImage2 from '../../assets/blog_image2.png';

export default function NewsBlog() {
  return (
    <div className="w-full relative bg-white text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              News and Blog
            </h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base font-medium max-w-xl">
              Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
            </p>
          </div>
          <div className="text-left">
            <Link to="/" className="text-teal-600 hover:text-teal-800 font-bold text-sm sm:text-base transition-colors duration-200 underline">
              View all
            </Link>
          </div>
        </div>
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">       
          {/* Blog Card 1 */}
          <div className="group flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-3xl aspect-16/10 border border-slate-100/50 shadow-sm">
              <span className="absolute top-4 left-4 z-10 bg-[#0d9488] text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-sm">
                News
              </span>
              <img 
                src={blogImage} 
                alt="Job Search Resources" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="text-left mt-2 px-1">
              <p className="text-slate-400 text-xs sm:text-sm font-medium">30 March 2024</p>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2.5 leading-snug group-hover:text-[#0d9488] transition-colors duration-200">
                <Link to="/">Revitalizing Workplace Morale: Innovative Strategies for Boosting Employee Engagement In 2024</Link>
              </h3>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="group flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-3xl aspect-16/10 border border-slate-100/50 shadow-sm">
              <span className="absolute top-4 left-4 z-10 bg-[#0d9488] text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-sm">
                Blog
              </span>
              <img 
                src={blogImage2} 
                alt="Developer Growth" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="text-left mt-2 px-1">
              <p className="text-slate-400 text-xs sm:text-sm font-medium">30 March 2024</p>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2.5 leading-snug group-hover:text-[#0d9488] transition-colors duration-200">
                <Link to="/">Top Six Most Common Job Interview Mistakes and How to Avoid Them Easily</Link>
              </h3>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
