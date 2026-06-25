import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const CatalogueCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(touch.clientX - left);
      mouseY.set(touch.clientY - top);
    }
  };

  return (
    <motion.a
      href="/dummy-catalogue.pdf"
      download="Stallion-Metallist-Catalogue.pdf"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="glass-panel"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 2rem',
        borderRadius: '24px',
        border: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textDecoration: 'none',
        color: 'inherit',
        maxWidth: '800px',
        margin: '0 auto',
        gap: '2rem',
        flexWrap: 'wrap'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(143, 97, 58, 0.12), transparent 80%)`,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1.5rem', flex: '1 1 min-content' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(143, 97, 58, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-accent)',
          flexShrink: 0
        }}>
          <FileText size={32} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-dark)', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Brand Catalogue
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>
            Download our comprehensive catalogue detailing our expertise, product range, and global trade operations.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          borderRadius: '999px',
          background: 'var(--color-accent)',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 4px 14px rgba(143, 97, 58, 0.3)',
          transition: 'all 0.2s ease',
        }}>
          <Download size={20} />
          <span>Download PDF</span>
        </div>
      </div>
    </motion.a>
  );
};

const Catalogue = () => {
  return (
    <section id="catalogue" className="section" style={{ padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-1.5px', margin: 0, color: 'var(--color-text-dark)' }}
          >
            Brand Catalogues
          </motion.h2>
        </div>
        
        <CatalogueCard />
      </div>
    </section>
  );
};

export default Catalogue;
