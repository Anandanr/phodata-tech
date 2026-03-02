import React from 'react'
import Link from 'next/link'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-[#030305] border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size="md" />
            <p className="text-dark-400 mt-4 max-w-md leading-relaxed">
              Cross-border payment infrastructure and fintech products.
              Stablecoin-powered rails built for emerging-market corridors.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="https://pym.ink" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-colors text-sm">Pym — USD to INR</a></li>
              <li><span className="text-dark-400 text-sm">Stablecoin Orchestration API</span></li>
              <li><span className="text-dark-400 text-sm">Cross-Border Payout API</span></li>
              <li><span className="text-dark-400 text-sm">Crypto On-Ramp &amp; Off-Ramp</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-dark-400 hover:text-primary-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-dark-400 hover:text-primary-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">&copy; {new Date().getFullYear()} Phodata LLC. All rights reserved.</p>
          <span className="text-dark-500 text-sm mt-4 md:mt-0">Albuquerque, NM &middot; United States</span>
        </div>
      </div>
    </footer>
  )
}
