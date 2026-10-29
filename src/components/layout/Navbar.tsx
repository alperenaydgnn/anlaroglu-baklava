import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Phone } from 'lucide-react'

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
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#E7E1D6] shadow-sm text-[#0F2217]'
            : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-3.5 sm:py-4 border-b border-[#E7E1D6]/60 text-[#0F2217]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Native on Alabaster background */}
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
              className="h-8 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Center Navigation - Desktop */}
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

          {/* Right Action: Desktop Luxury Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase bg-[#0F2217] text-[#FAF7F2] hover:bg-[#C29F5C] hover:text-[#0F2217] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Sipariş Ver</span>
            </button>
          </div>

          {/* Mobile Bar - Compact & Tactile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F2217] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider active:scale-95 transition-transform"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Sipariş</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#0F2217] hover:text-[#C29F5C] transition-colors cursor-pointer"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Fullscreen Haute Gastronomie Salon Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FAF7F2] text-[#0F2217] flex flex-col justify-between p-6 sm:p-8 pt-6 transition-transform duration-350 ease-out md:hidden overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Top Drawer Header with Brand & Close Button */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E7E1D6]">
          <img
            src="/images/brand/anlaroglu-logo.png"
            alt="Anlaroğlu Baklava"
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-full bg-[#0F2217]/5 flex items-center justify-center text-[#0F2217] active:bg-[#0F2217]/10"
            aria-label="Menüyü kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links with Editorial Serif Numbers */}
        <div className="py-8 flex flex-col space-y-5 text-xl font-['Cormorant_Garamond_Variable',serif]">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-baseline justify-between py-2 border-b border-[#E7E1D6]/60 text-left hover:text-[#C29F5C] transition-colors"
          >
            <span className="text-2xl font-normal">Anasayfa</span>
            <span className="text-xs font-['Manrope_Variable',sans-serif] text-[#C29F5C] uppercase tracking-widest">
              01
            </span>
          </button>
          <button
            onClick={() => scrollTo('imza-baklavalar')}
            className="flex items-baseline justify-between py-2 border-b border-[#E7E1D6]/60 text-left hover:text-[#C29F5C] transition-colors"
          >
            <span className="text-2xl font-normal">İmza Baklavalar</span>
            <span className="text-xs font-['Manrope_Variable',sans-serif] text-[#C29F5C] uppercase tracking-widest">
              02
            </span>
          </button>
          <button
            onClick={() => scrollTo('lezzet-dunyasi')}
            className="flex items-baseline justify-between py-2 border-b border-[#E7E1D6]/60 text-left hover:text-[#C29F5C] transition-colors"
          >
            <span className="text-2xl font-normal">Menü Koleksiyonu</span>
            <span className="text-xs font-['Manrope_Variable',sans-serif] text-[#C29F5C] uppercase tracking-widest">
              03
            </span>
          </button>
          <button
            onClick={() => scrollTo('subeler')}
            className="flex items-baseline justify-between py-2 border-b border-[#E7E1D6]/60 text-left hover:text-[#C29F5C] transition-colors"
          >
            <span className="text-2xl font-normal">Şubelerimiz & İletişim</span>
            <span className="text-xs font-['Manrope_Variable',sans-serif] text-[#C29F5C] uppercase tracking-widest">
              04
            </span>
          </button>
        </div>

        {/* Quick Mobile Action Card */}
        <div className="pt-6 border-t border-[#E7E1D6] flex flex-col gap-3 font-['Manrope_Variable',sans-serif]">
          <button
            onClick={() => {
              setMobileOpen(false)
              onOpenOrder()
            }}
            className="w-full py-3.5 rounded-full bg-[#0F2217] text-[#FAF7F2] font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Sipariş Ver & İletişim</span>
          </button>

          {/* Quick Call Direct Line */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="tel:+905013320294"
              className="py-2.5 px-3 rounded-xl bg-[#FFFFFF] border border-[#E7E1D6] text-[#0F2217] flex items-center justify-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29F5C]" />
              <span>Hatay (Defne)</span>
            </a>
            <a
              href="tel:+905013320294"
              className="py-2.5 px-3 rounded-xl bg-[#FFFFFF] border border-[#E7E1D6] text-[#0F2217] flex items-center justify-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29F5C]" />
              <span>İskenderun Şube</span>
            </a>
          </div>

          <p className="text-center text-[11px] text-[#6E655C] mt-1">
            Hatay · İskenderun · 1998'den Beri
          </p>
        </div>
      </div>
    </>
  )
}
