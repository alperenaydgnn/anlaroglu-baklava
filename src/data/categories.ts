export type CategorySlug =
  | 'baklavalar'
  | 'kunefeler'
  | 'katmerler'
  | 'sutlu-tatlilar'
  | 'adet-tatlilar'
  | 'pasta-tatli'
  | 'cikolata-dunyasi'
  | 'dondurmalar'
  | 'kahvalti'
  | 'pogaca-simit'
  | 'ara-sicaklar'
  | 'salata-cesitleri'
  | 'burger-cesitleri'
  | 'wrap-quesadilla'
  | 'pizza-cesitleri'
  | 'makarna-cesitleri'
  | 'ana-yemek'
  | 'sicak-icecekler'
  | 'soguk-icecekler'
  | 'extralar'

export interface CategoryInfo {
  slug: CategorySlug
  name: string
  shortTitle: string
  description: string
  featuredImage?: string
  isPrimaryDessert?: boolean
  badge?: string
}

export const categories: CategoryInfo[] = [
  {
    slug: 'baklavalar',
    name: 'Baklavalar',
    shortTitle: 'Geleneksel Baklavalar',
    description: 'İncecik açılan yufka katmanları, taze fıstık ve altın sarısı kıvamında şerbet.',
    featuredImage: '/images/products/ozel-baklava.webp',
    isPrimaryDessert: true,
    badge: 'İmza Koleksiyon',
  },
  {
    slug: 'kunefeler',
    name: 'Künefeler',
    shortTitle: 'Sıcak Künefeler',
    description: 'Bakır tepside nar gibi kızaran tel kadayıf, sünme kıvamında Hatay peyniri ve bol fıstık.',
    featuredImage: '/images/categories/kunefe.webp',
    isPrimaryDessert: true,
    badge: 'Tepside Sıcak',
  },
  {
    slug: 'katmerler',
    name: 'Katmerler',
    shortTitle: 'Taş Fırın Katmeri',
    description: 'Zarf gibi katlanan çıtır yufka, sahan kaymağı ve yoğun fıstık dolgusuyla sıcacık sunum.',
    featuredImage: '/images/categories/katmer.webp',
    isPrimaryDessert: true,
    badge: 'Sahan Kaymaklı',
  },
  {
    slug: 'sutlu-tatlilar',
    name: 'Sütlü Tatlılar',
    shortTitle: 'Hafif Sütlü Lezzetler',
    description: 'Fırın sütlaç, kazandibi, güllaç ve geleneksel sütlü tariflerin hafif yorumu.',
    featuredImage: '/images/categories/sutlu-tatlilar.webp',
    isPrimaryDessert: true,
  },
  {
    slug: 'pasta-tatli',
    name: 'Pasta & Özel Tatlılar',
    shortTitle: 'Pastane & Butik Tatlılar',
    description: 'San Sebastian cheesecake, Belçika çikolatalı porsiyon tatlılar ve butik pastalar.',
    featuredImage: '/images/categories/pasta-tatli.webp',
    isPrimaryDessert: true,
  },
  {
    slug: 'cikolata-dunyasi',
    name: 'Çikolata Dünyası',
    shortTitle: 'Waffle & Sweet Box',
    description: 'Taze meyveler, çıtır hamur ve akışkan Belçika çikolatasıyla hazırlanan tatlı ziyafetleri.',
    featuredImage: '/images/categories/cikolata.webp',
    isPrimaryDessert: true,
  },
  {
    slug: 'adet-tatlilar',
    name: 'Adet Tatlılar',
    shortTitle: 'Küp & Bohça Tatlılar',
    description: 'Fıstıklı, kaymaklı ve meyveli porsiyonluk özel kup tatlıları.',
    isPrimaryDessert: true,
  },
  {
    slug: 'dondurmalar',
    name: 'Dondurmalar',
    shortTitle: 'Maraş & Fıstıklı Dondurma',
    description: 'Hakiki yeşil fıstık ezmeli, yoğun kıvamlı kesme dondurma çeşitleri.',
    isPrimaryDessert: true,
  },
  {
    slug: 'kahvalti',
    name: 'Kahvaltı',
    shortTitle: 'Serpme & Sıcak Kahvaltı',
    description: 'Yöresel peynirler, sahanda lezzetler, sıcak pideler ve demli çay eşliğinde sabah keyfi.',
    featuredImage: '/images/categories/kahvalti.webp',
  },
  {
    slug: 'sicak-icecekler',
    name: 'Sıcak İçecekler',
    shortTitle: 'Kahve & Çay Çeşitleri',
    description: 'Közde Türk kahvesi, harman espresso içecekleri ve taze demlenmiş Rize çayı.',
    featuredImage: '/images/categories/icecekler.webp',
  },
  {
    slug: 'soguk-icecekler',
    name: 'Soğuk İçecekler',
    shortTitle: 'Limonata & Bubble Tea',
    description: 'Ev yapımı naneli limonatalar, taze sıkılmış meyve suları ve buzlu kahveler.',
  },
  {
    slug: 'pogaca-simit',
    name: 'Poğaça & Simit',
    shortTitle: 'Fırından Taze',
    description: 'Fırından yeni çıkmış sıcak çıtır simit, su böreği ve tereyağlı açmalar.',
  },
  {
    slug: 'ana-yemek',
    name: 'Ana Yemekler',
    shortTitle: 'Izgara & Güveç',
    description: 'Özel marine edilmiş bonfileler, ızgara köfteler ve fırın lezzetleri.',
  },
  {
    slug: 'burger-cesitleri',
    name: 'Burger Çeşitleri',
    shortTitle: 'Gurme Burgerler',
    description: 'Kendi fırınımızdan burger ekmeği, dana burger köftesi ve çıtır patates.',
  },
  {
    slug: 'pizza-cesitleri',
    name: 'Pizzalar',
    shortTitle: 'Taş Fırın Pizza',
    description: 'İnce hamurlu, mozarella ve taze malzemelerle hazırlanan fırın pizzalar.',
  },
  {
    slug: 'makarna-cesitleri',
    name: 'Makarnalar',
    shortTitle: 'Özel Soslu Makarnalar',
    description: 'Ev yapımı mantı, fettuccine alfredo ve taze fesleğenli soslar.',
  },
  {
    slug: 'wrap-quesadilla',
    name: 'Wrap & Quesadilla',
    shortTitle: 'Dürüm Lezzetleri',
    description: 'Tortilla ekmeğinde tavuklu ve biftekli sıcak sunumlar.',
  },
  {
    slug: 'salata-cesitleri',
    name: 'Salatalar',
    shortTitle: 'Taze Salata & Bowl',
    description: 'Akdeniz yeşillikleri, avokado ve ızgara lezzetleriyle zengin tabaklar.',
  },
  {
    slug: 'ara-sicaklar',
    name: 'Ara Sıcaklar',
    shortTitle: 'Atıştırmalıklar',
    description: 'Paçanga böreği, elma dilim patates ve çıtır atıştırmalık sepetleri.',
  },
  {
    slug: 'extralar',
    name: 'Ekstralar',
    shortTitle: 'Kaymak & Fıstık İlavesi',
    description: 'Sahan kaymağı, dövme taze fıstık tozu ve özel dondurma topları.',
  },
]
