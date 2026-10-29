import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteImages } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function CraftSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageParallaxRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      gsap.to(imageParallaxRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="zanaat"
      ref={sectionRef}
      className="relative py-28 sm:py-36 lg:py-48 bg-[#183D2B] text-[#FFFCF5] overflow-hidden"
    >
      {/* Background Dimmed Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <ImageWithFallback
          image={siteImages.trayOverhead}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text / Poetic Breakdown */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#B99558]">
              04 / Duyu & Denge
            </div>

            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#FFFCF5]">
              Ustalık, <br />
              <span className="italic font-light text-[#D9D0C2]">Ayrıntıda Saklıdır.</span>
            </h2>

            <p className="font-['Manrope_Variable',sans-serif] text-base sm:text-lg text-[#D9D0C2]/85 leading-relaxed font-light max-w-lg">
              Çatalla ilk dokunuşta duyulan o berrak çıtırtı; tepsinin kokusunda hissedilen saf
              sadeyağ ve damağa yayılan kadife gibi taze şerbet. İyi bir baklavayı diğerlerinden
              ayıran, bu kusursuz ritimdir.
            </p>

            {/* Editorial Sensory Items */}
            <div className="space-y-6 pt-4 border-t border-[#B99558]/25 text-sm font-['Manrope_Variable',sans-serif]">
              <div className="flex items-start gap-4">
                <span className="text-[#B99558] font-['Cormorant_Garamond_Variable',serif] text-2xl leading-none">
                  I.
                </span>
                <div>
                  <h4 className="font-semibold text-[#FFFCF5] uppercase tracking-wider text-xs">
                    Işık Geçiren Yufka
                  </h4>
                  <p className="text-[#D9D0C2]/70 text-xs mt-1">
                    Ustanın eli altından gazete yazısı okunabilecek incelikte açılan onlarca katman.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[#B99558] font-['Cormorant_Garamond_Variable',serif] text-2xl leading-none">
                  II.
                </span>
                <div>
                  <h4 className="font-semibold text-[#FFFCF5] uppercase tracking-wider text-xs">
                    Kavrulmamış Zümrüt Fıstık
                  </h4>
                  <p className="text-[#D9D0C2]/70 text-xs mt-1">
                    Aroma kaybını önlemek için hasadın ilk döneminde toplanan canlı yeşil boz fıstık.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[#B99558] font-['Cormorant_Garamond_Variable',serif] text-2xl leading-none">
                  III.
                </span>
                <div>
                  <h4 className="font-semibold text-[#FFFCF5] uppercase tracking-wider text-xs">
                    Kıvamlı Altın Şerbet
                  </h4>
                  <p className="text-[#D9D0C2]/70 text-xs mt-1">
                    Baklavayı hamurlaştırmayan, sadece çıtır katmanların parlaklığını koruyan hafif şerbet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Frame with Parallax */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#B99558]/30 shadow-2xl shadow-black/40 aspect-[4/5] max-w-lg mx-auto">
              <div ref={imageParallaxRef} className="absolute inset-0 h-[120%] -top-[10%]">
                <ImageWithFallback
                  image={siteImages.layersMacro}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Edge gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#183D2B]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#183D2B]/80 backdrop-blur-md border border-[#B99558]/20 text-xs text-[#D9D0C2] flex items-center justify-between">
                <span className="uppercase tracking-widest text-[#B99558] font-semibold text-[10px]">
                  Makro Enine Kesit
                </span>
                <span>Tül Katmanlar & Boz Fıstık</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
