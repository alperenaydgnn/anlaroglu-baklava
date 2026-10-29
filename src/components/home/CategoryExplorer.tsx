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
      subtitle: 'Bakır tepside közde nar gibi kızaran tel kadayıf, sünme peynir ve bol Antep fıstığı.',
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
      subtitle: 'Karamelize San Sebastian, Belçika çikolatalı ve Antep fıstıklı özel pastalar.',
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
      title: 'Gaziantep Kahvaltı Sofrası',
      subtitle: 'Bakır sahanda tereyağlı yumurta, peynir çeşitleri, çıtır simit ve demlik çay.',
      image: siteImages.kahvalti,
      count: 'Serpme & Porsiyon',
      tag: 'Her Sabah 08:30',
    },
  ]

  return (
    <section
      id="lezzet-dunyasi"
      className="py-20 sm:py-28 bg-[#FFFFFF] text-[#0F2217] border-t border-[#E7E1D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E1D6]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C] mb-2">
              Mutfak & Salon Kültürü
            </p>
            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Tatlı ve Gastronomi Dünyası
            </h2>
            <p className="font-['Manrope_Variable',sans-serif] text-sm sm:text-base text-[#6E655C] mt-2 max-w-xl">
              Anlaroğlu ustalığı yalnızca baklavayla sınırlı değil. Közde pişen künefelerden çıtır katmerlere, butik pastalardan zengin kahvaltıya uzanan lezzet yelpazemiz.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenAllProducts}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F2217] text-[#FAF7F2] hover:bg-[#C29F5C] hover:text-[#0F2217] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Tüm Menüyü Keşfet (264 Lezzet)</span>
            </button>
          </div>
        </div>

        {/* Visual Gastro Grid - 6 Large Evocative Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.title}
              onClick={onOpenAllProducts}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-[#E7E1D6] bg-[#FAF7F2] hover:border-[#C29F5C] hover:shadow-xl transition-all duration-500"
            >
              {/* Large Food Photography */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/5">
                <ImageWithFallback
                  image={item.image}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Tag Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F2217]/80 backdrop-blur-sm text-[#FAF7F2] text-[11px] font-medium tracking-wider uppercase">
                  {item.tag}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FAF7F2]">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#C29F5C]">
                    {item.count}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#C29F5C] group-hover:text-[#0F2217] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-['Cormorant_Garamond_Variable',serif] text-2xl font-normal text-[#0F2217] group-hover:text-[#C29F5C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-['Manrope_Variable',sans-serif] text-xs sm:text-sm text-[#6E655C] mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E7E1D6]/80 flex items-center justify-between text-xs font-semibold text-[#0F2217]">
                  <span>Ürünleri İncele</span>
                  <span className="text-[#C29F5C] font-bold">Menüde Gör</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
