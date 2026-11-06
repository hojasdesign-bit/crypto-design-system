import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl.jsx';

export default { title: 'Formularios/SegmentedControl', component: SegmentedControl };

// Iconos solo para la historia de iconos (HugeIcons, trazo 1.5, como en
// el selector de tema de peetoo): luna = oscuro, sol = claro,
// sol-luna = sistema.
const MoonIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SunIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M16.9991 12C16.9991 14.7614 14.7605 17 11.9991 17C9.23766 17 6.99908 14.7614 6.99908 12C6.99908 9.23858 9.23766 7 11.9991 7C14.7605 7 16.9991 9.23858 16.9991 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.1247 3.25H11.9997M12.1242 20.75H11.9992M20.75 12.125V12M3.25 12.125V12M18.2752 5.90098L18.1868 5.81259M5.90051 18.275L5.81212 18.1866M18.0987 18.2756L18.187 18.1872M5.72429 5.9012L5.81267 5.81282M12.2497 3.25C12.2497 3.38807 12.1378 3.5 11.9997 3.5C11.8616 3.5 11.7497 3.38807 11.7497 3.25C11.7497 3.11193 11.8616 3 11.9997 3C12.1378 3 12.2497 3.11193 12.2497 3.25ZM12.2492 20.75C12.2492 20.8881 12.1373 21 11.9992 21C11.8611 21 11.7492 20.8881 11.7492 20.75C11.7492 20.6119 11.8611 20.5 11.9992 20.5C12.1373 20.5 12.2492 20.6119 12.2492 20.75ZM20.75 12.25C20.6119 12.25 20.5 12.1381 20.5 12C20.5 11.8619 20.6119 11.75 20.75 11.75C20.8881 11.75 21 11.8619 21 12C21 12.1381 20.8881 12.25 20.75 12.25ZM3.25 12.25C3.11193 12.25 3 12.1381 3 12C3 11.8619 3.11193 11.75 3.25 11.75C3.38807 11.75 3.5 11.8619 3.5 12C3.5 12.1381 3.38807 12.25 3.25 12.25ZM18.3636 5.98937C18.266 6.087 18.1077 6.087 18.01 5.98937C17.9124 5.89174 17.9124 5.73345 18.01 5.63582C18.1077 5.53819 18.266 5.53819 18.3636 5.63582C18.4612 5.73345 18.4612 5.89174 18.3636 5.98937ZM5.9889 18.3634C5.89127 18.461 5.73297 18.461 5.63534 18.3634C5.53771 18.2658 5.53771 18.1075 5.63534 18.0099C5.73297 17.9122 5.89127 17.9122 5.9889 18.0099C6.08653 18.1075 6.08653 18.2658 5.9889 18.3634ZM18.0103 18.364C17.9126 18.2663 17.9126 18.108 18.0103 18.0104C18.1079 17.9128 18.2662 17.9128 18.3638 18.0104C18.4614 18.108 18.4614 18.2663 18.3638 18.364C18.2662 18.4616 18.1079 18.4616 18.0103 18.364ZM5.6359 5.98959C5.53827 5.89196 5.53827 5.73367 5.6359 5.63604C5.73353 5.53841 5.89182 5.53841 5.98945 5.63604C6.08708 5.73367 6.08708 5.89196 5.98945 5.98959C5.89182 6.08722 5.73353 6.08722 5.6359 5.98959Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SunMoonIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M16.5 11.5C16.5 9.567 14.933 8 13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 2.5V4.5M19.5018 4.5L18.0028 5.99902M21.5018 10.5H19.502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 16.5314C16.116 17.0034 15.1064 17.271 14.0343 17.271C10.552 17.271 7.72899 14.448 7.72899 10.9657C7.72899 9.89358 7.99657 8.88398 8.46857 8C5.33406 8.73462 3 11.548 3 14.9065C3 18.8241 6.17586 22 10.0935 22C13.452 22 16.2654 19.6659 17 16.5314Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ComprarVender = {
  render: () => {
    const [v, setV] = useState('buy');
    return (
      <div style={{ width: 340 }}>
        <SegmentedControl
          ariaLabel="Tipo de operación"
          tone="accent"
          options={[
            { value: 'buy', label: 'Comprar' },
            { value: 'sell', label: 'Vender' },
          ]}
          value={v}
          onChange={setV}
        />
      </div>
    );
  },
};

export const TresSegmentos = {
  render: () => {
    const [v, setV] = useState('todo');
    return (
      <div style={{ width: 380 }}>
        <SegmentedControl
          ariaLabel="Filtro"
          options={[
            { value: 'todo', label: 'Todo' },
            { value: 'crypto', label: 'Crypto' },
            { value: 'fiat', label: 'Fíat' },
          ]}
          value={v}
          onChange={setV}
        />
      </div>
    );
  },
};

export const Pequeno = {
  render: () => {
    const [v, setV] = useState('crypto');
    return (
      <div style={{ width: 200 }}>
        <SegmentedControl
          ariaLabel="Mercado Crypto o Divisa"
          size="sm"
          options={[
            { value: 'crypto', label: 'Crypto' },
            { value: 'divisa', label: 'Divisa' },
          ]}
          value={v}
          onChange={setV}
        />
      </div>
    );
  },
};

export const PequenoSoloIconos = {
  render: () => {
    const [v, setV] = useState('oscuro');
    return (
      <div style={{ width: 104 }}>
        <SegmentedControl
          ariaLabel="Tema"
          size="sm"
          options={[
            { value: 'oscuro', label: MoonIcon, ariaLabel: 'Tema oscuro' },
            { value: 'claro', label: SunIcon, ariaLabel: 'Tema claro' },
            { value: 'sistema', label: SunMoonIcon, ariaLabel: 'Tema del sistema' },
          ]}
          value={v}
          onChange={setV}
        />
      </div>
    );
  },
};
