import { memo } from 'react'

function FooterContent() {
  return (
    <footer className="py-6 px-4 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 text-center md:text-left">© 2024 MY PORTFOLIO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterContent)
FooterContent.displayName = 'FooterContent'