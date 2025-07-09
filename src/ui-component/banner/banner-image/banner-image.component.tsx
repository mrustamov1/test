export function BannerImage({
  src,
  alt,
  className,
}: {
  src?: string
  alt: string
  className?: string
}) {
  if (!src) return null
  return <img className={className} src={src} alt={alt} />
}
