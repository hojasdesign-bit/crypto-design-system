import { TermGroup } from './TermGroup.jsx';
import { TermCard } from '../TermCard/TermCard.jsx';

export default { title: 'Contenido/TermGroup', component: TermGroup };

export const Grupo = {
  render: () => (
    <TermGroup letter="S">
      <TermCard
        title="Stablecoin"
        excerpt="Una criptomoneda diseñada para mantener un valor estable frente a una moneda fiat, como el dólar."
      />
      <TermCard
        title="Spread"
        excerpt="La diferencia entre el precio de compra y el de venta de una oferta."
      />
    </TermGroup>
  ),
};
