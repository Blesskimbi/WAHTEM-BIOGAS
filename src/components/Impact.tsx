import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Globe2, Wind, Recycle, Users2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Impact() {
  const { t } = useLanguage();

  const metrics = [
    { 
      label: { en: 'Renewable Gas Generated', fr: 'Gaz Renouvelable Généré' }, 
      value: '1.2M', 
      unit: 'm³', 
      icon: Wind, 
      color: 'bg-blue-500/10 text-blue-600' 
    },
    { 
      label: { en: 'Organic Waste Recycled', fr: 'Déchets Organiques Recyclés' }, 
      value: '450', 
      unit: 'Tons', 
      icon: Recycle, 
      color: 'bg-green-500/10 text-green-600' 
    },
    { 
      label: { en: 'Annual CO₂ Reduction', fr: 'Réduction Annuelle de CO₂' }, 
      value: '3.8K', 
      unit: 'Tons', 
      icon: Globe2, 
      color: 'bg-brand-lime/20 text-brand-forest' 
    },
    { 
      label: { en: 'Communities Empowered', fr: 'Communautés Autonomisées' }, 
      value: '22', 
      unit: 'Regions', 
      icon: Users2, 
      color: 'bg-purple-500/10 text-purple-600' 
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-brand-forest font-bold uppercase tracking-[0.2em] text-xs mb-4">
              {t({ en: 'Sustainability First', fr: 'La Durabilité D\'abord' })}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t({ en: 'Measurable Impact For A Greener Africa', fr: 'Impact Mesurable Pour Une Afrique Plus Verte' })}
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              {t({ 
                en: 'Our engineering solutions aren\'t just technical—they\'re environmental game-changers. We track every cubic meter of gas produced and every ton of waste diverted to ensure we meet global sustainability standards.', 
                fr: 'Nos solutions d\'ingénierie ne sont pas seulement techniques, elles changent la donne environnementale. Nous suivons chaque mètre cube de gaz produit.' 
              })}
            </p>
            
            <div className="space-y-4">
               <div className="p-6 bg-brand-surface rounded-2xl border-l-4 border-brand-lime">
                  <p className="text-lg font-bold text-brand-forest mb-1">UN Sustainable Development Goals</p>
                  <p className="text-sm text-slate-500 italic">Alignment with Goal 7 (Affordable Clean Energy) & Goal 13 (Climate Action).</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-slate-100 shadow-sm rounded-3xl flex flex-col items-center text-center gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", m.color)}>
                  <m.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-brand-deep">{m.value} <span className="text-sm font-sans font-medium text-slate-400">{m.unit}</span></p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">{t(m.label)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
