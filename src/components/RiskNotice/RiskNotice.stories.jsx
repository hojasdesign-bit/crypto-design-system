import { RiskNotice } from './RiskNotice.jsx';

export default {
  title: 'Comercio/RiskNotice',
  component: RiskNotice,
};

export const PorDefecto = {
  args: {
    text: 'Las criptomonedas son activos volátiles. El valor de tu inversión puede subir o bajar y podrías perder parte o la totalidad del capital invertido.',
  },
};

export const Personalizado = {
  args: {
    title: 'Importante',
    text: 'Verifica siempre la dirección de tu billetera antes de confirmar. Las transacciones en blockchain son irreversibles.',
  },
};
