import {
  BigBorder,
  ClubsAndEvents,
  CenteredLayout,
  Hero,
  BrasAndBinders,
  YourVoice,
  ActionCard,
  LinkButton,
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
        <ActionCard className="join-button dashed-box">
          <h2>Ready to join?</h2>
          <p>
            When you subscribe to our newsletter, you’ll be the first to know
            about new events and queer updates on campus!
          </p>
          <LinkButton color="primary-dark" href="https://campusgroups.rit.edu/out/club_signup">
            <svg
              className="sparkles"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path
                d="M10.6371 4.12834C10.8793 3.10097 12.3415 3.10097 12.5837 4.12834L13.3425 7.34678C13.424 7.69234 13.6826 7.9688 14.0219 8.07314L17.2872 9.07717C18.2287 9.36665 18.2287 10.6993 17.2872 10.9888L14.0219 11.9929C13.6826 12.0972 13.424 12.3737 13.3425 12.7192L12.5837 15.9377C12.3415 16.965 10.8793 16.965 10.6371 15.9377L9.87832 12.7192C9.79685 12.3737 9.53826 12.0972 9.19891 11.9929L5.93366 10.9888C4.9922 10.6993 4.99221 9.36665 5.93367 9.07716L9.19891 8.07314C9.53826 7.9688 9.79685 7.69234 9.87832 7.34678L10.6371 4.12834Z"
                fill="white"
              />
              <path
                d="M17.3187 18.4262C17.537 17.5006 18.8544 17.5006 19.0727 18.4262C19.1461 18.7376 19.3791 18.9867 19.6848 19.0807L19.7799 19.1099C20.7214 19.3994 20.7214 20.7321 19.7799 21.0216L19.6848 21.0508C19.3791 21.1449 19.1461 21.3939 19.0727 21.7053C18.8544 22.631 17.537 22.631 17.3187 21.7053C17.2453 21.3939 17.0123 21.1449 16.7066 21.0508L16.6115 21.0216C15.67 20.7321 15.67 19.3994 16.6115 19.1099L16.7066 19.0807C17.0123 18.9867 17.2453 18.7376 17.3187 18.4262Z"
                fill="white"
              />
              <path
                d="M5.83394 18.8349C6.07615 17.8075 7.53835 17.8075 7.78057 18.8349L8.09609 20.1732C8.17756 20.5187 8.43614 20.7952 8.7755 20.8995L10.3944 21.3973C11.3359 21.6868 11.3359 23.0195 10.3944 23.309L8.7755 23.8068C8.43614 23.9111 8.17756 24.1876 8.09609 24.5331L7.78057 25.8714C7.53835 26.8988 6.07615 26.8988 5.83394 25.8714L5.51842 24.5331C5.43694 24.1876 5.17836 23.9111 4.83901 23.8068L3.2201 23.309C2.27864 23.0195 2.27865 21.6868 3.2201 21.3973L4.83901 20.8995C5.17836 20.7952 5.43694 20.5187 5.51842 20.1732L5.83394 18.8349Z"
                fill="white"
              />
            </svg>
            Join OUTspoken
          </LinkButton>
        </ActionCard>
      </CenteredLayout>
    </div>
  );
}
