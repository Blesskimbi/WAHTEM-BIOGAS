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
    image: '/images/biofil-1.jpg'
  },
  {
    id: 'biogas',
    title: { en: 'Biogas Systems', fr: 'Systèmes de Biogaz' },
    description: {
      en: 'Renewable energy solutions providing clean cooking gas and electricity for sustainable living.',
      fr: 'Solutions d\'énergie renouvelable fournissant du gaz de cuisson propre et de l\'électricité.'
    },
    icon: 'Flame',
    image: '/images/biofil-2.jpg'
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
    image: '/images/biofil-3.jpg',
    description: { en: 'Biofil installation in progress.', fr: 'Installation de biofil en cours.' }
  },
  {
    id: '2',
    title: { en: 'High-Gloss Industrial Epoxy', fr: 'Époxy Industriel Haute Brillance' },
    category: 'Industrial',
    image: '/images/biofil-4.jpg',
    description: { en: 'Bio-toilet construction site.', fr: 'Chantier de construction de bio-toilettes.' }
  },
  {
    id: '3',
    title: { en: 'Farm-Scale Biogas Plant', fr: 'Usine de Biogaz à l\'Échelle de la Ferme' },
    category: 'Farms',
    image: '/images/biofil-5.jpg',
    description: { en: 'Sustainable bio-toilet solution.', fr: 'Solution de bio-toilette durable.' }
  },
];

export const STATS: Stat[] = [
  { label: { en: 'Projects Completed', fr: 'Projets Terminés' }, value: '250', suffix: '+' },
  { label: { en: 'Gas Produced', fr: 'Gaz Produit' }, value: '50k', suffix: 'm³' },
  { label: { en: 'CO2 Saved', fr: 'CO2 Économisé' }, value: '120', suffix: 'Tons' },
  { label: { en: 'Happy Clients', fr: 'Clients Satisfaits' }, value: '180', suffix: '+' }
];
