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
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Angelis_5462edc9-46c5-4ea9-a0a2-05a1244572d2_112204328.jpg"
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
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Leo_66915426-8228-4844-b013-e2e115d68312_112204344.jpg"
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
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
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
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Elena_8f5d65d8-9559-4f1b-b9b8-f874ded7b38f_11220441.jpg"
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
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_JD_27529fc9-9bde-41d1-a0ce-2a1eb02720a6_112204417.jpg"
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
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Tadhg_d983b3db-d424-4734-a36d-5c2fdc2fa072_112204313.jpg"
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
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
      </CenteredLayout>
    </div>
  );
}
