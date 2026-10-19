import { HeroPanel } from './HeroPanel.jsx';

export default {
  title: 'Comercio/HeroPanel',
  component: HeroPanel,
};

export const PorDefecto = {
  render: () => (
    <HeroPanel>
      <h2 style={{ margin: 0, fontSize: 'var(--cds-text-h2)', letterSpacing: 'var(--cds-tracking-tight)' }}>
        Compra crypto en minutos
      </h2>
      <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 'var(--cds-text-body-lg)', lineHeight: 1.6 }}>
        Más de 50 criptomonedas disponibles con tu tarjeta, transferencia o Apple Pay.
      </p>
      <button
        type="button"
        style={{
          padding: '15px 32px',
          border: 0,
          borderRadius: 'var(--cds-radius-sm)',
          background: 'var(--cds-gradient-accent)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 'var(--cds-text-body)',
          cursor: 'pointer',
        }}
      >
        Empezar ahora
      </button>
    </HeroPanel>
  ),
};
