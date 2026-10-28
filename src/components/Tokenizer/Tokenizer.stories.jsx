import { useState } from 'react';
import { Tokenizer } from './Tokenizer.jsx';

export default {
  title: 'Formularios/Tokenizer',
  component: Tokenizer,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

function Demo({ initial = [], ...props }) {
  const [values, setValues] = useState(initial);
  return (
    <div>
      <Tokenizer values={values} onChange={setValues} placeholder="Añade monedas con Enter o coma…" {...props} />
      <p style={{ margin: '12px 0 0', color: 'var(--cds-muted)', fontSize: 'var(--cds-text-body-sm)' }}>
        Valores ({values.length}): {values.length > 0 ? values.join(', ') : 'ninguno'}
      </p>
    </div>
  );
}

export const Basico = {
  render: () => <Demo />,
};

export const ConValores = {
  render: () => <Demo initial={['USDC', 'USDT', 'EURC']} />,
};

export const Deshabilitado = {
  render: () => <Demo initial={['USDC', 'Zelle']} disabled />,
};

export const SinDuplicados = {
  render: () => (
    <div>
      <p style={{ margin: '0 0 12px', color: 'var(--cds-ink-2)', fontSize: 'var(--cds-text-body-sm)' }}>
        Escribe «usdc» y pulsa Enter: no se añade dos veces aunque cambie la mayúscula.
      </p>
      <Demo initial={['USDC']} />
    </div>
  ),
};
