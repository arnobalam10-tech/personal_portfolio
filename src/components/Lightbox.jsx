import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Lightbox({ src, alt, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99990,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 1.5rem',
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'fixed',
              top: '1.25rem',
              right: '1.25rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'none',
            }}
          >
            <X size={18} />
          </button>

          <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '88vh',
              objectFit: 'contain',
              borderRadius: '6px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
