import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark' | 'gradient'
}

const sizes = {
  sm: { icon: 'w-8 h-8', text: 'text-lg' },
  md: { icon: 'w-9 h-9', text: 'text-xl' },
  lg: { icon: 'w-12 h-12', text: 'text-3xl' },
  xl: { icon: 'w-16 h-16', text: 'text-4xl' },
}

export default function Logo({ size = 'md', variant = 'gradient' }: LogoProps) {
  const s = sizes[size]

  return (
    <div className="flex items-center space-x-2.5">
      <div className={`${s.icon} bg-gradient-to-br from-[#2a2a2e] to-[#1a1a1e] rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25 border border-zinc-600/40`}>
        <svg viewBox="0 0 32 32" fill="none" className="w-[75%] h-[75%]" xmlns="http://www.w3.org/2000/svg">
          {/* Top-left lens (wide) */}
          <circle cx="11" cy="11" r="5.5" stroke="#555" strokeWidth="1.5" fill="#0d0d0d" />
          <circle cx="11" cy="11" r="4" stroke="#444" strokeWidth="0.7" fill="#111" />
          <circle cx="11" cy="11" r="2.5" fill="url(#lens1)" />
          <circle cx="9.5" cy="9.5" r="0.6" fill="rgba(255,255,255,0.5)" />

          {/* Top-right lens (ultrawide) */}
          <circle cx="22" cy="11" r="5.5" stroke="#555" strokeWidth="1.5" fill="#0d0d0d" />
          <circle cx="22" cy="11" r="4" stroke="#444" strokeWidth="0.7" fill="#111" />
          <circle cx="22" cy="11" r="2.5" fill="url(#lens2)" />
          <circle cx="20.5" cy="9.5" r="0.6" fill="rgba(255,255,255,0.5)" />

          {/* Bottom-left lens (telephoto) */}
          <circle cx="11" cy="22" r="5.5" stroke="#555" strokeWidth="1.5" fill="#0d0d0d" />
          <circle cx="11" cy="22" r="4" stroke="#444" strokeWidth="0.7" fill="#111" />
          <circle cx="11" cy="22" r="2.5" fill="url(#lens3)" />
          <circle cx="9.5" cy="20.5" r="0.6" fill="rgba(255,255,255,0.5)" />

          {/* LiDAR / flash — bottom right */}
          <circle cx="22" cy="20" r="2" fill="#181818" stroke="#555" strokeWidth="0.7" />
          <circle cx="22" cy="20" r="0.9" fill="#666" />
          {/* Mic hole */}
          <circle cx="22" cy="25" r="0.9" fill="#222" />

          <defs>
            <linearGradient id="lens1" x1="5" y1="5" x2="17" y2="17">
              <stop stopColor="#a78bfa" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="lens2" x1="16" y1="5" x2="28" y2="17">
              <stop stopColor="#f472b6" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="lens3" x1="5" y1="16" x2="17" y2="28">
              <stop stopColor="#22d3ee" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className={`${s.text} font-bold tracking-tight ${
        variant === 'gradient'
          ? 'bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent'
          : variant === 'light'
          ? 'text-white'
          : 'text-zinc-900'
      }`}>
        Phodata
      </span>
    </div>
  )
}
