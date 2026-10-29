import { useState, useMemo, useEffect } from 'react'
import { X, Search, ExternalLink } from 'lucide-react'
import { products, type Product } from '../../data/products'
import { categories } from '../../data/categories'
import { siteConfig } from '../../data/site-config'

interface AllProductsModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProduct: (product: Product) => void
}

export function AllProductsModal({ isOpen, onClose, onSelectProduct }: AllProductsModalProps) {
  const [search, setSearch] = useState('')
  const [selectedCat, setSelectedCat] = useState<string>('all')

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

  const filteredProducts = useMemo(() => {
    const s = search.toLocaleLowerCase('tr-TR').trim()
    return products.filter((p) => {
      const matchCat = selectedCat === 'all' || p.category === selectedCat
      if (!matchCat) return false
      if (!s) return true
      const name = p.name.toLocaleLowerCase('tr-TR')
      const note = (p.note ?? '').toLocaleLowerCase('tr-TR')
      return name.includes(s) || note.includes(s)
    })
  }, [search, selectedCat])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E7E1D6] shadow-2xl flex flex-col text-[#0F2217]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FFFFFF] border-b border-[#E7E1D6] flex items-center justify-between shrink-0">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C29F5C]">
              Anlaroğlu Dijital Menü Kataloğu
            </p>
            <h3 className="font-['Cormorant_Garamond_Variable',serif] text-2xl sm:text-3xl text-[#0F2217] leading-none mt-1 font-normal">
              Tüm Menü ({products.length} Lezzet)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.qrMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2217] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#C29F5C] hover:text-[#0F2217] transition-all"
            >
              <span>Karekod Menü</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#0F2217]/10 hover:bg-[#0F2217] hover:text-[#FAF7F2] text-[#0F2217] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#E7E1D6] flex flex-col sm:flex-row gap-3 items-stretch shrink-0">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#6E655C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ürün adı veya malzeme ara (örn: şöbiyet, katmer, sütlaç)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FFFFFF] border border-[#E7E1D6] text-xs sm:text-sm text-[#0F2217] placeholder-[#6E655C]/70 focus:outline-none focus:border-[#C29F5C]"
            />
          </div>

          {/* Category Dropdown on Mobile / Scrollable Tabs on Desktop */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedCat('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                selectedCat === 'all'
                  ? 'bg-[#0F2217] text-[#FAF7F2]'
                  : 'bg-[#FFFFFF] border border-[#E7E1D6] text-[#6E655C] hover:text-[#0F2217]'
              }`}
            >
              Tümü ({products.length})
            </button>
            {categories.slice(0, 8).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCat(cat.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCat === cat.slug
                    ? 'bg-[#0F2217] text-[#FAF7F2]'
                    : 'bg-[#FFFFFF] border border-[#E7E1D6] text-[#6E655C] hover:text-[#0F2217]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Products List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF7F2]">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-base text-[#6E655C]">Aradığınız kriterlere uygun ürün bulunamadı.</p>
              <button
                onClick={() => {
                  setSearch('')
                  setSelectedCat('all')
                }}
                className="mt-3 text-xs font-bold uppercase tracking-wider text-[#C29F5C] hover:underline"
              >
                Aramayı Temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredProducts.map((product) => {
                const cat = categories.find((c) => c.slug === product.category)
                return (
                  <div
                    key={product.slug}
                    onClick={() => {
                      onClose()
                      onSelectProduct(product)
                    }}
                    className="group p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E1D6] hover:border-[#C29F5C] hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-[#C29F5C] mb-1">
                        <span>{cat?.name}</span>
                        {product.serving && <span>{product.serving}</span>}
                      </div>
                      <h4 className="font-['Cormorant_Garamond_Variable',serif] text-xl font-normal text-[#0F2217] group-hover:text-[#C29F5C] transition-colors leading-tight">
                        {product.name}
                      </h4>
                      {product.note && (
                        <p className="text-xs text-[#6E655C] mt-1 line-clamp-2 leading-relaxed">
                          {product.note}
                        </p>
                      )}
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#E7E1D6]/80 flex items-center justify-between text-[11px] font-semibold text-[#0F2217]">
                      <span>Detayları İncele</span>
                      <span className="text-[#C29F5C] group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
