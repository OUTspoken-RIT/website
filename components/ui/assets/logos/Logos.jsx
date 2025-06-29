import IconCircleRainbow from "./icon-circle-rainbow.svg";
import IconCircleWhite from "./icon-circle-white.svg";
import IconSquareRainbow from "./icon-square-rainbow.svg";
import IconSquareWhite from "./icon-square-white.svg";

import LogoLightMono from "./logo-light-mono.svg";
import LogoLightRainbow from "./logo-light-rainbow.svg";
import LogoSolidMono from "./logo-solid-mono.svg";
import LogoSolidRainbow from "./logo-solid-rainbow.svg";

import Closet from "./closet.svg";
import RainbowHeart from "./rainbow-heart.svg";

export function Logo({ weight, color }) {
  const validWeights = ["solid", "light"];
  const validColors = ["rainbow", "mono"];

  const safeWeight = validWeights.includes(weight) ? weight : "solid";
  const safeColor = validColors.includes(color) ? color : "rainbow";

  let safeLogo;
  if (safeWeight === "solid" && safeColor === "rainbow") {
    safeLogo = LogoSolidRainbow;
  } else if (safeWeight === "solid" && safeColor === "mono") {
    safeLogo = LogoSolidMono;
  } else if (safeWeight === "light" && safeColor === "rainbow") {
    safeLogo = LogoLightRainbow;
  } else if (safeWeight === "light" && safeColor === "mono") {
    safeLogo = LogoLightMono;
  }

  return (
    <img className="logo" src={safeLogo.src} alt="outspoken logo" />
  );
}

export function SecondaryLogo({ logo }) {
  const validLogos = {
    closet: {
      image: Closet,
      alt: "logo for the closet"
    },
    "rainbow-heart": {
      image: RainbowHeart,
      alt: "rainbow-colored heart"
    }
  };

  const {image, alt} = validLogos[logo] ?? validLogos.closet;

  return (
    <img className="logo" src={image.src} alt={alt} />
  )
}

export function BrandIcon({ shape, color }) {
  const validWeights = ["square", "circle"];
  const validColors = ["rainbow", "white"];

  const safeShape = validWeights.includes(shape) ? shape : "square";
  const safeColor = validColors.includes(color) ? color : "rainbow";

  let safeLogo;
  if (safeShape === "square" && safeColor === "rainbow") {
    safeLogo = IconSquareRainbow;
  } else if (safeShape === "square" && safeColor === "white") {
    safeLogo = IconSquareWhite;
  } else if (safeShape === "circle" && safeColor === "rainbow") {
    safeLogo = IconCircleRainbow;
  } else if (safeShape === "circle" && safeColor === "white") {
    safeLogo = IconCircleWhite;
  }

  return (
    <img className="logo" src={safeLogo.src} alt="outspoken icon" />
  );
}
