import { TocNav } from './TocNav.jsx';

export default { title: 'Contenido/TocNav', component: TocNav };

export const PorDefecto = {
  args: {
    title: 'En esta página',
    links: [
      { href: '#que-es-peetoo', label: 'Qué es peetoo' },
      { href: '#demo-y-datos-de-muestra', label: 'Demo y datos de muestra' },
      { href: '#privacidad', label: 'Privacidad' },
      { href: '#compras-con-swapped', label: 'Compras con Swapped' },
      { href: '#responsabilidad', label: 'Responsabilidad' },
    ],
  },
};
