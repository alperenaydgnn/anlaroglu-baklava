import { useState, useEffect } from 'react'
import { ShoppingBag, MapPin } from 'lucide-react'

interface MobileFloatingBarProps {
  onOpenOrder: () => void
}

export function MobileFloatingBar({ onOpenOrder }: MobileFloatingBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past the initial hero
      setVisible(window.scrollY > 320)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  const scrollToBranches = () => {
    const el = document.getElementById('subeler')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center justify-center animate-fade-in pointer-events-none">
      <div className="bg-[#0F2217]/95 backdrop-blur-md text-[#FAF7F2] p-1.5 rounded-full border border-[#C29F5C]/40 shadow-xl shadow-black/30 flex items-center gap-1 pointer-events-auto">
        <button
          onClick={onOpenOrder}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C29F5C] text-[#0F2217] text-xs font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-transform"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Sipariş Ver</span>
        </button>

        <button
          onClick={scrollToBranches}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] hover:text-[#C29F5C] transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C29F5C]" />
          <span>Şubeler</span>
        </button>
      </div>
    </div>
  )
}
