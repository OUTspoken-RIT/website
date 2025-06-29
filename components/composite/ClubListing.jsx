import { Box, IconButton, LinkButton, PrideFlag, Underline } from "../ui";

export function ClubListing({
  clubName,
  shortName,
  underline,
  flags,
  instagram,
  facebook,
  email,
  twitter,
  joinLink,
  logo,
  children,
}) {
  const socials = [
    instagram && {
      url: `https://www.instagram.com/${instagram}`,
      icon: "instagram",
    },
    {
      url: `https://rit.edu/outspoken/discord-${shortName}/`,
      icon: "discord",
    },
    facebook && {
      url: `https://www.facebook.com/${facebook}`,
      icon: "facebook",
    },
    email && {
      url: `mailto:${email}`,
      icon: "email",
    },
    twitter && {
      url: `https://twitter.com/${twitter}`,
      icon: "twitter",
    },
  ].filter(Boolean);

  return (
    <Box className="club-listing" color="white">
      <img className="logo" src={logo} alt={clubName} />
      <h2>
        <Underline shade="light" variant={underline}>
          {clubName}
        </Underline>
        {flags?.split(" ").map((flag) => (
          <PrideFlag className key={flag} variant={flag} />
        ))}
      </h2>
      <div className="content">{children}</div>
      <div className="socials">
        {socials.map(({ url, icon }) => (
          <IconButton key={icon} href={url} icon={icon} />
        ))}
      </div>
      <LinkButton href={`https://rit.edu/outspoken/${shortName}/`} color="primary">
        Join {clubName}
      </LinkButton>
    </Box>
  );
}

export function ClubListingDescription({ children }) {
  return <div>{children}</div>;
}

export function ClubListingMeetingInfo({ children }) {
  return <div className="bold">{children}</div>;
}
