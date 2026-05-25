import { motion } from 'framer-motion';

export default function LoginHeaderComponent() {
  return (
    <div className="space-y-3">
      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.05 }}
        style={{
          fontFamily: "'Cormorant Garant', Georgia, serif",
          fontSize: 'clamp(2rem, 3vw, 2.5rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--foreground)',
        }}
      >
        Welcome Back
      </motion.h2>

      {/* Animated gold rule */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 28 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        style={{ height: 1, background: '#c9a84c' }}
      />

      {/* Sub-text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm text-muted-foreground"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif", lineHeight: 1.6 }}
      >
        Sign in to access your dashboard.
      </motion.p>
    </div>
  );
}