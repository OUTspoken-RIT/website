import {
  BigBorder,
  ClubsAndEvents,
  CenteredLayout,
  Hero,
  BrasAndBinders,
  YourVoice,
} from "@/components";

export default function Index() {
  return (
    <div>
      <CenteredLayout>
        <Hero />
        <BigBorder color="foam">
          <YourVoice />
        </BigBorder>
        <BigBorder color="foam">
          <ClubsAndEvents />
        </BigBorder>
        <BigBorder color="foam">
          <BrasAndBinders />
        </BigBorder>
      </CenteredLayout>
    </div>
  );
}
