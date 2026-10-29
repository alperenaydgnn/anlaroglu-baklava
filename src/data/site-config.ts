/**
 * ANLAROĞLU BAKLAVA — MERKEZİ İŞLETME VE SİTE YAPILANDIRMASI
 * 
 * Hatay merkezli Anlaroğlu Baklava resmi şube, adres ve iletişim bilgileri.
 */

export interface BranchInfo {
  id: string
  name: string
  badge?: string
  district: string
  city: string
  address: string
  phone: string
  phoneDisplay: string
  hoursWeekday: string
  hoursWeekend: string
  mapsUrl: string
  isPlaceholder?: boolean
  notes?: string
}

export interface SiteConfig {
  brandName: string
  brandSub: string
  tagline: string
  establishedYear: number
  sinceText: string
  qrMenuUrl: string
  socials: {
    instagram: string
    facebook: string
  }
  branches: BranchInfo[]
  contactEmailPlaceholder: string
}

export const siteConfig: SiteConfig = {
  brandName: 'ANLAROĞLU',
  brandSub: 'BAKLAVA',
  tagline: 'Tatlı Sanatının İnceliği',
  establishedYear: 1998,
  sinceText: "since '98",
  qrMenuUrl: 'https://anlaroglu.karekodmenu.net/',
  socials: {
    instagram: 'https://www.instagram.com/anlaroglubaklava/',
    facebook: 'https://www.facebook.com/anlaroglu.baklava.969',
  },
  contactEmailPlaceholder: 'iletisim@anlaroglu.com',
  branches: [
    {
      id: 'hatay-defne',
      name: 'Defne Merkez Şube & Salon',
      badge: 'Merkez Şube & Fırın',
      city: 'Hatay',
      district: 'Defne',
      address: 'Subaşı, Çevre Yolu No:114, 31158 Defne/Hatay',
      phone: '+905013320294',
      phoneDisplay: '0 (501) 332 02 94',
      hoursWeekday: '08:30 — 23:30',
      hoursWeekend: '08:30 — 00:00',
      mapsUrl: 'https://maps.google.com/?q=Suba%C5%9F%C4%B1,+%C3%87evre+Yolu+No:114,+31158+Defne/Hatay',
      notes: 'Hatay taş fırın tatlıları, taze çıtır baklava çeşitleri ve nezih salon servisi.',
    },
    {
      id: 'iskenderun-sube',
      name: 'İskenderun Şubesi',
      badge: 'Şube & Paket Servis',
      city: 'İskenderun',
      district: 'İskenderun',
      address: 'İskenderun / Hatay',
      phone: '+905013320294',
      phoneDisplay: '0 (501) 332 02 94',
      hoursWeekday: '08:30 — 23:30',
      hoursWeekend: '08:30 — 00:00',
      mapsUrl: 'https://maps.google.com/?q=Anlaroglu+Baklava+Iskenderun',
      notes: 'Fırından taze Hatay baklavaları, sıcak tatlılar ve paket sipariş servisi.',
    },
  ],
}
