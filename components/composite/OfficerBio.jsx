import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGraduationCap,
  faStar,
  faGears,
  faMusic,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import { PrideFlag, Subheading } from "../ui";
import { Container } from "../ui/containers/Container";

export function OfficerBio({
  image,
  name,
  position,
  pronouns,
  flags,
  email,
  children,
  officeHours,
  officeHoursUrl,
}) {

  let remoteOrNothing = "";
  if (officeHoursUrl !== undefined) {
    remoteOrNothing = <a href={officeHoursUrl} target="_blank" title="Office Hours">(remote)</a>;
  }

  return (
    <Container color="white" className="officer-bio">
      <img src={image} alt={`portrait of ${name}`} />
      <header>
        <h2>{name}</h2>
        <Subheading>({pronouns})</Subheading>
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> {position}
        </h3>
      </header>
      <div className="content">{children}</div>
      <div className="details">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {email}
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} /> in office {officeHours} {remoteOrNothing}
        </p>
      </div>
      <div className="flags h2">
        {flags?.split(" ").map((flag) => (
          <PrideFlag className key={flag} variant={flag} />
        ))}
      </div>
    </Container>
  );
}

function OfficerFact({ children }) {
  return <p className="officer-fact">{children}</p>;
}

export function OfficerMajor({ children }) {
  return (
    <OfficerFact>
      <FontAwesomeIcon icon={faGraduationCap} /> {children}
    </OfficerFact>
  );
}

export function OfficerFunFact({ children }) {
  return (
    <OfficerFact>
      <FontAwesomeIcon icon={faStar} /> {children}
    </OfficerFact>
  );
}

export function OfficerSong({ children }) {
  return (
    <OfficerFact>
      <FontAwesomeIcon icon={faMusic} /> {children}
    </OfficerFact>
  );
}

export function OfficerCoffeeOrder({ children }) {
  return (
    <OfficerFact>
      <FontAwesomeIcon icon={faMugHot} /> {children}
    </OfficerFact>
  );
}

export function OfficerWorkingOn({ children }) {
  return (
    <OfficerFact>
      <FontAwesomeIcon icon={faGears} /> {children}
    </OfficerFact>
  );
}
