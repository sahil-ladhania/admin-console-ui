import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginHeaderComponent from './LoginHeaderComponent';
import { LoginFormComponentProps } from '@/types/auth/loginFormProps';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LoginFormComponent({
  email,
  password,
  onInputChange,
  onSubmit,
  isLoading = false,
}: LoginFormComponentProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex w-full lg:w-1/2 items-center justify-center relative"
      style={{ background: '#111111' }}
    >
      {/* Subtle top-left glow */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: 320, height: 320,
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm px-8 py-10 lg:px-10"
      >
        {/* Header */}
        <LoginHeaderComponent />

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-10 space-y-5">

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-medium tracking-wide"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted-foreground)',
              }}
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                onChange={onInputChange}
                id="email"
                type="email"
                value={email}
                placeholder="yourname@tbkvillas.com"
                className="pl-10 h-12 bg-background/40 border-border/40 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all rounded-lg text-sm"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-medium tracking-wide"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--muted-foreground)',
                }}
              >
                Password
              </Label>
              <Link
                to="/forgot-password"
                className="text-xs transition-colors hover:opacity-100"
                style={{
                  color: 'rgba(201,168,76,0.65)',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                onChange={onInputChange}
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="••••••••••••"
                className="pl-10 pr-11 h-12 bg-background/40 border-border/40 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all rounded-lg text-sm"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 font-semibold rounded-lg transition-all duration-300 hover:shadow-medium hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #e0c06e 50%, #c9a84c 100%)',
                color: '#0d0d0d',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.04em',
                border: 'none',
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2.5">
                  <motion.div
                    className="h-4 w-4 border-2 rounded-full"
                    style={{ borderColor: 'rgba(13,13,13,0.2)', borderTopColor: '#0d0d0d' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  Signing in…
                </span>
              ) : (
                'Sign In'
              )}
            </Button>
          </div>
        </form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div style={{ height: 1, width: 24, background: 'rgba(201,168,76,0.25)' }} />
          <p
            className="text-center text-xs"
            style={{
              color: 'rgba(245,245,240,0.25)',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              letterSpacing: '0.04em',
            }}
          >
            Secure · TBK Villas
          </p>
          <div style={{ height: 1, width: 24, background: 'rgba(201,168,76,0.25)' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}