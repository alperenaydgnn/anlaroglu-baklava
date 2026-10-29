/**
 * ANLAROĞLU BAKLAVA — MERKEZİ İŞLETME VE SİTE YAPILANDIRMASI
 * 
 * Bu dosya firmanın şube, iletişim, çalışma saatleri ve sosyal medya bilgilerini
 * tek bir noktada toplar. Henüz doğrulanmamış şube adresi ve telefon bilgileri
 * `isPlaceholder: true` olarak işaretlenmiştir; işletme kendi resmi verilerini
 * verdiğinde bu dosyayı güncellemek yeterlidir.
 */

export interface BranchInfo {
  id: string
  name: string
  badge?: string
  district: string
  city: string
  /** Gerçek adres sağlandığında güncellenir */
  address: string
  /** Gerçek telefon sağlandığında güncellenir */
  phone: string
  phoneDisplay: string
  /** Haftalık çalışma saatleri */
  hoursWeekday: string
  hoursWeekend: string
  /** Google Haritalar arama veya yol tarifi linki */
  mapsUrl: string
  /** Bilgilerin doğrulanmış olup olmadığı */
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
  contactEmailPlaceholder: 'iletisim@anlaroglu.com', // [DEĞİŞTİRİLEBİLİR PLACEHOLDER]
  branches: [
    {
      id: 'merkez-sube',
      name: 'Merkez Şube & Salon',
      badge: 'Ana Mağaza & Fırın',
      city: 'Gaziantep',
      district: 'Şehitkamil',
      // [AŞAĞIDAKİ ALANLAR İŞLETME RESMİ BİLGİLERİYLE DEĞİŞTİRİLEBİLİR PLACEHOLDER'LARDIR]
      address: 'İncilipınar Mah. Prof. Muammer Aksoy Cad. No: 12/A, Şehitkamil / Gaziantep',
      phone: '+903420000000',
      phoneDisplay: '0 (342) 000 00 00',
      hoursWeekday: '08:30 — 23:30',
      hoursWeekend: '08:30 — 00:00',
      mapsUrl: 'https://maps.google.com/?q=Anlaroglu+Baklava',
      isPlaceholder: true,
      notes: 'Geniş tatlı salonu, özel kahvaltı alanı ve fırından taze tepsi servisi.',
    },
    {
      id: 'ankara-sube',
      name: 'Ankara Şube & Kafe',
      badge: 'Kafe & Butik Satış',
      city: 'Ankara',
      district: 'Çankaya',
      // [AŞAĞIDAKİ ALANLAR İŞLETME RESMİ BİLGİLERİYLE DEĞİŞTİRİLEBİLİR PLACEHOLDER'LARDIR]
      address: 'Tunalı Hilmi Cad. No: 88, Çankaya / Ankara',
      phone: '+903120000000',
      phoneDisplay: '0 (312) 000 00 00',
      hoursWeekday: '09:00 — 23:00',
      hoursWeekend: '09:00 — 23:30',
      mapsUrl: 'https://maps.google.com/?q=Anlaroglu+Baklava+Ankara',
      isPlaceholder: true,
      notes: 'Gaziantep’ten günlük gelen taze baklavalar ve özel kahve barı.',
    },
  ],
}
