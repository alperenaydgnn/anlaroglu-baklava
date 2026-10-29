import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

interface NavbarProps {
  onOpenOrder: () => void
}

export function Navbar({ onOpenOrder }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 border-b border-[#E7E1D6] shadow-sm text-[#0F2217]'
            : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-[#E7E1D6]/60 text-[#0F2217]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Native on Alabaster background, no artificial box */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Anlaroğlu Baklava"
          >
            <img
              src="/images/brand/anlaroglu-logo.png"
              alt="Anlaroğlu Baklava"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Center Navigation - Understated Editorial Style */}
          <nav className="hidden md:flex items-center space-x-10 text-[13px] tracking-[0.16em] uppercase font-medium text-[#0F2217]">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-[#C29F5C] transition-colors py-1 cursor-pointer"
            >
              Anasayfa
            </button>
            <button
              onClick={() => scrollTo('imza-baklavalar')}
              className="hover:text-[#C29F5C] transition-colors py-1 cursor-pointer"
            >
              İmza Baklavalar
            </button>
            <button
              onClick={() => scrollTo('lezzet-dunyasi')}
              className="hover:text-[#C29F5C] transition-colors py-1 cursor-pointer"
            >
              Menü Koleksiyonu
            </button>
            <button
              onClick={() => scrollTo('subeler')}
              className="hover:text-[#C29F5C] transition-colors py-1 cursor-pointer"
            >
              Şubelerimiz
            </button>
          </nav>

          {/* Right Action: Pure Luxury Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase bg-[#0F2217] text-[#FAF7F2] hover:bg-[#C29F5C] hover:text-[#0F2217] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Sipariş Ver</span>
            </button>
          </div>

          {/* Mobile Bar */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F2217] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Sipariş</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-[#0F2217] hover:text-[#C29F5C] transition-colors cursor-pointer"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF7F2] text-[#0F2217] flex flex-col justify-between p-8 pt-28 transition-transform duration-400 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col space-y-6 text-2xl font-['Cormorant_Garamond_Variable',serif]">
          <button
            onClick={() => scrollTo('hero')}
            className="text-left py-2 border-b border-[#E7E1D6] hover:text-[#C29F5C] transition-colors"
          >
            Anasayfa
          </button>
          <button
            onClick={() => scrollTo('imza-baklavalar')}
            className="text-left py-2 border-b border-[#E7E1D6] hover:text-[#C29F5C] transition-colors"
          >
            İmza Baklavalar
          </button>
          <button
            onClick={() => scrollTo('lezzet-dunyasi')}
            className="text-left py-2 border-b border-[#E7E1D6] hover:text-[#C29F5C] transition-colors"
          >
            Menü Koleksiyonu
          </button>
          <button
            onClick={() => scrollTo('subeler')}
            className="text-left py-2 border-b border-[#E7E1D6] hover:text-[#C29F5C] transition-colors"
          >
            Şubelerimiz & İletişim
          </button>
        </div>

        <div className="pt-8 border-t border-[#E7E1D6] flex flex-col gap-3 font-['Manrope_Variable',sans-serif]">
          <button
            onClick={() => {
              setMobileOpen(false)
              onOpenOrder()
            }}
            className="w-full text-center py-4 rounded-full bg-[#0F2217] text-[#FAF7F2] font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Sipariş Ver & İletişim</span>
          </button>
          <p className="text-center text-xs text-[#6E655C] mt-2">
            Gaziantep · Ankara · 1998'den Beri
          </p>
        </div>
      </div>
    </>
  )
}
