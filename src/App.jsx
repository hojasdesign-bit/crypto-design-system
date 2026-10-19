import React, { useEffect, useState } from 'react';
import {
  Button,
  Badge,
  Card,
  HeroPanel,
  SwapCard,
  StatCard,
  TestimonialCard,
  TrustBadge,
  PriceTag,
  StepProgress,
  Alert,
  RiskNotice,
  Divider,
  TokenIcon,
} from './index.js';
import styles from './App.module.css';

const FIAT = [
  { code: 'USD', symbol: '$', color: '#3b82f6', name: 'Dólar' },
  { code: 'EUR', symbol: '€', color: '#6366f1', name: 'Euro' },
];
const CRYPTO = [
  { code: 'BTC', symbol: '₿', color: '#f7931a', name: 'Bitcoin' },
  { code: 'ETH', symbol: 'Ξ', color: '#627eea', name: 'Ethereum' },
  { code: 'USDC', symbol: '$', color: '#2775ca', name: 'USD Coin' },
];

const RATE = 0.000042; // demo: 1 unidad fiat -> BTC

export default function App() {
  const [theme, setTheme] = useState('oscuro');
  const [payAmount, setPayAmount] = useState('250');
  const [payCur, setPayCur] = useState(FIAT[0]);
  const [rxCur, setRxCur] = useState(CRYPTO[0]);
  const [activeQuick, setActiveQuick] = useState(250);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const receiveAmount = (parseFloat(payAmount) || 0) * RATE;
  const receiveStr = receiveAmount > 0 ? receiveAmount.toFixed(6) : '0';

  const cyclePay = () => setPayCur((c) => (c.code === 'USD' ? FIAT[1] : FIAT[0]));
  const cycleRx = () =>
    setRxCur((c) => {
      const i = CRYPTO.findIndex((x) => x.code === c.code);
      return CRYPTO[(i + 1) % CRYPTO.length];
    });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <TokenIcon symbol="◈" size="md" />
          <span className={styles.brandName}>CRYPTO&nbsp;DS</span>
          <Badge variant="lavender">v1.0</Badge>
        </div>
        <div className={styles.headerActions}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setTheme((t) => (t === 'oscuro' ? 'claro' : 'oscuro'))}
          >
            Tema: {theme}
          </Button>
          <Button variant="primary" size="sm" arrow>
            Ver Storybook
          </Button>
        </div>
      </header>

      <HeroPanel className={styles.hero}>
        <Badge variant="accent">Sistema de diseño · 36 componentes</Badge>
        <h1 className={styles.heroTitle}>
          El lenguaje visual
          <br />
          del on-ramp moderno
        </h1>
        <p className={styles.heroSub}>
          Modo oscuro como identidad, violeta vívido, geometría redondeada y
          resplandores de neón. Dos temas, tokens CSS y 36 componentes React
          listos para comprar crypto.
        </p>
        <div className={styles.heroCtas}>
          <Button size="lg" arrow>
            Comprar crypto
          </Button>
          <Button size="lg" variant="secondary">
            Explorar componentes
          </Button>
        </div>
        <div className={styles.stats}>
          <StatCard label="Componentes" value="36" />
          <StatCard label="Temas" value="2" />
          <StatCard label="Grupos" value="4" />
        </div>
      </HeroPanel>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>La pieza central</h2>
            <p>Widget de compra: pagas, recibes, eliges monto y método. Todo interactivo.</p>
          </div>
          <div className={styles.swapWrap}>
            <SwapCard
              payAmount={payAmount}
              onPayAmountChange={(e) => {
                setPayAmount(e.target.value);
                setActiveQuick(null);
              }}
              receiveAmount={receiveStr}
              payCurrency={payCur}
              receiveCurrency={rxCur}
              onPayCurrencyClick={cyclePay}
              onReceiveCurrencyClick={cycleRx}
              onSwap={cycleRx}
              activeQuick={activeQuick}
              onQuickSelect={(v) => {
                setPayAmount(String(v));
                setActiveQuick(v);
              }}
              paymentMethod={{ name: 'Tarjeta de débito', fee: '1.75% comisión', badge: 'Más popular' }}
              ctaLabel={`Comprar ${rxCur.code} vía tarjeta`}
              footnote="Sin cargos ocultos. Entrega estimada: ~10 minutos."
              onSubmit={() => alert(`Demo: comprarías ${receiveStr} ${rxCur.code} con ${payAmount} ${payCur.code}`)}
            />
            <div className={styles.swapSide}>
              <StepProgress steps={['Monto', 'Verificación', 'Pago', 'Recibido']} current={0} />
              <Divider />
              <div className={styles.priceRow}>
                <span>Tasa estimada</span>
                <PriceTag amount={`1 ${payCur.code} ≈ ${RATE} ${rxCur.code}`} trend="up" />
              </div>
              <Alert variant="info" title="Sandbox">
                Esto es una demo del sistema de diseño. Ninguna transacción es real.
              </Alert>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Confianza y prueba social</h2>
            <p>Tarjetas de testimonio, sellos de confianza y avisos legales.</p>
          </div>
          <div className={styles.grid3}>
            <TestimonialCard
              quote="Compré mi primer Bitcoin en menos de tres minutos. El proceso más simple que he probado."
              author="Camila R."
              role="Compradora verificada"
            />
            <Card variant="glow">
              <div className={styles.trustStack}>
                <TrustBadge icon="shield" title="Regulado" text="Operador registrado en múltiples jurisdicciones." />
                <TrustBadge icon="lock" title="Custodia segura" text="Fondos protegidos con estándares bancarios." />
                <TrustBadge icon="check" title="Soporte 24/7" text="Ayuda humana en tu idioma, siempre." />
              </div>
            </Card>
            <RiskNotice text="Las criptomonedas son volátiles. Asegúrate de entender los riesgos antes de comprar." />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Crypto DS · construido con React + Storybook</span>
        <span>github.com/hojasdesign-bit/crypto-design-system</span>
      </footer>
    </div>
  );
}
