import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark' | 'gradient'
}

const sizes = {
  sm: { icon: 'w-8 h-8', text: 'text-lg' },
  md: { icon: 'w-10 h-10', text: 'text-2xl' },
  lg: { icon: 'w-14 h-14', text: 'text-3xl' },
  xl: { icon: 'w-20 h-20', text: 'text-4xl' },
}

export default function Logo({ size = 'md', variant = 'gradient' }: LogoProps) {
  const s = sizes[size]

  return (
    <div className="flex items-center space-x-3">
      <div className={`${s.icon} bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center shadow-lg`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-2/3 h-2/3" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 8V16L12 22L2 16V8L12 2Z" fill="white" fillOpacity="0.9" />
          <path d="M12 6L18 9.5V16.5L12 20L6 16.5V9.5L12 6Z" fill="url(#logoGrad)" />
          <defs>
            <linearGradient id="logoGrad" x1="6" y1="6" x2="18" y2="20">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#0891b2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className={`${s.text} font-bold ${
        variant === 'gradient'
          ? 'bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent'
          : variant === 'light'
          ? 'text-white'
          : 'text-dark-900'
      }`}>
        Phodata
      </span>
    </div>
  )
}
