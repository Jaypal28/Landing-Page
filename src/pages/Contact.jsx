import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import PageBackground from '../components/PageBackground';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';



function ContactInfoItem({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 text-teal-650 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-slate-900 font-display mb-1">{title}</h3>
        <p className="text-slate-500 text-sm font-semibold">{detail}</p>
      </div>
    </div>
  );
}


function FormField({ label, type = "text", placeholder, required = false, isTextarea = false }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-bold text-slate-800">{label}</label>
      {isTextarea ? (
        <textarea 
          placeholder={placeholder} 
          className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 h-28  text-sm shadow-2xs w-full "
          required={required}
        />
      ) : (
        <Input 
          type={type} 
          placeholder={placeholder} 
          className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 h-11  text-sm shadow-2xs w-full"
          required={required}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const contactDetails = [
    { icon: Phone, title: "Call for inquiry", detail: "+257 388-6895" },
    { icon: Mail, title: "Send us email", detail: "kramulous@sbcglobal.net" },
    { icon: Clock, title: "Opening hours", detail: "Mon - Fri: 10AM - 10PM" },
    { icon: MapPin, title: "Office", detail: "19 North Road Piscataway, NY 08854" }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between">
      <PageBackground />
      <Header />

    
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-12 text-center max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">Contact Us</h1>
      </div>

      <div className="relative w-full bg-white text-slate-700 py-16 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
      
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
            <div className="flex flex-col text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display mb-5">
                You Will Grow, You Will Succeed. We Promise That
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10">
                Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {contactDetails.map((item, idx) => (
                  <ContactInfoItem 
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
              </div>
            </div>

            <Card className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xs text-left flex-col md:flex-col items-stretch justify-start gap-0 hover:shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 font-display text-center mb-1">Contact Info</h3>
              <p className="text-slate-400 text-xs font-semibold text-center mb-8">Nibh dis faucibus proin lacus tristique</p>

              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="First Name" placeholder="Your name" required />
                  <FormField label="Last Name" placeholder="Your last name" required />
                </div>

                <FormField label="Email Address" type="email" placeholder="Your E-mail address" required />         
               <FormField label="Message" placeholder="Your message..." isTextarea required />

                <div className="pt-2">
                  <Button  type="submit"> Send Message</Button>
                </div>
              </form>
            </Card>

          </div>

         <div className="mt-16 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56957.53322436615!2d80.96827790373307!3d26.844855565150674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1782710993852!5m2!1sen!2sin" 
    className="w-full h-72 md:h-96 lg:h-[448px]"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

          <div className="mt-16 py-8 border-t border-slate-100 flex flex-wrap justify-around items-center gap-6 opacity-35 hover:opacity-55 transition-opacity">              
            <img 
              src="/assets/Vector.png"   alt="Zoom"   className="h-3 w-auto object-contain" />
            {/* Tinder */}
            <img 
              src="/assets/tinder.png"
              alt="Tinder" 
              className="h-7 w-auto object-contain" 
            />
            {/* Dribbble */}
            <img 
              src="/assets/dribble.png"  alt="Dribbble"  className="h-7 w-auto object-contain"             />
            {/* Asana */}
            <img 
              src="/assets/asana2.png"
              alt="Asana" 
              className="h-7 w-auto object-contain" 
            />

         </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
