import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDownRight, MapPin } from 'lucide-react'
import { siteImages } from '../../data/site-images'

gsap.registerPlugin(useGSAP)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.fromTo(
        imageWrapRef.current,
        { scale: 1.04, opacity: 0.9 },
        { scale: 1, opacity: 1, duration: 1.4, clearProps: 'transform' }
      ).fromTo(
        contentRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: 'all' },
        0.2
      )
    },
    { scope: containerRef }
  )

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92svh] sm:min-h-[96svh] flex flex-col justify-end overflow-hidden bg-[#0F2217] text-[#FAF7F2] pt-24 pb-12 sm:pb-16"
    >
      {/* Background Image Layer - Glistening, appetizing, luminous */}
      <div
        ref={imageWrapRef}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden="true"
      >
        <picture className="w-full h-full block">
          <source srcSet={siteImages.heroBaklava.webp} type="image/webp" />
          <source srcSet={siteImages.heroBaklava.fallback} type="image/jpeg" />
          <img
            src={siteImages.heroBaklava.fallback}
            alt="Anlaroğlu Antep Fıstıklı Baklava"
            className="w-full h-full object-cover object-[70%_40%] sm:object-[center_35%] brightness-[0.92] contrast-[1.04]"
            fetchPriority="high"
          />
        </picture>

        {/* Quiet Luxury Gradient Overlays - Subtle & Film-like */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2217] via-[#0F2217]/50 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2217]/90 via-[#0F2217]/60 to-transparent w-full md:w-3/5" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={contentRef} className="max-w-2xl">
          {/* Refined Brand Subhead - Quiet, No tacky badges */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#C29F5C] mb-3 sm:mb-4">
            Hatay · 1998'den Beri
          </p>

          {/* Headline - Unified, Character-Rich Editorial Serif */}
          <h1 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#FAF7F2] mb-4 sm:mb-6">
            Zamanın ve Ustalığın Eseri
          </h1>

          {/* Descriptive Craft Statement */}
          <p className="font-['Manrope_Variable',sans-serif] text-sm sm:text-base lg:text-lg text-[#E7E1D6]/90 leading-relaxed font-normal mb-8 max-w-xl">
            Doğal saf sadeyağ, taze hasat yeşil fıstık ve elle açılan tül yufkaların altın dengesi.
            Hatay'ın kadim tatlı kültürünü çağdaş gastronomi zarafetiyle sunuyoruz.
          </p>

          {/* Direct, Restrained CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => scrollToSection('imza-baklavalar')}
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#C29F5C] text-[#0F2217] font-semibold text-[11px] sm:text-xs tracking-[0.14em] uppercase hover:bg-[#FAF7F2] transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>İmza Koleksiyon</span>
              <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('subeler')}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:px-6 sm:py-3.5 rounded-full border border-[#E7E1D6]/40 bg-[#0F2217]/50 backdrop-blur-sm text-[#FAF7F2] font-medium text-[11px] sm:text-xs tracking-[0.12em] uppercase hover:bg-[#0F2217] hover:border-[#C29F5C] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C29F5C]" />
              <span>Şubelerimiz</span>
            </button>
          </div>
        </div>

        {/* Minimal Bottom Metadata Bar */}
        <div className="mt-8 sm:mt-16 pt-4 sm:pt-5 border-t border-[#E7E1D6]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-xs tracking-widest text-[#E7E1D6]/70 uppercase font-['Manrope_Variable',sans-serif] gap-1.5 sm:gap-2">
          <span>Anlaroğlu Baklava & Pâtisserie</span>
          <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] text-[#E7E1D6]/60">
            <span>Taş Fırın</span>
            <span>·</span>
            <span>Saf Sadeyağ</span>
            <span>·</span>
            <span>Hatay & İskenderun</span>
          </div>
        </div>
      </div>
    </section>
  )
}
