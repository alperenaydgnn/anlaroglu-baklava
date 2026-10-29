import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteImages } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      // Subtle parallax on the macro photo collage
      gsap.to(imageColRef.current, {
        y: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#F6F0E5] text-[#183D2B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[#B99558]">
              02 / Zanaat Manifestosu
            </div>

            <h2 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#183D2B]">
              İncelikle açılan katlar. <br />
              Özenle seçilen lezzetler. <br />
              <span className="italic font-light text-[#244B35]">
                Her lokmada hissedilen bir gelenek.
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#241A15]/80 font-['Manrope_Variable',sans-serif] leading-relaxed max-w-xl">
              <p>
                Anlaroğlu mutfağında baklava, aceleye getirilmeyen bir sabır zanaatidir. Oklavanın
                altında tül inceliğine kavuşan her yufka, Gaziantep ovasının taze Antep fıstığıyla
                ve saf tereyağının rayihasıyla buluşur.
              </p>
              <p className="text-sm sm:text-base text-[#241A15]/70">
                Geleneksel tatlı kültürünü bugünün estetik anlayışıyla harmanlarken, lezzetin
                özünden asla ödün vermiyoruz. Her tepside aynı çıtırlık, her dilimde aynı altın sarısı
                denge.
              </p>
            </div>

            {/* Three Pillar Signatures */}
            <div className="pt-6 border-t border-[#D9D0C2] grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <span className="font-['Cormorant_Garamond_Variable',serif] text-2xl sm:text-3xl text-[#183D2B] font-medium block">
                  40+
                </span>
                <span className="font-['Manrope_Variable',sans-serif] text-xs text-[#241A15]/65 uppercase tracking-wider block mt-1">
                  Tül Katman
                </span>
              </div>
              <div>
                <span className="font-['Cormorant_Garamond_Variable',serif] text-2xl sm:text-3xl text-[#183D2B] font-medium block">
                  %100
                </span>
                <span className="font-['Manrope_Variable',sans-serif] text-xs text-[#241A15]/65 uppercase tracking-wider block mt-1">
                  Antep Fıstığı
                </span>
              </div>
              <div>
                <span className="font-['Cormorant_Garamond_Variable',serif] text-2xl sm:text-3xl text-[#183D2B] font-medium block">
                  1998
                </span>
                <span className="font-['Manrope_Variable',sans-serif] text-xs text-[#241A15]/65 uppercase tracking-wider block mt-1">
                  Kadim Ustalık
                </span>
              </div>
            </div>
          </div>

          {/* Asymmetrical Photo Collage */}
          <div ref={imageColRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Vertical Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#183D2B]/15 border border-[#D9D0C2] aspect-[4/5] relative">
                <ImageWithFallback
                  image={siteImages.pistachioMacro}
                  className="w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183D2B]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-['Manrope_Variable',sans-serif] tracking-widest uppercase text-[#FFFCF5] bg-[#183D2B]/70 backdrop-blur-sm px-3 py-1.5 rounded-full inline-flex w-fit">
                  {siteImages.pistachioMacro.caption}
                </div>
              </div>

              {/* Offset Overlapping Detail Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 lg:w-52 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-[#F6F0E5]">
                <ImageWithFallback
                  image={siteImages.layersMacro}
                  className="w-full h-full"
                  sizes="220px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
