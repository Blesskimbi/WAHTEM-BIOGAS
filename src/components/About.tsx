import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { STATS } from '../constants';
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const points = [
    { en: 'Expertise in Biotech Engineering', fr: 'Expertise en Ingénierie Biotechnologique' },
    { en: 'Industrial-Grade Epoxy Systems', fr: 'Systèmes Époxy Industriels' },
    { en: 'Custom Waste-to-Energy Design', fr: 'Conception de Valorisation des Déchets' },
    { en: 'On-Site Technical Supervision', fr: 'Supervision Technique sur Site' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Construction Photo */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-[4/5]">
               <img 
                 src="https://images.unsplash.com/photo-1581094281212-d19338ad7621?auto=format&fit=crop&q=80&w=800" 
                 alt="Professional Engineering on Site" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
            </div>

            {/* Inset worker photo */}
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-10 -right-10 w-64 h-64 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-20"
            >
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                 alt="Team in action" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </motion.div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-lime/10 blur-[120px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-forest font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t({ en: 'Rooted in Africa, Built for the World', fr: 'Ancré en Afrique, Conçu pour le Monde' })}
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-deep mb-8 tracking-tighter leading-[0.95]">
              {t({ 
                en: 'Engineering Excellence at Every Depth', 
                fr: 'Excellence en Ingénierie à Chaque Profondeur' 
              })}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t({ 
                en: 'WAHTEM is more than a service provider; we are your partners in ecological transition. From the rural farms of Bafoussam to the industrial hubs of Douala, our engineers are on the ground, ensuring every biodigester and epoxy floor meets the highest professional standards.', 
                fr: 'WAHTEM est plus qu\'un prestataire de services ; nous sommes vos partenaires dans la transition écologique.' 
              })}
            </p>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-forest">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{t(point)}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-brand-forest rounded-[2.5rem] text-white flex items-center justify-between shadow-xl shadow-brand-forest/20">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-forest bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="Expert" />
                    </div>
                 ))}
               </div>
               <div className="text-right">
                  <p className="text-2xl font-display font-bold text-brand-lime">100% Safety</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Professional Compliance</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
