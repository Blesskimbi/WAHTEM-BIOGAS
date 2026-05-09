import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon, Clock, MessageSquare, Send, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import { cn } from '../lib/utils';

export default function Booking() {
  const { t } = useLanguage();
  const [date, setDate] = useState<any>(new Date());
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Industrial Biodigester',
    'Residential Biogas',
    'Epoxy Flooring Installation',
    'Waste-to-Energy Consultancy',
    'Maintenance Protocol'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    const whatsappUrl = `https://wa.me/237673018629?text=Hello Doni's Biofils. I'd like to book a ${formData.service} consultation for ${date.toDateString()}. Client: ${formData.name}`;
    setTimeout(() => window.open(whatsappUrl, '_blank'), 2000);
  };

  return (
    <section id="booking" className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-forest font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t({ en: 'Work with the best', fr: 'Travailler avec les meilleurs' })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-deep mb-6 md:mb-8 tracking-tighter leading-[1.05] md:leading-[0.95]">
              {t({ en: 'Secure Your Engineering Consultation', fr: 'Sécurisez Votre Consultation' })}
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-10 md:mb-12 leading-relaxed">
              {t({ 
                en: 'Our lead engineers review every project personally. Schedule a slots to discuss technical specifications, site readiness, and environmental impact assessments.', 
                fr: 'Nos ingénieurs principaux examinent chaque projet personnellement.' 
              })}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-brand-lime/20 rounded-xl flex items-center justify-center text-brand-forest mb-4">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-deep mb-2">Technical Vetting</h4>
                  <p className="text-xs text-slate-500">Project scope and site analysis.</p>
               </div>
               <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-brand-forest/10 rounded-xl flex items-center justify-center text-brand-forest mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-deep mb-2">Certified Quote</h4>
                  <p className="text-xs text-slate-500">Detailed BOQ and timelines.</p>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(4,65,48,0.15)] border border-slate-100 relative"
          >
            {step === 1 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-brand-forest text-white text-xs flex items-center justify-center font-mono">STEP_01</span>
                    {t({ en: 'Timeline Selection', fr: 'Sélection du Calendrier' })}
                  </h3>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2rem] shadow-inner flex justify-center">
                  <Calendar 
                    onChange={setDate} 
                    value={date} 
                    className="border-none rounded-2xl w-full bg-transparent font-sans"
                    minDate={new Date()}
                  />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-5 bg-brand-forest text-white rounded-full font-bold shadow-xl shadow-brand-forest/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  {t({ en: 'Confirm Date & Proceed', fr: 'Confirmer et Continuer' })}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                   <span className="w-10 h-10 rounded-full bg-brand-forest text-white text-xs flex items-center justify-center font-mono">STEP_02</span>
                   {t({ en: 'Project Protocol', fr: 'Protocole de Projet' })}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Authorized Contact</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Engineer / Owner Name"
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-lime outline-none transition-all"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="contact@company.com"
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-lime outline-none transition-all"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Engineering Segment</label>
                  <select 
                    required
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-lime outline-none transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Department...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">Operational Scope (Description)</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly detail the site conditions and requirements..."
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-lime outline-none transition-all resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setStep(1)} className="px-8 py-4 border-2 border-slate-100 rounded-full font-bold text-slate-400 hover:text-brand-forest hover:border-brand-forest transition-all">Back</button>
                  <button type="submit" className="flex-1 py-5 bg-brand-forest text-white rounded-full font-bold shadow-xl shadow-brand-forest/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    {t({ en: 'Secure Consultation', fr: 'Sécuriser la Consultation' })}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6"
              >
                <div className="w-24 h-24 bg-brand-lime rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-brand-lime/40">
                  <Check className="w-12 h-12 text-brand-forest" />
                </div>
                <h3 className="text-4xl font-display font-bold text-brand-forest tracking-tight">Access Granted</h3>
                <p className="text-slate-500 max-w-xs mx-auto">Redirecting to the primary engineering channel (WhatsApp) for protocol validation...</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
