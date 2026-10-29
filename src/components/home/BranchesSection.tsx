import { useState } from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { siteConfig } from '../../data/site-config'
import { siteImages } from '../../data/site-images'
import { ImageWithFallback } from '../common/ImageWithFallback'

export function BranchesSection() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(siteConfig.branches[0].id)

  const selectedBranch =
    siteConfig.branches.find((b) => b.id === selectedBranchId) ?? siteConfig.branches[0]

  return (
    <section
      id="subeler"
      className="py-20 sm:py-28 bg-[#FAF7F2] text-[#0F2217] border-t border-[#E7E1D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29F5C] mb-2">
            Mekân & Ulaşım
          </p>
          <h2 className="font-['Cormorant_Garamond_Variable',serif] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Şubelerimiz
          </h2>
          <p className="font-['Manrope_Variable',sans-serif] text-sm sm:text-base text-[#6E655C] mt-2">
            Nezih salonumuzda tatlılarımızı deneyimlemek veya tepsi ve kutu siparişlerinizi teslim almak için bekliyoruz.
          </p>
        </div>

        {/* Branch Selector Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-[#FFFFFF] border border-[#E7E1D6] shadow-sm">
            {siteConfig.branches.map((branch) => {
              const isActive = branch.id === selectedBranchId
              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F2217] text-[#FAF7F2] shadow-sm'
                      : 'text-[#6E655C] hover:text-[#0F2217]'
                  }`}
                >
                  {branch.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Branch Showcase Card */}
        <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E7E1D6] shadow-sm grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          {/* Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <ImageWithFallback
              image={siteImages.storeInterior}
              className="w-full h-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 text-white lg:hidden">
              <span className="text-xs uppercase tracking-widest text-[#C29F5C] font-semibold">
                {selectedBranch.city}
              </span>
              <h3 className="font-['Cormorant_Garamond_Variable',serif] text-2xl font-normal">
                {selectedBranch.name}
              </h3>
            </div>
          </div>

          {/* Details & Actions (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="hidden lg:flex items-center justify-between mb-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#C29F5C]">
                  {selectedBranch.city} · Şube & Salon
                </span>
                <span className="text-xs text-[#6E655C] uppercase tracking-wider">
                  Salon & Paket Servis
                </span>
              </div>

              <h3 className="hidden lg:block font-['Cormorant_Garamond_Variable',serif] text-3xl sm:text-4xl font-normal text-[#0F2217]">
                {selectedBranch.name}
              </h3>

              {/* Information Rows */}
              <div className="space-y-4 mt-4 sm:mt-6 text-sm text-[#0F2217]">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E7E1D6] flex items-center justify-center shrink-0 text-[#C29F5C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E655C] block">
                      Adres
                    </span>
                    <p className="mt-0.5 text-sm sm:text-base leading-relaxed text-[#0F2217]">
                      {selectedBranch.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E7E1D6] flex items-center justify-center shrink-0 text-[#C29F5C]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E655C] block">
                      Çalışma Saatleri
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#0F2217]">
                      Hafta içi: {selectedBranch.hoursWeekday} · Hafta sonu: {selectedBranch.hoursWeekend}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E7E1D6] flex items-center justify-center shrink-0 text-[#C29F5C]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E655C] block">
                      Sipariş & Rezervasyon Hattı
                    </span>
                    <a
                      href={`tel:${selectedBranch.phone}`}
                      className="mt-0.5 text-sm sm:text-base font-semibold text-[#0F2217] hover:text-[#C29F5C] transition-colors"
                    >
                      {selectedBranch.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-[#E7E1D6] flex flex-wrap items-center gap-3">
              <a
                href={selectedBranch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F2217] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#C29F5C] hover:text-[#0F2217] transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Haritalarda Aç</span>
              </a>

              <a
                href={`tel:${selectedBranch.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E7E1D6] bg-[#FAF7F2] text-[#0F2217] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#FFFFFF] hover:border-[#0F2217] transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#C29F5C]" />
                <span>Şubeyi Ara</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
