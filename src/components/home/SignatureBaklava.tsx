import { ArrowRight, Eye } from 'lucide-react'
import { products, type Product } from '../../data/products'
import { siteImages } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'

interface SignatureBaklavaProps {
  onSelectProduct: (product: Product) => void
  onExploreAll: () => void
}

export function SignatureBaklava({ onSelectProduct, onExploreAll }: SignatureBaklavaProps) {
  // 6 Essential Signature Baklava Cuts
  const ozelBaklava = products.find((p) => p.slug === 'ozel-baklava')!
  const havucDilimi = products.find((p) => p.slug === 'havuc-dilimi')!
  const sobiyet = products.find((p) => p.slug === 'sobiyet')!
  const midye = products.find((p) => p.slug === 'midye')!
  const saraySarma = products.find((p) => p.slug === 'saray-sarma')!
  const sogukBaklava = products.find((p) => p.slug === 'soguk-baklava')!

  const signatureItems = [
    {
      product: ozelBaklava,
      image: siteImages.ozelBaklava,
      badge: 'Geleneksel Kare',
      aspect: 'aspect-[16/10] sm:aspect-[16/11]',
      isHero: true,
    },
    {
      product: havucDilimi,
      image: siteImages.havucDilimi,
      badge: 'Büyük Dilim',
      aspect: 'aspect-square sm:aspect-[4/3]',
      isHero: false,
    },
    {
      product: sobiyet,
      image: siteImages.sobiyet,
      badge: 'Kaymaklı & Fıstıklı',
      aspect: 'aspect-square sm:aspect-[4/3]',
      isHero: false,
    },
    {
      product: midye,
      image: siteImages.midye,
      badge: 'Özel Kıvrım',
      aspect: 'aspect-square sm:aspect-[4/3]',
      isHero: false,
    },
    {
      product: saraySarma,
      image: siteImages.saraySarma,
      badge: 'Yoğun Fıstık Rulo',
      aspect: 'aspect-square sm:aspect-[4/3]',
      isHero: false,
    },
    {
      product: sogukBaklava,
      image: siteImages.sogukBaklava,
      badge: 'Süt Şerbetli & Kakao',
      aspect: 'aspect-square sm:aspect-[4/3]',
      isHero: false,
    },
  ]

  return (
    <section
      id="imza-baklavalar"
      className="py-14 sm:py-24 lg:py-28 bg-[#FAF7F2] text-[#0F2217]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#E7E1D6]">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C] mb-1.5 sm:mb-2">
              Tezgâh Koleksiyonu
            </p>
            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              İmza Baklavalar
            </h2>
            <p className="font-['Manrope_Variable',sans-serif] text-xs sm:text-base text-[#6E655C] mt-1.5 sm:mt-2 max-w-xl leading-relaxed">
              Tül inceliğindeki onlarca yufka, saf sadeyağ ve taze hasat fıstığın fırından çıkan en seçkin kesimleri.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onExploreAll}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2217] hover:text-[#C29F5C] transition-colors py-1 cursor-pointer"
            >
              <span>Tüm Çeşitleri Gör (264 Ürün)</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Responsive Lookbook: Mobile 2-column Jewelry Grid with Featured Card on top; Desktop 3-column */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-10">
          {signatureItems.map(({ product, image, badge, aspect, isHero }) => (
            <div
              key={product.slug}
              onClick={() => onSelectProduct(product)}
              className={`group cursor-pointer flex flex-col transition-all duration-300 ${
                isHero ? 'col-span-2 lg:col-span-1' : 'col-span-1'
              }`}
            >
              {/* Grand Visual Plate */}
              <div
                className={`relative ${aspect} w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E7E1D6] shadow-sm group-hover:border-[#C29F5C] group-hover:shadow-xl transition-all duration-500`}
              >
                <ImageWithFallback
                  image={image}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle Visual Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Refined Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0F2217]/85 backdrop-blur-sm text-[#FAF7F2] text-[9px] sm:text-[11px] font-medium tracking-wider uppercase">
                  {badge}
                </div>

                {/* Quick Inspection Pill on Hover */}
                <div className="hidden sm:flex absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm items-center justify-center text-[#0F2217] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Minimalist Editorial Labeling */}
              <div className="pt-2.5 sm:pt-4 flex flex-col justify-between flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2">
                  <h3 className="font-['Cormorant_Garamond_Variable',serif] text-lg sm:text-2xl lg:text-3xl font-normal text-[#0F2217] group-hover:text-[#C29F5C] transition-colors leading-snug truncate">
                    {product.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#C29F5C] uppercase tracking-wider shrink-0">
                    {product.serving ?? 'Porsiyon & Tepsi'}
                  </span>
                </div>

                <p className="font-['Manrope_Variable',sans-serif] text-[11px] sm:text-xs lg:text-sm text-[#6E655C] mt-1 line-clamp-2 leading-relaxed">
                  {product.note ?? 'Taze hasat fıstık ve saf sadeyağ ile hazırlanmış taş fırın klasiği.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
