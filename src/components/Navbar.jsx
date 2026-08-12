import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border-subtle"
      style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 85%, transparent)' }}
    >
      <nav className="mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-5" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="font-heading text-lg font-bold tracking-tight text-fg hover:opacity-70 transition-opacity">
          GA.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative text-sm tracking-wide font-body transition-opacity hover:opacity-70 ${isActive ? 'text-fg' : 'text-muted'}`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-fg"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-sm font-body text-muted hover:text-fg transition-colors tracking-wide"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-fg text-sm font-body tracking-wide"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-b border-border-subtle"
          style={{ backgroundColor: 'var(--color-bg)' }}
        >
          <ul className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-wide font-body ${pathname === to ? 'text-fg underline underline-offset-4' : 'text-muted'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
