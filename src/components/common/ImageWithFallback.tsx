import type { ImageAsset } from '../../data/site-images'

interface ImageWithFallbackProps {
  image: ImageAsset | { webp: string; fallback: string; alt: string; objectPosition?: string }
  className?: string
  priority?: boolean
  sizes?: string
  width?: number
  height?: number
  onClick?: () => void
}

export function ImageWithFallback({
  image,
  className = '',
  priority = false,
  sizes = '100vw',
  width,
  height,
  onClick,
}: ImageWithFallbackProps) {
  return (
    <picture className={`block relative overflow-hidden bg-[#244B35]/10 ${className}`} onClick={onClick}>
      <source srcSet={image.webp} type="image/webp" sizes={sizes} />
      <source srcSet={image.fallback} type="image/jpeg" sizes={sizes} />
      <img
        src={image.fallback}
        alt={image.alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'eager'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        style={{
          objectPosition: image.objectPosition ?? 'center center',
        }}
        className="w-full h-full object-cover transition-transform duration-500 will-change-transform"
      />
    </picture>
  )
}
