# Crypto DS

Sistema de diseño en React inspirado en el lenguaje visual de los on-ramps crypto modernos: modo oscuro como identidad, violeta vívido, geometría redondeada y resplandores de neón.

- **36 componentes** en 4 grupos: Núcleo, Formularios, Datos, Superficies y Comercio (on-ramp)
- **2 temas** (`oscuro` por defecto, `claro`) conmutables vía `data-theme`
- **Tokens CSS** con prefijo `--cds-*` en `src/tokens.css`
- **Storybook 10** con documentación automática

## Uso

```bash
npm install
npm run dev          # app demo
npm run storybook    # Storybook en :6006
npm run build-storybook
```

```jsx
import { Button, SwapCard } from 'crypto-ds';

<Button variant="primary" arrow>Comprar crypto</Button>
```

## Estructura

```
src/
  tokens.css        # --cds-* (colores, radios, sombras, tipos, 2 temas)
  base.css          # reset + tipografía base
  tokens.js         # tokens como objeto JS
  index.js          # exporta los 36 componentes
  components/
    Button/         # Núcleo
    Card/
    Input/          # Formularios
    AmountField/
    ...
    SwapCard/       # Comercio — widget de compra (pieza central)
```

## Grupos

| Grupo | Componentes |
|---|---|
| Núcleo | Button, Card |
| Formularios | Input, AmountField, CurrencySelect, SearchInput, Select, Switch, Checkbox, RadioGroup, Slider |
| Datos | Badge, Chip, TokenIcon, PriceTag, StepProgress, Skeleton, Alert, EmptyState, Divider, Tooltip, StatCard, Breadcrumb |
| Superficies | Modal, Drawer, Tabs, Accordion, Pagination |
| Comercio | SwapCard, PaymentMethodRow, FeeRow, OrderSummary, TestimonialCard, TrustBadge, RiskNotice, HeroPanel |

Hecho por Adrián Hojas · React 19 + Vite + Storybook 10
