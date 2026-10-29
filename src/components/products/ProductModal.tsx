import { useEffect } from 'react'
import { X, ExternalLink, Check } from 'lucide-react'
import type { Product } from '../../data/products'
import { categories } from '../../data/categories'
import { siteImages, type SiteImageKey } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  const category = categories.find((c) => c.slug === product.category)

  // Find image asset
  let imageAsset = product.image ? siteImages[product.image as SiteImageKey] : null
  if (!imageAsset && product.category === 'kunefeler') imageAsset = siteImages.kunefe
  if (!imageAsset && product.category === 'katmerler') imageAsset = siteImages.katmer
  if (!imageAsset && product.category === 'sutlu-tatlilar') imageAsset = siteImages.sutluTatlilar
  if (!imageAsset && product.category === 'pasta-tatli') imageAsset = siteImages.pastaTatli
  if (!imageAsset && product.category === 'cikolata-dunyasi') imageAsset = siteImages.cikolata
  if (!imageAsset && product.category === 'kahvalti') imageAsset = siteImages.kahvalti
  if (!imageAsset && product.category.includes('icecekler')) imageAsset = siteImages.icecekler
  if (!imageAsset) imageAsset = siteImages.ozelBaklava

  const qrUrl = `https://anlaroglu.karekodmenu.net/${product.menuPath}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E7E1D6] shadow-2xl flex flex-col md:flex-row text-[#0F2217]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0F2217]/10 text-[#0F2217] hover:bg-[#0F2217] hover:text-[#FAF7F2] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual (45%) */}
        <div className="md:w-1/2 aspect-[4/3] md:aspect-auto relative bg-[#FAF7F2] min-h-[240px]">
          <ImageWithFallback
            image={imageAsset}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 350px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-3 left-4 text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider md:hidden">
            {category?.name}
          </div>
        </div>

        {/* Product Info (55%) */}
        <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29F5C]">
              {category?.name ?? 'Anlaroğlu Seçimi'}
            </p>

            <h3 className="font-['Cormorant_Garamond_Variable',serif] text-3xl sm:text-4xl text-[#0F2217] leading-tight font-normal">
              {product.name}
            </h3>

            {product.note && (
              <p className="text-sm text-[#6E655C] font-['Manrope_Variable',sans-serif] leading-relaxed">
                {product.note}
              </p>
            )}

            {product.serving && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E1D6] text-xs font-semibold text-[#0F2217]">
                <Check className="w-3.5 h-3.5 text-[#C29F5C]" />
                <span>{product.serving}</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#E7E1D6] space-y-3">
            <a
              href={qrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0F2217] text-[#FAF7F2] hover:bg-[#C29F5C] hover:text-[#0F2217] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm"
            >
              <span>Dijital Menüde İncele</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <p className="text-[11px] text-[#6E655C] text-center">
              Fırından taze imalat · Şube ve paket servis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
