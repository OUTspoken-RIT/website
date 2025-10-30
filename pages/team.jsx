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
          image="https://campusgroups.rit.edu/upload/rit/2025/s1_image_5160001_Angelis_f7a4e0b8-a0f2-4395-92ac-7cf6770a6a52_1030165711.jpg"
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
          image="https://campusgroups.rit.edu/upload/rit/2025/s1_image_5160001_Leo_e661cad3-c314-4266-a55e-984b388dda2f_1030165626.jpg"
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
          image="https://campusgroups.rit.edu/upload/rit/2024/flyer_image_2735125_valentine_e60c74cc-6796-477d-97db-b5810ecbcb5d_920135814.jpg"
          name="Valentine Johnson"
          position="Director of Finance"
          pronouns="he/xe/they"
          flags="trans nonbinary bi"
          email="vgj4216@rit.edu"
          officeHours="W: 5-6pm, F: 1-4pm"
        >
          <OfficerMajor>2nd year - Illustration BFA</OfficerMajor>
          <OfficerFunFact>I’ll beat you at any fighting game I’ve never played!</OfficerFunFact>
          <OfficerWorkingOn>I’m excited to get pierced TF 🆙</OfficerWorkingOn>
        </OfficerBio> */}
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s1_image_5160001_Elena_ccf0f838-952f-47bd-8cb2-9884de1aabdf_1030165653.jpg"
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
          image="https://campusgroups.rit.edu/upload/rit/2025/s1_image_5160001_JD_1cb210da-f671-4447-91a7-ea2e28560ce3_1030165553.jpg"
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
          image="https://campusgroups.rit.edu/upload/rit/2025/s1_image_5160001_Tadhg_948470bd-9b2a-4170-9696-eb38ccb068ca_1030165614.jpg"
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
