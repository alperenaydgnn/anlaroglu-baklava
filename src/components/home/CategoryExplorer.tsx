import { ArrowUpRight, Compass } from 'lucide-react'
import { siteImages } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'
import type { Product } from '../../data/products'

interface CategoryExplorerProps {
  onSelectProduct: (product: Product) => void
  onOpenAllProducts: () => void
}

export function CategoryExplorer({ onOpenAllProducts }: CategoryExplorerProps) {
  const collections = [
    {
      title: 'Sıcak Künefeler',
      subtitle: 'Bakır tepside közde nar gibi kızaran tel kadayıf, taze Hatay peyniri ve bol fıstık.',
      image: siteImages.kunefe,
      count: '12 Çeşit',
      tag: 'Közde Pişirim',
    },
    {
      title: 'Taş Fırın Katmerleri',
      subtitle: 'İncecik katmer hamuru, sahan kaymağı ve yeşil fıstığın fırından çıkan çıtır lezzeti.',
      image: siteImages.katmer,
      count: '9 Çeşit',
      tag: 'Fırından Taze',
    },
    {
      title: 'Geleneksel Sütlü Tatlılar',
      subtitle: 'Taş fırında üstü kızarmış sütlaç, kazandibi ve hafif sütlü tatlı klasikleri.',
      image: siteImages.sutluTatlilar,
      count: '8 Çeşit',
      tag: 'Hafif & Dengeli',
    },
    {
      title: 'Butik Pasta & Cheesecake',
      subtitle: 'Karamelize San Sebastian, Belçika çikolatalı ve yoğun fıstıklı butik pastalar.',
      image: siteImages.pastaTatli,
      count: '16 Çeşit',
      tag: 'Özel İmalat',
    },
    {
      title: 'Çikolata & Waffle Dünyası',
      subtitle: 'Taze meyveler, çıtır waffle hamuru ve sıcak Belçika çikolatası sunumu.',
      image: siteImages.cikolata,
      count: '14 Çeşit',
      tag: 'Belçika Çikolatası',
    },
    {
      title: 'Hatay Serpme Kahvaltısı',
      subtitle: 'Bakır sahanda tereyağlı yumurta, yöresel peynirler, çıtır simit ve demlik çay.',
      image: siteImages.kahvalti,
      count: 'Serpme & Porsiyon',
      tag: 'Her Sabah 08:30',
    },
  ]

  return (
    <section
      id="lezzet-dunyasi"
      className="py-14 sm:py-24 lg:py-28 bg-[#FFFFFF] text-[#0F2217] border-t border-[#E7E1D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#E7E1D6]">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C] mb-1.5 sm:mb-2">
              Mutfak & Salon Kültürü
            </p>
            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Tatlı ve Gastronomi Dünyası
            </h2>
            <p className="font-['Manrope_Variable',sans-serif] text-xs sm:text-base text-[#6E655C] mt-1.5 sm:mt-2 max-w-xl leading-relaxed">
              Anlaroğlu ustalığı yalnızca baklavayla sınırlı değil. Közde pişen künefelerden çıtır katmerlere, butik pastalardan zengin kahvaltıya uzanan lezzet yelpazemiz.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenAllProducts}
              className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0F2217] text-[#FAF7F2] hover:bg-[#C29F5C] hover:text-[#0F2217] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Tüm Menüyü Keşfet (264 Lezzet)</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipeable Snap-Reel / Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {collections.map((item) => (
            <div
              key={item.title}
              onClick={onOpenAllProducts}
              className="w-[82vw] max-w-[320px] sm:w-auto shrink-0 sm:shrink snap-center group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-[#E7E1D6] bg-[#FAF7F2] hover:border-[#C29F5C] hover:shadow-xl transition-all duration-500"
            >
              {/* Food Photography Plate */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/5">
                <ImageWithFallback
                  image={item.image}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Tag Pill */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0F2217]/80 backdrop-blur-sm text-[#FAF7F2] text-[10px] sm:text-[11px] font-medium tracking-wider uppercase">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[#FAF7F2]">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#C29F5C]">
                    {item.count}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#C29F5C] group-hover:text-[#0F2217] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-['Cormorant_Garamond_Variable',serif] text-xl sm:text-2xl font-normal text-[#0F2217] group-hover:text-[#C29F5C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-['Manrope_Variable',sans-serif] text-xs sm:text-sm text-[#6E655C] mt-1.5 sm:mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-4 pt-3 border-t border-[#E7E1D6]/80 flex items-center justify-between text-xs font-semibold text-[#0F2217]">
                  <span>Ürünleri İncele</span>
                  <span className="text-[#C29F5C] font-bold">Menüde Gör →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-[11px] text-[#6E655C] font-medium">
          <span>←</span>
          <span>Diğer tatlıları görmek için kaydırın</span>
          <span>→</span>
        </div>
      </div>
    </section>
  )
}
