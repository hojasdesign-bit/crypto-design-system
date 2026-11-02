import { MethodIcon } from './MethodIcon.jsx';

export default { title: 'Comercio/MethodIcon', component: MethodIcon };

const METHODS = ['Apple Pay', 'Card', 'Google Pay', 'PaySafeCard', 'Bank Transfer', 'Skrill', 'Rapid Transfer'];

export const TodosLosMetodos = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {METHODS.map((m) => (
        <div key={m} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <MethodIcon method={m} />
          <span style={{ fontSize: 12 }}>{m}</span>
        </div>
      ))}
    </div>
  ),
};

export const TamanoGrande = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <MethodIcon method="Card" size={48} />
      <MethodIcon method="Bank Transfer" size={48} />
    </div>
  ),
};
