import { useState } from 'react';
import { PowerSearch } from './PowerSearch.jsx';

export default {
  title: 'Formularios/PowerSearch',
  component: PowerSearch,
};

const SCOPES = [
  { id: 'ofertas', label: 'Ofertas' },
  { id: 'traders', label: 'Traders' },
  { id: 'ordenes', label: 'Órdenes' },
];

const SUGERENCIAS = [
  { id: 's1', label: 'Comprar USDC con CUP', hint: 'Mercado P2P', scope: 'ofertas' },
  { id: 's2', label: 'Vender USDT por Zelle', hint: 'Mercado P2P', scope: 'ofertas' },
  { id: 's3', label: 'Camila Prieto', hint: '100% completadas', scope: 'traders' },
  { id: 's4', label: 'Jorge Pérez', hint: '3.102 operaciones', scope: 'traders' },
  { id: 's5', label: 'Orden #4821', hint: 'En curso', scope: 'ordenes' },
  { id: 's6', label: 'Guía de escrow', hint: 'Ayuda' },
];

const RECIENTES = ['USDC CUP', 'Zelle', 'Camila Prieto'];

function Demo({ scopes = SCOPES, suggestions = SUGERENCIAS, recents = RECIENTES }) {
  const [ultima, setUltima] = useState(null);
  return (
    <div>
      <PowerSearch
        scopes={scopes}
        suggestions={suggestions}
        recents={recents}
        placeholder="Buscar ofertas, traders u órdenes…"
        onSearch={(query, scopeId) => setUltima(`Búsqueda: «${query}» en ${scopeId || 'todo'}`)}
        onSelect={(item) => setUltima(`Elegido: ${item.label}`)}
      />
      <p style={{ margin: '12px 0 0', color: 'var(--cds-muted)', fontSize: 'var(--cds-text-body-sm)' }}>
        {ultima || 'Pulsa en el campo para ver los recientes; escribe para filtrar.'}
      </p>
    </div>
  );
}

export const Completo = {
  render: () => <Demo />,
};

export const SinAmbitos = {
  render: () => <Demo scopes={[]} />,
};

export const SoloRecientes = {
  render: () => <Demo suggestions={[]} recents={RECIENTES} />,
};

export const Vacio = {
  render: () => <Demo suggestions={[]} recents={[]} />,
};
