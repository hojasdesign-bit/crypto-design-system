# Crypto DS

Sistema de diseño en React inspirado en el lenguaje visual de los on-ramps crypto modernos: modo oscuro como identidad, violeta vívido, geometría redondeada y resplandores de neón.

- **94 componentes** en 6 grupos: Núcleo, Formularios, Datos, Superficies, Comercio (on-ramp) y Contenido
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
  index.js          # exporta los 94 componentes
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
| Núcleo | Button, IconButton, Card, Avatar, RatingStars, ProgressBar |
| Formularios | Input, AmountField, CurrencySelect, SearchInput, Select, Switch, Checkbox, RadioGroup, Slider, OptionRow, Combobox, CascadeField, Textarea, QuantitySelector, SegmentedControl, CopyField, PinInput |
| Datos | Badge, Chip, TokenIcon, PriceTag, StepProgress, Skeleton, Alert, EmptyState, Divider, Tooltip, StatCard, Breadcrumb, MenuItem, Toast, Countdown, PriceChange, TransactionRow, NotificationItem, ProfileHeader, VerifiedBadge, AssetPair, NetworkChip, OverflowChips, ScoreGauge, ComparisonBar |
| Superficies | Modal, Drawer, Tabs, Accordion, Pagination, FeatureCard, SectionHeading, CTABanner, Panel, BottomNav, AppBar, Header, DropdownMenu, MenuIntro, MenuCoinButton, MenuCard, MenuBanner, MenuLinkColumn, MenuSocials, PageBackground, Footer |
| Texto | Heading, Text |
| Comercio | SwapCard, SwapPair, SwapJoined, PaymentMethodRow, FeeRow, OrderSummary, TestimonialCard, TrustBadge, RiskNotice, HeroPanel, OfferCard, OfferTable, TraderCell, PaymentAccountRow, QRCode, OperationRow, TradeStatusPill, ProductCard, SellerCard, ChatBubble, ChatComposer |
| Contenido | ArticleCard, Gallery |

Hecho por Adrián Hojas · React 19 + Vite + Storybook 10
