import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export default function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Industrial', 'Residential', 'Farms', 'Hotels'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-forest font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t({ en: 'Our Projects', fr: 'Nos Projets' })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-deep tracking-tight">
              {t({ en: 'Case Studies of Bio-Innovation', fr: 'Études de Cas de Bio-Innovation' })}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                  filter === cat 
                    ? "bg-brand-forest text-white shadow-xl shadow-brand-forest/20" 
                    : "bg-white text-brand-forest border border-slate-200 hover:border-brand-lime"
                )}
              >
                {cat === 'All' ? t({ en: 'All Projects', fr: 'Tous les Projets' }) : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={t(project.title)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                   <div className="mb-4">
                      <span className="px-3 py-1 bg-brand-lime text-brand-forest text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {project.category}
                      </span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                     {t(project.title)}
                   </h3>
                   <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     {t(project.description)}
                   </p>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Icons.Maximize2 className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-deep/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src={selectedImage}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center text-white">
                <Icons.X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
