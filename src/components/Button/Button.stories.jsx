import { Button } from './Button.jsx';

export default {
  title: 'Núcleo/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'dark'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Primary = { args: { children: 'Comprar crypto', arrow: true } };
export const Secondary = { args: { variant: 'secondary', children: 'Ver cómo funciona' } };
export const Ghost = { args: { variant: 'ghost', children: 'Cancelar' } };
export const Dark = { args: { variant: 'dark', children: 'Comprar BTC vía tarjeta', fullWidth: true } };
export const Loading = { args: { children: 'Procesando pago', loading: true } };
export const Disabled = { args: { children: 'Comprar crypto', disabled: true } };

export const Tamaños = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};
