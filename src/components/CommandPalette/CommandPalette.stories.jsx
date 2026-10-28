import { useState } from 'react';
import { CommandPalette } from './CommandPalette.jsx';

export default {
  title: 'Superficies/CommandPalette',
  component: CommandPalette,
  argTypes: {
    placeholder: { control: 'text' },
  },
};

const ITEMS = [
  { id: 'comprar-usdc', label: 'Comprar USDC', hint: 'Mercado P2P', section: 'Acciones', icon: '$' },
  { id: 'vender-usdt', label: 'Vender USDT', hint: 'Mercado P2P', section: 'Acciones', icon: '₮' },
  { id: 'crear-oferta', label: 'Crear oferta', hint: 'Publica un anuncio', section: 'Acciones' },
  { id: 'mercado', label: 'Ir al mercado', shortcut: 'G M', section: 'Navegación' },
  { id: 'ordenes', label: 'Ir a mis órdenes', shortcut: 'G O', section: 'Navegación' },
  { id: 'billetera', label: 'Ir a la billetera', shortcut: 'G B', section: 'Navegación' },
  { id: 'base', label: 'Red Base', hint: 'Cadena', section: 'Redes' },
  { id: 'polygon', label: 'Red Polygon', hint: 'Cadena', section: 'Redes' },
];

function Demo({ items = ITEMS, ...args }) {
  const [open, setOpen] = useState(true);
  const [elegido, setElegido] = useState(null);
  return (
    <div style={{ fontFamily: 'var(--cds-font-sans)', color: 'var(--cds-ink-2)' }}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          padding: '10px 18px',
          border: 0,
          borderRadius: 'var(--cds-radius-pill)',
          background: 'var(--cds-accent)',
          color: 'var(--cds-on-accent)',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Abrir paleta
      </button>
      {elegido && <p style={{ marginTop: 12 }}>Elegido: {elegido.label}</p>}
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        onSelect={(item) => {
          setElegido(item);
          setOpen(false);
        }}
        {...args}
      />
    </div>
  );
}

export const PorDefecto = {
  render: () => <Demo />,
};

export const SinResultados = {
  render: () => <Demo items={[]} />,
};

export const SinSecciones = {
  render: () => (
    <Demo
      items={[
        { id: 'a', label: 'Comprar USDC' },
        { id: 'b', label: 'Vender USDT' },
        { id: 'c', label: 'Ver órdenes' },
      ]}
    />
  ),
};
