/**
 * ANLAROĞLU BAKLAVA — MERKEZİ GÖRSEL YÖNETİM SİSTEMİ
 * 
 * Bu dosya sitedeki tüm fotoğrafların tek merkezden yönetilmesini sağlar.
 * İleride yeni bir fotoğraf çekildiğinde veya yüksek çözünürlüklü gerçek görseller
 * eklendiğinde, yalnızca bu dosyadaki dosya yollarını (webp/jpg) güncellemek yeterlidir.
 * Sayfalardaki bileşenlerin hiçbiri doğrudan dosya yoluna bağımlı değildir.
 */

export interface ImageAsset {
  /** WebP formatındaki görsel yolu */
  webp: string
  /** JPEG/PNG formatındaki yedek görsel yolu */
  fallback: string
  /** Erişilebilirlik ve SEO için editoryal açıklama */
  alt: string
  /** CSS object-position (görselin odak noktası) */
  objectPosition?: string
  /** CSS object-fit */
  objectFit?: 'cover' | 'contain' | 'scale-down'
  /** Genişlik ve yükseklik oranı veya ipucu */
  aspectRatio?: string
  /** Fotoğrafın editoryal başlığı */
  caption?: string
}

export const siteImages = {
  // === HERO VE İLK EKRAN ===
  heroBaklava: {
    webp: '/images/hero/hero-baklava.webp',
    fallback: '/images/hero/hero-baklava.jpg',
    alt: 'Koyu taş zemin üzerinde taze şerbetiyle parıldayan altın sarısı fıstıklı baklava dilimleri',
    objectPosition: 'center 45%',
    objectFit: 'cover',
    caption: 'Tepside taze kesim Antep fıstıklı baklava',
  },

  // === İMZA BAKLAVALAR VİTRİNİ ===
  ozelBaklava: {
    webp: '/images/products/ozel-baklava.webp',
    fallback: '/images/products/ozel-baklava.jpg',
    alt: 'Bol Antep fıstıklı, çıtır katmanlı Anlaroğlu Özel Baklava porsiyonu',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Özel Baklava',
  },
  sobiyet: {
    webp: '/images/products/sobiyet.webp',
    fallback: '/images/products/sobiyet.jpg',
    alt: 'Sahan kaymağı ve fıstık dolgulu çıtır üçgen şöbiyet dilimleri',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Kaymaklı Şöbiyet',
  },
  saraySarma: {
    webp: '/images/products/saray-sarma.webp',
    fallback: '/images/products/saray-sarma.jpg',
    alt: 'Yoğun zümrüt yeşili fıstık dolgulu Saray Sarma ruloları',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Saray Sarma',
  },
  midye: {
    webp: '/images/products/midye.webp',
    fallback: '/images/products/midye.jpg',
    alt: 'Özel Anlaroğlu ahşap sunum tabağında midye baklava ve taze Antep fıstığı taneleri',
    objectPosition: 'center 55%',
    objectFit: 'cover',
    caption: 'Midye Baklava',
  },
  havucDilimi: {
    webp: '/images/products/havuc-dilimi.webp',
    fallback: '/images/products/havuc-dilimi.jpg',
    alt: 'Tepsinin ortasından kesilmiş cömert havuç dilimi baklava',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Havuç Dilimi',
  },
  sogukBaklava: {
    webp: '/images/products/soguk-baklava.webp',
    fallback: '/images/products/soguk-baklava.jpg',
    alt: 'Süt şerbetli, üzeri çikolata ve fıstık kaplı soğuk baklava',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Soğuk Baklava',
  },

  // === ZANAAT VE MAKRO DETAYLAR ===
  pistachioMacro: {
    webp: '/images/brand/pistachio-macro.webp',
    fallback: '/images/brand/pistachio-macro.jpg',
    alt: 'Baklava katmanları üzerine serpilen taze dövülmüş zümrüt yeşili Antep fıstığının makro dokusu',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Doğal Antep Fıstığı Dokusu',
  },
  layersMacro: {
    webp: '/images/brand/layers-macro.webp',
    fallback: '/images/brand/layers-macro.jpg',
    alt: 'Işık geçiren incelikte açılmış tül gibi baklava yufkalarının enine kesiti',
    objectPosition: 'center 40%',
    objectFit: 'cover',
    caption: 'Tül İnceliğinde Katmanlar',
  },
  trayOverhead: {
    webp: '/images/brand/tray-overhead.webp',
    fallback: '/images/brand/tray-overhead.jpg',
    alt: 'Geleneksel bakır tepside baklava dilimlerinin geometrik üstten görünümü',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Geleneksel Bakır Tepsi',
  },

  // === MARKA VE MEKÂN ATMOSFERİ ===
  brandStory: {
    webp: '/images/brand/brand-story.webp',
    fallback: '/images/brand/brand-story.jpg',
    alt: 'Ahşap tezgâh üzerinde tül inceliğinde baklava yufkasını zarifçe açan ustanın elleri',
    objectPosition: 'center 35%',
    objectFit: 'cover',
    caption: 'Ustanın Elinde Şekillenen Zanaat',
  },
  storeInterior: {
    webp: '/images/brand/store-interior.webp',
    fallback: '/images/brand/store-interior.jpg',
    alt: 'Koyu ahşap, doğal taş ve sıcak pirinç aydınlatmalarla tasarlanmış Anlaroğlu tatlı salonu',
    objectPosition: 'center 50%',
    objectFit: 'cover',
    caption: 'Anlaroğlu Mağaza Atmosferi',
  },
  logo: {
    webp: '/images/brand/anlaroglu-logo.png',
    fallback: '/images/brand/anlaroglu-logo.png',
    alt: 'Anlaroğlu Baklava Resmi Logosu',
    objectFit: 'contain',
    caption: 'Anlaroğlu Baklava',
  },

  // === MENÜ KATEGORİ GÖRSELLERİ ===
  kunefe: {
    webp: '/images/categories/kunefe.webp',
    fallback: '/images/categories/kunefe.jpg',
    alt: 'Bakır tavada çıtır kızarmış sıcak künefe ve uzayan özel künefe peyniri',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Künefe Çeşitleri',
  },
  katmer: {
    webp: '/images/categories/katmer.webp',
    fallback: '/images/categories/katmer.jpg',
    alt: 'Sahan kaymağı ve bol Antep fıstıklı çıtır Gaziantep katmeri',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Gaziantep Katmeri',
  },
  sutluTatlilar: {
    webp: '/images/categories/sutlu-tatlilar.webp',
    fallback: '/images/categories/sutlu-tatlilar.jpg',
    alt: 'Toprak güveçte fırın sütlaç ve karamelize edilmiş kazandibi',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Geleneksel Sütlü Tatlılar',
  },
  cikolata: {
    webp: '/images/categories/cikolata.webp',
    fallback: '/images/categories/cikolata.jpg',
    alt: 'Taze çilek, muz ve eritilmiş sıcak Belçika çikolatasıyla süslenmiş waffle',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Çikolata & Waffle',
  },
  pastaTatli: {
    webp: '/images/categories/pasta-tatli.webp',
    fallback: '/images/categories/pasta-tatli.jpg',
    alt: 'Koyu zemin üzerinde akışkan çikolata soslu San Sebastian cheesecake',
    objectPosition: 'center 45%',
    objectFit: 'cover',
    caption: 'Butik Pasta & Tatlılar',
  },
  kahvalti: {
    webp: '/images/categories/kahvalti.webp',
    fallback: '/images/categories/kahvalti.jpg',
    alt: 'Zengin serpme Türk kahvaltısı tabağı, sıcak hamur işleri ve taze çay',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Zengin Serpme Kahvaltı',
  },
  icecekler: {
    webp: '/images/categories/icecekler.webp',
    fallback: '/images/categories/icecekler.jpg',
    alt: 'Koyu mermer zemin üzerinde taze çekilmiş kahve çekirdekleri ve ince belli bardakta sıcak içecek sunumu',
    objectPosition: 'center center',
    objectFit: 'cover',
    caption: 'Sıcak & Soğuk İçecekler',
  },
} as const satisfies Record<string, ImageAsset>

export type SiteImageKey = keyof typeof siteImages
