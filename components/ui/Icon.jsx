import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faNotdef } from "@fortawesome/free-solid-svg-icons";

export function Icon({ icon }) {
  const validIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
    discord: faDiscord,
    email: faEnvelope,
  };

  const safeIcon = validIcons[icon] ?? faNotdef;

  return <FontAwesomeIcon icon={safeIcon} />;
}
