'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-[#051036] py-16">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-[#3554D1] font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Have a question or need help? Our team is available 24/7 to assist you.</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-[#051036] mb-6">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Address', value: 'Level 08, A R Tower, 24 Kamal Ataturk Avenue, Banani, Dhaka, Bangladesh' },
                  { icon: Mail, label: 'Email', value: 'hello@tripbooking.ai' },
                  { icon: Phone, label: 'Phone', value: '+88 01992222450' },
                  { icon: Clock, label: 'Support Hours', value: '24/7 — Always Available' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#3554D1]" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-wider">{label}</p>
                      <p className="text-[#051036] font-medium text-sm mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, href: 'https://www.facebook.com/tripbookingai', color: 'hover:bg-blue-600' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/tripbookingai/', color: 'hover:bg-blue-700' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/tripbookingai/', color: 'hover:bg-pink-600' },
                ].map(({ icon: Icon, href, color }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all ${color}`}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
              <img src="https://maps.googleapis.com/maps/api/staticmap?center=Banani,Dhaka&zoom=14&size=400x200&key=DEMO" alt="Map" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="text-center p-6">
                <MapPin className="w-8 h-8 text-[#3554D1] mx-auto mb-2" />
                <p className="text-sm font-bold text-[#051036]">Banani, Dhaka</p>
                <p className="text-xs text-gray-400">A R Tower, Level 08</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-black text-[#051036] mb-6">Send Us a Message</h2>
              {success ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-black text-green-700 text-xl">Message Sent!</p>
                  <p className="text-green-600">We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSuccess(false); setForm({ name: '', email: '', subject: '', message: '' }); }} className="mt-2 text-[#3554D1] font-bold text-sm hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#051036]">Full Name</label>
                      <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="John Doe" className={`w-full px-4 py-3.5 border rounded-xl text-sm outline-none transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`} />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#051036]">Email Address</label>
                      <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="hello@example.com" className={`w-full px-4 py-3.5 border rounded-xl text-sm outline-none transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`} />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-[#051036]">Subject</label>
                    <input type="text" value={form.subject} onChange={e => set('subject', e.target.value)} placeholder="How can we help?" className={`w-full px-4 py-3.5 border rounded-xl text-sm outline-none transition-all ${errors.subject ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`} />
                    {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-[#051036]">Message</label>
                    <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder="Write your message here..." rows={6} className={`w-full px-4 py-3.5 border rounded-xl text-sm outline-none transition-all resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`} />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#3554D1] text-white py-4 rounded-xl font-black hover:bg-[#2a43b0] transition-all shadow-lg shadow-blue-500/20 disabled:opacity-70 flex items-center justify-center gap-2">
                    {loading ? (
                      <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
                    ) : <><Send className="w-4 h-4" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
