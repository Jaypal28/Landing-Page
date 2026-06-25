import React from 'react';
import { User2, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import {Input}    from './ui/input';

export default function SendMessageForm() {
  return (
    <div className="bg-slate-100 border border-slate-200/80 rounded-2xl p-6 shadow-xs w-full">
      <h2 className="text-xl font-bold text-slate-900 mb-4 font-display">Send Us Message</h2>
      
      <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
        {/* Full name */}
        <div className="relative">
          <User2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            type="text" 
            placeholder="Full name" 
            required
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 text-slate-800 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all"
          />
        </div>

        {/* Email Address */}
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            type="email" 
            placeholder="Email Address" 
            required
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 text-slate-800 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all"
          />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 text-slate-800 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all"
          />
        </div>

        {/* Your Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          <textarea 
            placeholder="Your Message" 
            rows={4}
            required
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 text-slate-800 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all resize-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <Button 
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 rounded-xl text-sm transition-all shadow-xs cursor-pointer h-10"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
