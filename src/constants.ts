import { Service, Project, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'biodigester',
    title: { en: 'Biodigester Design & Installation', fr: 'Conception et Installation de Biodigesteurs' },
    description: { 
      en: 'High-performance waste-to-energy systems for homes, farms, and industries across Cameroon.',
      fr: 'Systèmes de transformation des déchets en énergie haute performance pour les maisons, les fermes et les industries au Cameroun.'
    },
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'biogas',
    title: { en: 'Biogas Systems', fr: 'Systèmes de Biogaz' },
    description: {
      en: 'Renewable energy solutions providing clean cooking gas and electricity for sustainable living.',
      fr: 'Solutions d\'énergie renouvelable fournissant du gaz de cuisson propre et de l\'électricité.'
    },
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'epoxy',
    title: { en: 'Epoxy Flooring & Coatings', fr: 'Revêtements et Sols en Époxy' },
    description: {
      en: 'Durable, premium industrial and residential flooring solutions with high-gloss finishes.',
      fr: 'Solutions de revêtement de sol industrielles et résidentielles durables et haut de gamme avec des finitions brillantes.'
    },
    icon: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1558231575-f55a156291a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fertilizer',
    title: { en: 'Organic Fertilizer Solutions', fr: 'Solutions d\'Engrais Organiques' },
    description: {
      en: 'Eco-friendly nutrient solutions derived from biodigester effluent for agriculture.',
      fr: 'Solutions nutritives écologiques dérivées de l\'effluent des biodigesteurs pour l\'agriculture.'
    },
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1592982537447-74407bfe174e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waste',
    title: { en: 'Waste Management Systems', fr: 'Systèmes de Gestion des Déchets' },
    description: {
      en: 'Innovative circular economy solutions for organic waste recycling in urban centers.',
      fr: 'Solutions innovantes d\'économie circulaire pour le recyclage des déchets organiques.'
    },
    icon: 'Recycle',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'consultancy',
    title: { en: 'Engineering Consultancy', fr: 'Conseil en Ingénierie' },
    description: {
      en: 'Expert biotech engineering advice for sustainable projects across Africa.',
      fr: 'Conseils d\'experts en ingénierie biotechnologique pour des projets durables à travers l\'Afrique.'
    },
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: { en: 'Industrial Biodigester Construction', fr: 'Construction de Biodigesteur Industriel' },
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: { en: 'Large scale waste-to-energy plant under construction.', fr: 'Usine de transformation des déchets en énergie à grande échelle.' }
  },
  {
    id: '2',
    title: { en: 'High-Gloss Industrial Epoxy', fr: 'Époxy Industriel Haute Brillance' },
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    description: { en: 'Premium warehouse flooring solution.', fr: 'Revêtement de sol pour entrepôt haut de gamme.' }
  },
  {
    id: '3',
    title: { en: 'Farm-Scale Biogas Plant', fr: 'Usine de Biogaz à l\'Échelle de la Ferme' },
    category: 'Farms',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    description: { en: 'Sustainable energy for livestock farm.', fr: 'Énergie durable pour une ferme d\'élevage.' }
  }
];

export const STATS: Stat[] = [
  { label: { en: 'Projects Completed', fr: 'Projets Terminés' }, value: '250', suffix: '+' },
  { label: { en: 'Gas Produced', fr: 'Gaz Produit' }, value: '50k', suffix: 'm³' },
  { label: { en: 'CO2 Saved', fr: 'CO2 Économisé' }, value: '120', suffix: 'Tons' },
  { label: { en: 'Happy Clients', fr: 'Clients Satisfaits' }, value: '180', suffix: '+' }
];
