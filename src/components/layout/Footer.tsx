import { ExternalLink, ArrowUp } from 'lucide-react'
import { siteConfig } from '../../data/site-config'
import { categories } from '../../data/categories'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const primaryCats = categories.filter((c) => c.isPrimaryDessert).slice(0, 6)

  return (
    <footer className="bg-[#0F2217] text-[#FAF7F2] pt-20 pb-12 border-t border-[#1C3D2B] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C29F5C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Massive Typographic Brand Signature */}
        <div className="pb-14 border-b border-[#1C3D2B] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="font-['Manrope_Variable',sans-serif] text-xs font-semibold tracking-[0.25em] text-[#C29F5C] uppercase block mb-2">
              Hatay · 1998'den Beri
            </span>
            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-5xl sm:text-7xl lg:text-8xl tracking-[0.06em] text-[#FAF7F2] uppercase leading-none font-normal">
              {siteConfig.brandName}
            </h2>
            <span className="font-['Cormorant_Garamond_Variable',serif] text-2xl sm:text-3xl text-[#E7E1D6]/80 font-light block mt-2">
              {siteConfig.tagline}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E7E1D6] hover:text-[#C29F5C] transition-colors py-2 cursor-pointer"
          >
            <span>Yukarı Dön</span>
            <div className="w-8 h-8 rounded-full border border-[#E7E1D6]/30 flex items-center justify-center group-hover:border-[#C29F5C] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* 4 Columns Nav Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm font-['Manrope_Variable',sans-serif]">
          {/* Col 1: Keşif */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C]">
              Gezinme
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7E1D6]/80">
              <li>
                <a href="#hero" className="hover:text-[#FAF7F2] transition-colors">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#imza-baklavalar" className="hover:text-[#FAF7F2] transition-colors">
                  İmza Baklavalar
                </a>
              </li>
              <li>
                <a href="#lezzet-dunyasi" className="hover:text-[#FAF7F2] transition-colors">
                  Menü Koleksiyonu
                </a>
              </li>
              <li>
                <a href="#subeler" className="hover:text-[#FAF7F2] transition-colors">
                  Şubelerimiz
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Tatlı Çeşitleri */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C]">
              Öne Çıkanlar
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7E1D6]/80">
              {primaryCats.map((cat) => (
                <li key={cat.slug}>
                  <a href="#lezzet-dunyasi" className="hover:text-[#FAF7F2] transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Şubeler */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C]">
              Şubeler
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7E1D6]/80">
              {siteConfig.branches.map((b) => (
                <li key={b.id}>
                  <a href="#subeler" className="hover:text-[#FAF7F2] transition-colors block">
                    <span className="font-semibold text-[#FAF7F2]">{b.name}</span>
                    <span className="block text-[11px] text-[#E7E1D6]/60">{b.city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Karekod Menü & Sosyal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C]">
              Dijital Menü
            </h4>
            <p className="text-xs text-[#E7E1D6]/70 leading-relaxed">
              Tüm menüyü, güncel fiyatları ve porsiyon detaylarını resmi karekod menümüzden inceleyebilirsiniz.
            </p>
            <a
              href={siteConfig.qrMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C29F5C]/40 text-[#C29F5C] hover:bg-[#C29F5C] hover:text-[#0F2217] transition-all text-xs font-semibold uppercase tracking-wider"
            >
              <span>Karekod Menü</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="pt-3 flex items-center gap-4 text-[#E7E1D6]/80">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C29F5C] transition-colors"
                aria-label="Anlaroğlu Instagram Hesabı"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C29F5C] transition-colors"
                aria-label="Anlaroğlu Facebook Hesabı"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#1C3D2B] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#E7E1D6]/50 gap-4">
          <p>© {new Date().getFullYear()} Anlaroğlu Baklava. Tüm hakları saklıdır.</p>
          <p>Hatay Geleneksel Tatlı Sanatı · Kurumsal Tanıtım Platformu</p>
        </div>
      </div>
    </footer>
  )
}
