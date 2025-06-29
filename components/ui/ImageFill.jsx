export function ImageFill({ rounded, src, alt }) {
  return (
    <img className={`fill ${rounded ? "rounded" : ""}`} src={src} alt={alt}/>
  );
}