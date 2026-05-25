import { motion } from 'framer-motion';

export default function LoginHeaderComponent() {
  return (
    <div className="space-y-4">
      {/* Small eyebrow label */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.7)',
        }}
      >
        Admin Portal
      </motion.p>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Cormorant Garant', Georgia, serif",
          fontSize: 'clamp(2rem, 3vw, 2.6rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--foreground)',
        }}
      >
        Welcome Back
      </motion.h2>

      {/* Gold rule */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 32 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ height: 1, background: '#c9a84c' }}
      />

      {/* Sub-text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm text-muted-foreground"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        Enter your credentials to continue.
      </motion.p>
    </div>
  );
}