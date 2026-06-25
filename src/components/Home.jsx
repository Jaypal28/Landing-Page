import Header from './Header';
import Main from './Main';
import RecentJobs from './sections/RecentJobs';
import BrowseCategory from './sections/BrowseCategory';
import CompanyLife from './sections/CompanyLife';
import CtaBanner from './sections/CtaBanner';
import Testimonials from './sections/Testimonials';
import NewsBlog from './sections/NewsBlog';
import Footer from './sections/Footer';
import { SpotifyLogo, SlackLogo, AdobeLogo, AsanaLogo, LinearLogo } from './Logos';
import PageBackground from './PageBackground';

export default function Home() {
  return (
    <div className=" w-full min-h-screen overflow-x-hidden bg-black-222 text-white font-sans flex flex-col justify-between">
      <PageBackground />
      <Header/>
      <Main/>
     
      <div className="z-10 w-full bg-black mt-7 py-7">
        <div className="w-full px-6 sm:px-12">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
            
            <div className="flex w-full sm:w-auto gap-2 justify-center sm:justify-start"> 
              <SpotifyLogo className="w-6 h-6 text-blue-100 hover:text-white" />
              <span className="font-bold text-blue-100 hover:text-white text-lg font-display tracking-tight ">Spotify</span>
            </div>
            
            <div className="flex w-full sm:w-auto gap-2 justify-center sm:justify-start"> 
              <SlackLogo className="h-6 w-auto text-blue-100 hover:text-white" />
              <span className="font-bold text-blue-100 hover:text-white text-lg font-display tracking-tight">slack</span>
            </div>

            <div className="flex w-full sm:w-auto gap-2 justify-center sm:justify-start"> 
              <AdobeLogo className="h-6 w-auto text-blue-100 hover:text-white" />
              <span className="font-bold text-blue-100 hover:text-white text-lg font-display tracking-tight" >Adobe</span>
            </div>
            
            <div className="flex w-full sm:w-auto gap-2 justify-center sm:justify-start">
              <AsanaLogo className="h-5 w-auto mt-1 text-blue-100 hover:text-white" />
              <span  className="font-bold text-blue-100 hover:text-white text-lg font-display tracking-tight" >asana</span>
            </div> 
            
            <div className="flex w-full sm:w-auto gap-2 justify-center sm:justify-start">
              <LinearLogo className="w-6 h-6 text-blue-100 hover:text-white" />
              <span className="font-bold text-blue-100 hover:text-white text-lg font-display tracking-tight">Linear</span>
            </div>              
          </div>
        </div>
      </div>

      <RecentJobs />
      <BrowseCategory />
      <CompanyLife />
      <CtaBanner />
      <Testimonials />
      <NewsBlog />
      <Footer/>
    </div>
  );
}
