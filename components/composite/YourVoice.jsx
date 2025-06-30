import { FancyBox, FancyBoxContent, FancyBoxHeader, SpeechBubble } from "../ui";

export function YourVoice() {
  return (
    <FancyBox className="your-voice" color="periwinkle">
      <FancyBoxHeader>
        <h2>Your voice deserves to be heard.</h2>
        <SpeechBubble tail="down right">we’ll amplify it!</SpeechBubble>
      </FancyBoxHeader>
      <FancyBoxContent>
        <p>
          OUTspoken is committed to amplifying queer voices. We have a voting
          seat in Student Government and we work directly with RIT to ensure
          that policies are fair and just for all students.
        </p>
      </FancyBoxContent>
    </FancyBox>
  );
}
