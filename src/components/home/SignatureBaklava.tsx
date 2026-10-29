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
      aspect: 'aspect-[16/11]',
    },
    {
      product: havucDilimi,
      image: siteImages.havucDilimi,
      badge: 'Büyük Dilim',
      aspect: 'aspect-[4/3]',
    },
    {
      product: sobiyet,
      image: siteImages.sobiyet,
      badge: 'Kaymaklı & Fıstıklı',
      aspect: 'aspect-[4/3]',
    },
    {
      product: midye,
      image: siteImages.midye,
      badge: 'Özel Kıvrım',
      aspect: 'aspect-[4/3]',
    },
    {
      product: saraySarma,
      image: siteImages.saraySarma,
      badge: 'Yoğun Fıstık Rulo',
      aspect: 'aspect-[4/3]',
    },
    {
      product: sogukBaklava,
      image: siteImages.sogukBaklava,
      badge: 'Süt Şerbetli & Kakao',
      aspect: 'aspect-[4/3]',
    },
  ]

  return (
    <section
      id="imza-baklavalar"
      className="py-20 sm:py-28 bg-[#FAF7F2] text-[#0F2217]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Editorial, Quiet, Confident */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E1D6]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C] mb-2">
              Tezgâh Koleksiyonu
            </p>
            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              İmza Baklavalar
            </h2>
            <p className="font-['Manrope_Variable',sans-serif] text-sm sm:text-base text-[#6E655C] mt-2 max-w-xl">
              Tül inceliğindeki onlarca yufka, saf sadeyağ ve erken hasat Antep fıstığının fırından çıkan en seçkin kesimleri.
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

        {/* Visual-First Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {signatureItems.map(({ product, image, badge, aspect }) => (
            <div
              key={product.slug}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer flex flex-col transition-all duration-300"
            >
              {/* Grand Visual Plate */}
              <div
                className={`relative ${aspect} w-full rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E7E1D6] shadow-sm group-hover:border-[#C29F5C] group-hover:shadow-xl transition-all duration-500`}
              >
                <ImageWithFallback
                  image={image}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle Visual Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Refined Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F2217]/85 backdrop-blur-sm text-[#FAF7F2] text-[11px] font-medium tracking-wider uppercase">
                  {badge}
                </div>

                {/* Quick Inspection Pill on Hover */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm flex items-center justify-center text-[#0F2217] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Minimalist Editorial Labeling */}
              <div className="pt-4 flex flex-col justify-between flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-['Cormorant_Garamond_Variable',serif] text-2xl sm:text-3xl font-normal text-[#0F2217] group-hover:text-[#C29F5C] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#C29F5C] uppercase tracking-wider shrink-0">
                    {product.serving ?? 'Porsiyon & Tepsi'}
                  </span>
                </div>

                <p className="font-['Manrope_Variable',sans-serif] text-xs sm:text-sm text-[#6E655C] mt-1.5 line-clamp-2 leading-relaxed">
                  {product.note ?? 'Taze hasat Antep fıstığı ve sadeyağ ile hazırlanmış taş fırın klasiği.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
