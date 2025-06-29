import { getColorFromClassName } from "@/utils/colorable";
import { ColorSwatch, RainbowSwatch, SizeSwatch } from "../ui";

export function ClothesListing({
  children,
  image,
  imageAlt,
  imageSide,
  itemName,
  itemColors,
  itemSizes,
  sizingLink,
}) {
  const swatches =
    itemColors?.split(" ").map((color) => {
      if (color === "rainbow") return <RainbowSwatch key={color} />;
      return <ColorSwatch key={color} color={color} />;
    }) ?? "";

  const sizes =
    itemSizes?.split(" ").map((size) => <SizeSwatch>{size}</SizeSwatch>) ?? "";

  return (
    <article className="clothes-listing">
      <h2>{itemName}</h2>
      <div className={`description ${imageSide ?? "left"}`}>
        <img src={image} alt={imageAlt} />
        {children}
      </div>
      <h3>Available In:</h3>
      <div className="colors">{swatches}</div>
      <div className="sizes">{sizes}</div>
      <h4>
        Product and sizing info <a href={sizingLink}>here</a>
      </h4>
    </article>
  );
}
