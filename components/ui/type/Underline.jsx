export function Underline({ variant, shade, children }) {
  const validVariants = {
    light: {
      progress: "progress",
      "gilbert-baker": "gilbert",
      gilbert: "gilbert",
      rainbow: "rainbow",
      lgbtq: "rainbow",
      lgbt: "rainbow",
    },
    normal: {
      progress: "progress",
      "gilbert-baker": "gilbert",
      gilbert: "gilbert",
      rainbow: "rainbow",
      lgbtq: "rainbow",
      lgbt: "rainbow",
      aromantic: "aro",
      aro: "aro",
      lesbian: "lesbian",
      transgender: "trans",
      trans: "trans",
      asexual: "ace",
      ace: "ace",
      nonbinary: "nonbinary",
      nb: "nonbinary",
      pansexual: "pansexual",
      pan: "pansexual",
      bisexual: "bisexual",
      bi: "bisexual",
    },
    dark: {
      progress: "progress",
      rainbow: "rainbow",
      lgbtq: "rainbow",
      lgbt: "rainbow",
      aromantic: "aro",
      aro: "aro",
      transgender: "trans",
      trans: "trans",
      asexual: "ace",
      ace: "ace",
      nonbinary: "nonbinary",
      nb: "nonbinary",
      pansexual: "pansexual",
      pan: "pansexual",
    },
  };

  let safeShade;
  let safeVariant;

  const validShadesForVariant = [];
  for (const [shade, variants] of Object.entries(validVariants)) {
    if (variants[variant]) validShadesForVariant.push(shade);
  }

  if (validShadesForVariant.length === 0) {
    safeShade = "light";
    safeVariant = "progress";
  } else {
    safeShade = validShadesForVariant.includes(shade) ? shade : validShadesForVariant[0];
    safeVariant = variant;
  }

  return (
    <span className={`underlined ${safeShade} ${safeVariant}`}>
      {children}
    </span>
  );
}
