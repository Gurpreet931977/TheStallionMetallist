import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const tradeData = {
  "HMS 1 & 2 (Heavy Melting Scrap)": {
    title: "HMS 1 & 2 (Heavy Melting Scrap)",
    desc: "High-quality HMS 1 & 2 scrap sourced from industrial and demolition sectors. Ideal for steel manufacturing, foundries, and recycling operations requiring reliable ferrous scrap materials."
  },
  "Shredded Scrap": {
    title: "Shredded Scrap",
    desc: "Processed and shredded ferrous scrap with low contamination levels, ensuring efficient melting, faster processing, and consistent performance for steel mills and recyclers."
  },
  "Cast Iron Scrap": {
    title: "Cast Iron Scrap",
    desc: "Premium cast iron scrap suitable for foundries, metal recyclers, and industrial manufacturing. Known for its high iron content and excellent remelting properties."
  },
  "Structural & Industrial Scrap": {
    title: "Structural & Industrial Scrap",
    desc: "Heavy structural steel and industrial scrap collected from factories, warehouses, construction sites, and infrastructure projects. Suitable for recycling and steel production."
  },
  "Aluminium (UBC, Taint Tabor, Zorba, Extrusion)": {
    title: "Aluminium Scrap (UBC, Taint Tabor, Zorba, Extrusion)",
    desc: "High-grade aluminium scrap including UBC, Taint Tabor, Zorba, and Extrusion grades. Widely used in recycling, secondary aluminium production, and manufacturing industries."
  },
  "Copper": {
    title: "Copper Scrap",
    desc: "Premium copper scrap sourced from electrical, industrial, and construction sectors. Valued for its high conductivity, recyclability, and demand across global metal markets."
  },
  "Brass": {
    title: "Brass Scrap",
    desc: "Quality brass scrap suitable for recycling and remanufacturing applications. Commonly used in plumbing, engineering, automotive, and industrial production sectors."
  },
  "Stainless Steel 304 / 316": {
    title: "Stainless Steel Scrap (304 / 316)",
    desc: "High-value stainless steel scrap in 304 and 316 grades, ideal for recycling, alloy production, and industrial manufacturing requiring corrosion-resistant materials."
  }
};

const TradeItem = ({ text, delay, onClick }) => (
  <motion.li 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover="hover"
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    style={{ 
      padding: '1.5rem 1rem', 
      borderBottom: '1px solid rgba(188,188,188,0.15)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <motion.span 
      variants={{ hover: { x: 10, color: 'var(--color-accent)' } }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text-dark)', zIndex: 2 }}
    >
      {text}
    </motion.span>
    
    <motion.div 
      variants={{ hover: { width: '40px', opacity: 1 } }}
      initial={{ width: '0px', opacity: 0 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.4 }}
      style={{ height: '2px', background: 'var(--color-accent)', zIndex: 2 }}
    />
    
    <motion.div 
      variants={{ hover: { opacity: 1 } }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(143, 97, 58, 0.05) 0%, transparent 100%)', zIndex: 1 }}
    />
  </motion.li>
);

const Trade = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  React.useEffect(() => {
    if (selectedItem) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  return (
    <section id="trade" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '1.5rem', color: 'var(--color-text-dark)' }}
          >
            What We Trade
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}
          >
            We deal in a wide range of internationally graded metal scrap, sourced from established exporters and traded to processors, recyclers, and industrial manufacturers in India.
          </motion.p>
        </div>

        <div className="responsive-grid" style={{ gap: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel"
            style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 900, color: 'var(--color-text-dark)', opacity: 0.03, pointerEvents: 'none', lineHeight: 0.8, letterSpacing: '-5px', zIndex: 0 }}>
              01
            </div>
            
            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-text-dark)', fontWeight: 800, letterSpacing: '-1px', zIndex: 1 }}>Ferrous</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, zIndex: 1 }}>
              <TradeItem text="HMS 1 & 2 (Heavy Melting Scrap)" delay={0.1} onClick={() => setSelectedItem("HMS 1 & 2 (Heavy Melting Scrap)")} />
              <TradeItem text="Shredded Scrap" delay={0.2} onClick={() => setSelectedItem("Shredded Scrap")} />
              <TradeItem text="Cast Iron Scrap" delay={0.3} onClick={() => setSelectedItem("Cast Iron Scrap")} />
              <TradeItem text="Structural & Industrial Scrap" delay={0.4} onClick={() => setSelectedItem("Structural & Industrial Scrap")} />
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel"
            style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 900, color: 'var(--color-accent)', opacity: 0.03, pointerEvents: 'none', lineHeight: 0.8, letterSpacing: '-5px', zIndex: 0 }}>
              02
            </div>
            
            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-accent)', fontWeight: 800, letterSpacing: '-1px', zIndex: 1 }}>Non-Ferrous</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, zIndex: 1 }}>
              <TradeItem text="Aluminium (UBC, Taint Tabor, Zorba, Extrusion)" delay={0.1} onClick={() => setSelectedItem("Aluminium (UBC, Taint Tabor, Zorba, Extrusion)")} />
              <TradeItem text="Copper" delay={0.2} onClick={() => setSelectedItem("Copper")} />
              <TradeItem text="Brass" delay={0.3} onClick={() => setSelectedItem("Brass")} />
              <TradeItem text="Stainless Steel 304 / 316" delay={0.4} onClick={() => setSelectedItem("Stainless Steel 304 / 316")} />
            </ul>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && tradeData[selectedItem] && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(5px)',
                zIndex: 1000
              }}
            />
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              padding: '1rem'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                style={{
                  background: 'var(--color-primary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  maxWidth: '500px',
                  width: '100%',
                  pointerEvents: 'auto',
                  position: 'relative',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <button 
                  onClick={() => setSelectedItem(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-text-dark)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                  }}
                >
                  <X size={24} />
                </button>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-text-dark)', fontWeight: 800, paddingRight: '2rem' }}>
                  {tradeData[selectedItem].title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                  {tradeData[selectedItem].desc}
                </p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Trade;
