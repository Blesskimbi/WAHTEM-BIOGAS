import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Nkwain Festus',
      role: 'Farm Manager, Bafoussam',
      content: { 
        en: "The biodigester installed by Doni's Biofils has halved our energy costs. Their technical team is extremely professional and responsive.", 
        fr: "Le biodigesteur installé par Doni's Biofils a réduit de moitié nos coûts énergétiques. Leur équipe technique est extrêmement professionnelle." 
      },
      rating: 5
    },
    {
      name: 'Sarah Mbarga',
      role: 'Hotel Owner, Douala',
      content: { 
        en: 'Our kitchen now runs entirely on biogas. It was the best investment we made for sustainability this year.', 
        fr: 'Notre cuisine fonctionne désormais entièrement au biogaz. C\'était le meilleur investissement durable de cette année.' 
      },
      rating: 5
    },
    {
      name: 'Jean-Paul Kamga',
      role: 'Industrial Engineer',
      content: { 
        en: 'The quality of the epoxy flooring in our warehouse is remarkable. Durable, glossy, and perfectly leveled.', 
        fr: 'La qualité du revêtement de sol en époxy dans notre entrepôt est remarquable. Durable et parfait.' 
      },
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-forest font-bold uppercase tracking-[0.2em] text-xs mb-4">
            {t({ en: 'Success Stories', fr: 'Histoires de Succès' })}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t({ en: 'What Our Clients Say', fr: 'Ce Que Disent Nos Clients' })}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm relative group hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-lime/10 group-hover:text-brand-lime/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-lime text-brand-lime" />
                ))}
              </div>

              <p className="text-lg text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "{t(r.content)}"
              </p>

              <div>
                <p className="font-bold text-brand-forest">{r.name}</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
