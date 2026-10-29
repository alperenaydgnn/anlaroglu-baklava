import { Sparkles } from 'lucide-react'
import { siteImages } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'

export function BrandStory() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#FFFCF5] text-[#241A15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images Layout (6 columns) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Master artisan hands stretching phyllo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D9D0C2] aspect-[4/5]">
                <ImageWithFallback
                  image={siteImages.brandStory}
                  className="w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Overlapping Secondary Image: Store interior */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 lg:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFFCF5] z-10">
                <ImageWithFallback
                  image={siteImages.storeInterior}
                  className="w-full h-full"
                  sizes="260px"
                />
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute top-6 left-6 p-4 rounded-xl bg-[#183D2B]/90 backdrop-blur-md text-[#FFFCF5] border border-[#B99558]/30 max-w-[200px] text-xs z-20">
                <span className="font-['Cormorant_Garamond_Variable',serif] text-base italic block text-[#B99558]">
                  "Hamurun nefesi, ustanın sabrıdır."
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#D9D0C2] mt-1 block">
                  Anlaroğlu Mutfak İlkesi
                </span>
              </div>
            </div>
          </div>

          {/* Text Content (6 columns) */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B99558]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>06 / Marka Hikâyesi</span>
            </div>

            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-6xl font-normal leading-[1.05] tracking-tight text-[#183D2B]">
              Geleneksel Tatlı Kültürünün <br />
              <span className="italic font-light text-[#244B35]">Çağdaş Yorumu.</span>
            </h2>

            {/* Editorial Copy */}
            <div className="space-y-5 text-base sm:text-lg text-[#241A15]/80 font-['Manrope_Variable',sans-serif] leading-relaxed">
              <p>
                Anlaroğlu Baklava, köklü tatlı geleneğini modern sunum ve titiz hizmet kalitesiyle
                bir araya getirmek amacıyla kuruldu. İlk günden beri hedefimiz; misafirlerimize
                yalnızca bir tatlı sunmak değil, her lokmada damakta iz bırakan bir gastronomi
                deneyimi yaşatmaktır.
              </p>
              <p className="text-sm sm:text-base text-[#241A15]/70">
                Gaziantep’in bereketli topraklarından gelen taze Antep fıstıkları, özel olarak
                üretilen sadeyağ ve kuşaktan kuşağa aktarılan yufka açma mahareti, fırınlarımızda
                aynı özenle buluşuyor.
              </p>
            </div>

            {/* Key Facts / Values */}
            <div className="pt-6 border-t border-[#D9D0C2] grid grid-cols-2 gap-6 font-['Manrope_Variable',sans-serif]">
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-[#183D2B]">
                  Doğal & Katkısız
                </h4>
                <p className="text-xs text-[#241A15]/70 mt-1 leading-relaxed">
                  Şeker pancarından üretilen doğal şerbet ve hakiki sadeyağ kullanımı.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-[#183D2B]">
                  Günlük Taze Üretim
                </h4>
                <p className="text-xs text-[#241A15]/70 mt-1 leading-relaxed">
                  Fırından yeni çıkmış sıcak tepsiler ve daima çıtır sunum garantisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
