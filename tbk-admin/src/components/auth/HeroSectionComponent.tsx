import { motion } from 'framer-motion';

// TBK Logo inline so it renders white on the dark obsidian panel
const TBKLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 205" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M117.178 156.4L102.975 120.52L102.573 119.511L74.8607 49.5363L80.2813 35.9442L113.381 119.524L113.783 120.533L127.986 156.413L117.178 156.4ZM76.2334 156.351L61.4123 156.333L61.4558 120.47L76.2769 120.488L76.2334 156.351ZM129.7 156.415L115.497 120.535L115.095 119.526L81.151 33.7965L49.8508 112.274L74.0212 51.674L100.879 119.509L101.281 120.518L115.494 156.398L77.4232 156.352L77.4679 119.48L57.7467 119.456L57.702 156.328L32.3044 156.297L31.8089 157.558L130.213 157.677L129.71 156.415L129.7 156.415Z" fill="currentColor" />
    <path d="M62.3566 17.9555L67.7772 4.36331L73.0845 17.7566L67.6639 31.3488L62.3868 18.016L62.3667 17.9555L62.3566 17.9555ZM67.7925 0.0758953L66.9329 2.21353L61.5123 15.8057L60.6628 17.9433L20.2 119.401L19.7955 120.409L5.5056 156.255L4.99997 157.505L6.7543 157.507L7.24986 156.257L7.19945 156.257L21.4894 120.411L21.5398 120.411L21.9443 119.403L21.8939 119.403L61.5071 20.1032L61.5272 20.1638L66.8043 33.4965L32.5308 119.436L32.1263 120.444L17.8263 156.29L7.23975 156.277L6.7442 157.527L19.0447 157.542L19.5504 156.292L33.8503 120.446L34.2549 119.438L67.6687 35.6463L68.5183 33.5087L73.9389 19.9064L74.7985 17.7688L73.9441 15.619L68.6368 2.22568L67.7925 0.0758953Z" fill="currentColor" />
    <path d="M44.8807 120.46L30.5909 156.295L19.5506 156.282L19.0551 157.542L31.7891 157.558L32.2948 156.297L32.2847 156.297L40.1729 136.544L46.9892 119.443L49.8411 112.284L81.1413 33.7964L80.297 31.6567L74.7887 17.7588L73.9392 19.9065L79.4374 33.8045L74.0168 47.3966L68.5185 33.4987L67.6589 35.6363L73.1672 49.5343L45.2853 119.441" fill="currentColor" />
    <path d="M14.008 178.702H8.5V199H5.984V178.702H0.476V176.322H14.008V178.702ZM17.4006 176.322H21.4806C23.7472 176.322 25.4812 176.798 26.6826 177.75C28.0426 178.793 28.7226 180.357 28.7226 182.442C28.7226 184.391 27.9746 185.876 26.4786 186.896C27.9292 187.259 29.0059 187.995 29.7086 189.106C30.4339 190.194 30.7966 191.361 30.7966 192.608C30.7966 193.628 30.5699 194.569 30.1166 195.43C29.6859 196.291 29.1419 196.983 28.4846 197.504C27.2152 198.501 25.4019 199 23.0446 199H17.4006V176.322ZM19.9166 178.702V186.284H21.8206C22.1606 186.284 22.4892 186.273 22.8066 186.25C23.1239 186.205 23.4979 186.114 23.9286 185.978C24.3819 185.819 24.7672 185.615 25.0846 185.366C25.4246 185.117 25.7079 184.743 25.9346 184.244C26.1612 183.745 26.2746 183.167 26.2746 182.51C26.2746 181.807 26.1386 181.207 25.8666 180.708C25.5946 180.187 25.2886 179.801 24.9486 179.552C24.6086 179.303 24.2006 179.11 23.7246 178.974C23.2486 178.838 22.8859 178.759 22.6366 178.736C22.3872 178.713 22.1379 178.702 21.8886 178.702H19.9166ZM19.9166 188.528V196.62H22.8066C24.6426 196.62 25.9686 196.303 26.7846 195.668C27.7819 194.943 28.2806 193.9 28.2806 192.54C28.2806 191.021 27.6346 189.911 26.3426 189.208C25.5266 188.755 24.2459 188.528 22.5006 188.528H19.9166ZM37.9459 176.322V186.046L47.6019 176.322H51.0019L40.3939 186.896L51.3419 199H47.8739L38.5919 188.596L37.9459 189.242V199H35.4299V176.322H37.9459Z" fill="currentColor" />
  </svg>
);

export default function HeroSectionComponent() {
  return (
    <div
      className="relative hidden w-1/2 lg:flex flex-col overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* ── Architectural grid overlay ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tbk-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tbk-grid)" />
      </svg>

      {/* ── Gold glow orbs ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 520, height: 520,
          top: '-15%', right: '-20%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          bottom: '2%', left: '-12%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)',
          filter: 'blur(56px)',
        }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 260, height: 260,
          top: '45%', left: '52%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          filter: 'blur(36px)',
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* ── Thin gold vertical separator on right edge ── */}
      <div
        className="absolute right-0 inset-y-0 w-px pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.35) 25%, rgba(201,168,76,0.35) 75%, transparent 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col justify-between h-full p-12">

        {/* Top — logo wordmark */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <TBKLogo className="h-10 w-auto" style={{ color: 'rgba(255,255,255,0.75)' } as React.CSSProperties} />
        </motion.div>

        {/* Centre — headline block */}
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold accent rule */}
            <div className="mb-7" style={{ height: 1, width: 40, background: '#c9a84c' }} />

            <h1
              className="text-white leading-[1.05]"
              style={{
                fontFamily: "'Cormorant Garant', Georgia, serif",
                fontSize: 'clamp(2.6rem, 4.2vw, 3.8rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              Property
              <br />
              <em
                style={{
                  color: '#c9a84c',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Intelligence.
              </em>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: 'rgba(245,245,240,0.45)',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              maxWidth: '22rem',
            }}
          >
            For the teams that manage<br />Goa's finest villas.
          </motion.p>
        </div>

        {/* Bottom — console label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="flex items-center gap-3"
        >
          <div style={{ height: 1, width: 20, background: '#c9a84c', opacity: 0.6 }} />
          <span
            style={{
              color: 'rgba(201,168,76,0.55)',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            TBK Admin Console
          </span>
        </motion.div>

      </div>
    </div>
  );
}