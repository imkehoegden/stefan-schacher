export default function HeroImage({ src, alt }) {
  return (
    <div className="aspect-16/9 overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
