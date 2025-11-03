import { OfficerBio, OfficerCoffeeOrder, OfficerSong } from "@/components/";
import {
  OfficerFunFact,
  OfficerMajor,
  OfficerWorkingOn,
  CenteredLayout,
  IconTitle,
  IconTitleIcon,
  SecondaryLogo,
  PageIntro,
} from "@/components";

export default function Team() {
  return (
    <div>
      <CenteredLayout>
        <IconTitle>
          <IconTitleIcon>
            <SecondaryLogo logo="rainbow-heart" />
          </IconTitleIcon>
          <div>
            <h1>Meet Our Team</h1>
          </div>
        </IconTitle>
        <PageIntro>
          <p>
            Meet the team that runs OUTspoken! Below you'll find our contacts and office hours, as well as some fun facts about who we are!
          </p>
        </PageIntro>
      </CenteredLayout>
      <CenteredLayout color="foam">
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Angelis_aba1627a-7181-4964-982c-e77cb4e549b6_1131638.jpg"
          name="Angelis Cordero"
          position="President"
          pronouns="She/Her"
          flags="lesbian"
          email="ajc4439@g.rit.edu"
          officeHours="M & T 7-9pm"
          officeHoursUrl="https://rit.zoom.us/j/95076270332"
        >
          <OfficerMajor>5th Year - Robotics and Manufacturing Engineering Technology BS</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced coffee from Dunkin with two pumps of butter pecan and 1 caramel pump with coffee oat milk</OfficerCoffeeOrder>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Leo_9f20784e-f674-47fd-a6b2-26ae9445acb5_113144.jpg"
          name="Leonel Garcia"
          position="Vice President"
          pronouns="He/Him"
          flags="lgbt"
          email="lag8761@g.rit.edu"
          officeHours="M: 4-5pm, T 11:15am-12:15pm, & Th: 3-4pm"
        >
          <OfficerMajor>2nd Year - Finance and Accounting BS</OfficerMajor>
          <OfficerSong>My song currently on repeat!
            Please Don''t Call (333) by Khalid</OfficerSong>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        {/* <OfficerBio
          image=""
          name=""
          position="Director of Finance"
          pronouns=""
          flags=""
          email=""
          officeHours=""
        >
          <OfficerMajor></OfficerMajor>
          <OfficerFunFact></OfficerFunFact>
          <OfficerWorkingOn></OfficerWorkingOn>
        </OfficerBio> */}
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Elena_f37a9440-01fa-4abb-84b0-5ea5909da072_113140.jpg"
          name="Elena Georgia Mpadanes"
          position="Director of Programming"
          pronouns="She/Her"
          flags="bi intersexinclusive"
          email="em1792@rit.edu"
          officeHours="T & Th: 12:30-1:30pm"
        >
          <OfficerMajor>2nd Year - Cognitive Science PhD</OfficerMajor>
          <OfficerFunFact>Fun fact about me!
            I competed in the pickle juice drinking contest at Picklesburgh 2025 (didn't win though..) </OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_JD_ebc60ca1-eef6-4a36-92da-dfe0b1a09441_1122040.jpg"
          name="JD Berzolla"
          position="Director of Marketing"
          pronouns="He/They"
          flags="demiboy demiromantic intersexinclusive"
          email="jdb8337@rit.edu"
          officeHours="T: 3-5pm"
        >
          <OfficerMajor>1st Year - B.S. Software Engineering</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced Carmel Macchiato</OfficerCoffeeOrder>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Tadhg_8726f975-0d34-4cba-ae5c-f08a882eb0e2_11220444.jpg"
          name="Tadhg Hicken"
          position="Director of Internal Affairs"
          pronouns="They/He"
          flags="trans nb ace"
          email="blh1342@rit.edu"
          officeHours="T & Th: 2-3pm"
        >
          <OfficerMajor>2nd Year - Cognitive Science PhD</OfficerMajor>
          <OfficerFunFact>Fun fact about me!
            I'm a climber!</OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
      </CenteredLayout>
    </div>
  );
}
