import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import PageBackground from '../components/PageBackground';
import { User2, FileText, BriefcaseBusiness, ShieldCheck, Plus, X, Play, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Reusable Step Card Component (Section 2)
function StepCard({ icon: Icon, title, description }) {
  return (
    <Card className="bg-white border border-slate-100/80 rounded-2xl p-6 shadow-2xs hover:shadow-xs flex flex-col items-center justify-center text-center gap-4 hover:border-teal-500/25 transition-all w-full">
      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">{title}</h3>
        <p className="text-slate-500 text-xs font-semibold leading-relaxed max-w-[200px] mx-auto">{description}</p>
      </div>
    </Card>
  );
}

// Reusable Dark Bar Item Component (Section 3 Bottom)
function BarItem({ number, text }) {
  return (
    <div className="flex items-start gap-4 flex-1 text-left min-w-[184px]">
      <span className="w-7 h-7 bg-teal-500 rounded-lg text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
        {number}
      </span>
      <div>
        <p className="text-white text-xs font-bold leading-snug">{text}</p>
        <Link to="#" className="text-teal-400 hover:text-teal-300 text-[10px] font-bold mt-1.5 inline-block transition-colors">
          Learn more
        </Link>
      </div>
    </div>
  );
}

// Reusable Stateless FAQ Accordion Component (Section 4)
function FaqItem({ number, question, answer, defaultOpen = false }) {
  return (
    <details open={defaultOpen} className="group border-b border-slate-200/80 py-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex items-center justify-between font-bold text-slate-800 text-sm sm:text-base focus:outline-none select-none">
        <div className="flex items-center gap-4">
          <span className="text-teal-650 font-display text-sm font-semibold">{number}</span>
          <span className="text-slate-900 font-display font-bold hover:text-teal-600 transition-colors">{question}</span>
        </div>
        <span className="text-teal-600 rounded-full border border-teal-100 p-1 group-open:hidden hover:bg-teal-50 transition-colors">
          <Plus className="w-4 h-4" />
        </span>
        <span className="text-teal-650 rounded-full border border-teal-100 p-1 hidden group-open:block hover:bg-teal-50 transition-colors">
          <X className="w-4 h-4" />
        </span>
      </summary>
      <div className="mt-3 text-slate-500 text-xs sm:text-sm leading-relaxed pl-9 pr-6 font-medium">
        <p>{answer}</p>
      </div>
    </details>
  );
}

// Reusable Working Feature Component (Section 5 List)
function FeatureItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-slate-800 text-sm font-bold font-display">{text}</span>
    </div>
  );
}

// Reusable Blog Card Component (Section 6)
function BlogCard({ image, category, date, title }) {
  return (
    <Card className="flex flex-col items-start bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all duration-300 w-full hover:border-teal-500/25 md:flex-col md:items-start justify-start gap-4">
      <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden shadow-2xs shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-teal-500 text-white font-bold text-xs px-3 py-1 rounded-lg">
          {category}
        </span>
      </div>
      <div className="flex flex-col gap-2.5 text-left w-full">
        <span className="text-slate-400 text-xs font-bold">{date}</span>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug font-display hover:text-teal-600 transition-colors cursor-pointer">
          {title}
        </h3>
        <Link to="#" className="text-teal-650 hover:text-teal-700 text-xs font-bold mt-2 flex items-center gap-1.5 transition-colors">
          <span>Read more</span>
          <span>→</span>
        </Link>
      </div>
    </Card>
  );
}

export default function AboutUs() {
  const steps = [
    { icon: User2, title: "Create Account", description: "Nunc sed a nisl purus. Nibh dis faucibus proin lacus" },
    { icon: FileText, title: "Upload Resume", description: "Felis eu ultrices class massa. Commodo fringilla sed tempor" },
    { icon: BriefcaseBusiness, title: "Find Jobs", description: "Commodo fringilla sed tempor mus. Nisi enim feugiat enim volutpat" },
    { icon: ShieldCheck, title: "Apply Job", description: "Nisi enim feugiat enim volutpat. Sem quis viverra" }
  ];

  const faqs = [
    { 
      number: "01", 
      question: "Can I upload a CV?", 
      answer: "Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue convallis odio sit erat in. Felis eu ultrices class massa. Commodo fringilla sed tempor mus laoreet ultrices ipsum. Habitant morbi finibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.",
      defaultOpen: true 
    },
    { 
      number: "02", 
      question: "How long will the recruitment process take?", 
      answer: "Sed hendrerit purus id lectus tincidunt feugiat. Cras facilisis dignissim augue lorem amet adipiscing varius fames mauris. Orci imperdiet nisi dignissim pellentesque morbi vitae." 
    },
    { 
      number: "04", 
      question: "Do you recruit for Graduates, Apprentices and Students?", 
      answer: "Quisque tincidunt metus checklist porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa. Tortor varius nam elementum duis blandit elit id sit." 
    },
    { 
      number: "03", 
      question: "What does the recruitment and selection process involve?", 
      answer: "Ornare varius faucibus nisi vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing varius fames mauris. Tortor amet porta proin in." 
    },
    { 
      number: "05", 
      question: "Can I receive notifications for any future jobs that may interest me?", 
      answer: "Habitant morbi finibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc ante morbi diam habitant donec." 
    }
  ];

  const features = [
    { icon: ShieldCheck, text: "Quality Job" },
    { icon: FileText, text: "Resume builder" },
    { icon: BriefcaseBusiness, text: "Top Companies" },
    { icon: Star, text: "Top Talents" }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between">
      <PageBackground />
      <Header />

      <div className="relative z-10 w-full flex flex-col items-center justify-center py-12 text-center max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">About Us</h1>
      </div>

      <div className="relative w-full bg-white text-slate-700 py-16 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display max-w-md text-left leading-tight">
              Et nunc ut tempus duis nisl sed massa
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed text-left max-w-xl">
              Nunc sed a nisl purus. Nunc eleifend mi id purus tristique, sit congue non vitae odio sit amet in. Felis ac ultrices class massa. Commodo fringilla sed tempor mus laoreet ultrices ipsum. Habitant morbi finibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
            </p>
          </div>

          <div className=" w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm mb-20">
            <img 
              src="/assets/banner.png" 
              alt="Workspace Team" 
              className="w-full h-80 md:h-[440px]  object-cover" 
            />
          </div>

          <div className="text-center mb-16 ">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">How it works</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto leading-relaxed font-semibold">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum ut scelerisque rhoncus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {steps.map((step, idx) => (
                <StepCard 
                  key={idx}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[600px] md:h-[440px]  flex flex-col justify-end shadow-sm mb-20 group cursor-pointer border border-slate-200">
            <img 
              src="/assets/image.png" 
              alt="Good Life" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-101 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="flex flex-col items-center gap-6 text-center px-6">
                <div className="w-16 h-16 rounded-full bg-teal-700 hover:bg-800 text-white flex items-center justify-center shadow-lg transition-all duration-300 scale-100 hover:scale-110 shrink-0">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <h2 className=" mb-6 text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight max-w-xl">
                  Good Life Begins With A Good Company
                </h2>
              </div>
            </div>
            
            <div className="relative z-10 w-full bg-slate-950/95 backdrop-blur-xs py-6 px-6 sm:px-10 border-t border-white/5 flex flex-wrap md:flex-nowrap gap-6 justify-between ">
              <BarItem number="1" text="Elit gravida lorem amet porta risus vitae et" />
              <BarItem number="2" text="Volutpat dui lacus mattis urna platea..." />
              <BarItem number="3" text="Elementum faucibus netus gravida lacus lorem" />
            </div>
          
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <p className="text-teal-500 text-xs font-bold tracking-wider uppercase mb-2 text-center">FAQ</p>
            <p className="text-slate-400 text-sm font-semibold max-w-md mx-auto mb-10 text-center leading-relaxed">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
            </p>
            <div className=" border-t border-slate-200/80 text-left">
              {faqs.map((faq, idx) => (
                <FaqItem 
                  key={idx}
                  number={faq.number}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 text-left">
            
            <div className="grid grid-cols-2 gap-4 h-96">
              <img 
                src="/assets/banner.png" 
                alt="Workspace Vertical" 
                className="w-full h-full object-cover rounded-2xl border border-slate-100 shadow-2xs" 
              />
              <div className="flex flex-col gap-4 h-full">
                <img 
                  src="/assets/image.png" 
                  alt="Office Top" 
                  className="h-44 w-full object-cover rounded-2xl border border-slate-100 shadow-2xs" 
                />
                <img 
                  src="/assets/banner.png" 
                  alt="Office Bottom" 
                  className="h-44 w-full object-cover rounded-2xl border border-slate-100 shadow-2xs" 
                />
              </div>
            </div>

            {/* Content list */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display mb-4">
                We're Only Working With The Best
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Ultricies purus dolor viverra vel laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit.
              </p>

              {/* Grid of features */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <FeatureItem 
                    key={idx}
                    icon={feature.icon}
                    text={feature.text}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Section 6: News and Blog */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">News and Blog</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto leading-relaxed font-semibold mb-12">
              Metus faucibus sed turpis lectus feugiat tincidunt. Proin sed a tristique in dolor
            </p>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <BlogCard 
                image="/assets/image.png"
                category="News"
                date="30 March 2024"
                title="Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024"
              />
              <BlogCard 
                image="/assets/banner.png"
                category="Blog"
                date="28 March 2024"
                title="How To Avoid The Top Six Most Common Job Interview Mistakes"
              />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
