import { useEffect } from 'react'
import { X, Phone, MessageSquare, MapPin, ExternalLink, Clock } from 'lucide-react'
import { siteConfig } from '../../data/site-config'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E7E1D6] shadow-2xl text-[#0F2217] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#0F2217]/10 text-[#0F2217] hover:bg-[#0F2217] hover:text-[#FAF7F2] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C] mb-1.5">
            Sipariş & İletişim
          </p>
          <h3 className="font-['Cormorant_Garamond_Variable',serif] text-3xl sm:text-4xl text-[#0F2217] font-normal leading-tight">
            Taze Baklava ve Tatlı Siparişi
          </h3>
          <p className="font-['Manrope_Variable',sans-serif] text-xs sm:text-sm text-[#6E655C] mt-1.5 leading-relaxed">
            Fırından taze çıkan tepsi, özel kutu veya porsiyon siparişleriniz için şubelerimizle doğrudan iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Channels */}
        <div className="space-y-3.5">
          {/* Branch Direct Calling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteConfig.branches.map((branch) => (
              <a
                key={branch.id}
                href={`tel:${branch.phone}`}
                className="group p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E1D6] hover:bg-[#0F2217] hover:text-[#FAF7F2] hover:border-[#0F2217] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#C29F5C]">
                    <span>{branch.city}</span>
                    <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-['Cormorant_Garamond_Variable',serif] text-xl font-normal mt-1.5">
                    {branch.name}
                  </h4>
                  <p className="text-xs text-[#6E655C] group-hover:text-[#E7E1D6] mt-0.5">
                    {branch.phoneDisplay}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#E7E1D6] group-hover:border-[#1C3D2B] flex items-center justify-between text-[11px] font-semibold text-[#0F2217] group-hover:text-[#C29F5C]">
                  <span>Hemen Ara</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp Direct Line */}
          <a
            href="https://wa.me/905013320294?text=Merhaba,%20Anlaro%C4%9Flu%20Baklava%20sipari%C5%9Fi%20vermek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E1D6] hover:bg-[#0F2217] hover:text-[#FAF7F2] hover:border-[#0F2217] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#1b9a4b] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold tracking-wide">WhatsApp Hızlı Sipariş Hattı</h4>
                <p className="text-xs text-[#6E655C] group-hover:text-[#E7E1D6]">
                  Tepsi ve hediye kutu siparişlerinizi mesajla iletin
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#C29F5C] shrink-0 ml-2" />
          </a>

          {/* Digital Menu Option */}
          <a
            href={siteConfig.qrMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-2xl bg-[#0F2217] text-[#FAF7F2] hover:bg-[#C29F5C] hover:text-[#0F2217] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/10 text-[#C29F5C] group-hover:bg-[#0F2217] group-hover:text-[#FAF7F2] flex items-center justify-center shrink-0 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold tracking-wide">Dijital Karekod Menüyü İncele</h4>
                <p className="text-xs text-[#E7E1D6]/80 group-hover:text-[#0F2217]/80">
                  264 ürün, porsiyon ve güncel fiyat detayları
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#C29F5C] group-hover:text-[#0F2217] shrink-0 ml-2" />
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-5 pt-4 border-t border-[#E7E1D6] flex items-center justify-between text-[11px] text-[#6E655C] font-['Manrope_Variable',sans-serif]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C29F5C]" />
            <span>Her gün 08:30 — 23:30</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C29F5C]" />
            <span>Hatay & İskenderun</span>
          </div>
        </div>
      </div>
    </div>
  )
}
