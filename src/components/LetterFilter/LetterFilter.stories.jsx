import { LetterFilter } from './LetterFilter.jsx';

export default { title: 'Contenido/LetterFilter', component: LetterFilter };

const LETTERS = ['Todos', '#', ...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'];
const options = LETTERS.map((l) => ({
  value: l === 'Todos' ? 'all' : l,
  label: l,
  disabled: ['B', 'D', 'F', 'G', 'J', 'K', 'Q', 'W', 'X', 'Y'].includes(l),
}));

export const PorDefecto = {
  args: { value: 'all', options },
};

export const LetraSeleccionada = {
  args: { value: 'S', options },
};
