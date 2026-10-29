import { useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/home/Hero'
import { SignatureBaklava } from './components/home/SignatureBaklava'
import { CategoryExplorer } from './components/home/CategoryExplorer'
import { BranchesSection } from './components/home/BranchesSection'
import { Footer } from './components/layout/Footer'
import { ProductModal } from './components/products/ProductModal'
import { AllProductsModal } from './components/products/AllProductsModal'
import { OrderModal } from './components/common/OrderModal'
import type { Product } from './data/products'

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false)
  const [isOrderOpen, setIsOrderOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F2217] flex flex-col font-['Manrope_Variable',sans-serif]">
      {/* Top Navigation */}
      <Navbar onOpenOrder={() => setIsOrderOpen(true)} />

      {/* Main Editorial Content - Focused, Punchy, Animated */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Signature Baklava Showcase */}
        <SignatureBaklava
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExploreAll={() => setIsAllProductsOpen(true)}
        />

        {/* 3. Comprehensive Category Explorer */}
        <CategoryExplorer
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenAllProducts={() => setIsAllProductsOpen(true)}
        />

        {/* 4. Branches & Direct Ordering */}
        <BranchesSection />
      </main>

      {/* 5. Editorial Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <AllProductsModal
        isOpen={isAllProductsOpen}
        onClose={() => setIsAllProductsOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
      />
    </div>
  )
}

export default App
