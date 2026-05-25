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
    // Transparent — inherits the page gradient; no hard background break
    <div className="flex w-full lg:w-1/2 items-center justify-center relative" style={{ background: 'transparent' }}>

      {/* Subtle right-side gold ambient glow */}
      <div
        className="absolute top-1/3 right-0 pointer-events-none"
        style={{
          width: 280, height: 420,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translateY(-50%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm px-8 lg:px-12"
      >
        {/* Header */}
        <LoginHeaderComponent />

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-9 space-y-6">

          {/* Email field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="block"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,240,0.4)',
              }}
            >
              Email
            </Label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
                style={{ color: 'rgba(201,168,76,0.45)' }}
              />
              <Input
                onChange={onInputChange}
                id="email"
                type="email"
                value={email}
                placeholder="you@tbkvillas.com"
                className="pl-11 h-12 text-sm rounded-lg transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(245,245,240,0.9)',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                }}
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="block"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,245,240,0.4)',
                }}
              >
                Password
              </Label>
              <Link
                to="/forgot-password"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.75rem',
                  color: 'rgba(201,168,76,0.55)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(201,168,76,0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(201,168,76,0.55)')}
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
                style={{ color: 'rgba(201,168,76,0.45)' }}
              />
              <Input
                onChange={onInputChange}
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="••••••••••••"
                className="pl-11 pr-12 h-12 text-sm rounded-lg transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(245,245,240,0.9)',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
                style={{ color: 'rgba(245,245,240,0.3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(245,245,240,0.65)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,240,0.3)')}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-1">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: isLoading
                  ? 'rgba(201,168,76,0.5)'
                  : 'linear-gradient(135deg, #c9a84c 0%, #ddb95e 50%, #c9a84c 100%)',
                color: '#0d0d0d',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                border: 'none',
                boxShadow: isLoading ? 'none' : '0 4px 24px rgba(201,168,76,0.2)',
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2.5">
                  <motion.div
                    className="h-4 w-4 border-2 rounded-full"
                    style={{ borderColor: 'rgba(13,13,13,0.25)', borderTopColor: '#0d0d0d' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.65 }}
          className="mt-9 text-center text-xs"
          style={{
            color: 'rgba(245,245,240,0.18)',
            fontFamily: "'DM Sans', system-ui, sans-serif",
            letterSpacing: '0.06em',
          }}
        >
          © TBK Villas — All rights reserved
        </motion.p>
      </motion.div>
    </div>
  );
}