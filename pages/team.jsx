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
          officeHours="M: 12-1pm, T: 1-2pm, & W: 4:30-6:30pm"
          // officeHoursUrl="https://rit.zoom.us/j/95076270332"
        >
          <OfficerMajor>5th Year - Robotics and Manufacturing Engineering Technology BS</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced coffee from Dunkin with two pumps of butter pecan and 1 caramel pump with coffee oat milk</OfficerCoffeeOrder>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2026/s3_image_5160001_Anand_2425e381-12d7-471c-b88a-e05dcabf0676_3316227.jpg"
          name="Anand Caloh"
          position="Vice President"
          pronouns="He/They"
          flags="trans nb pan"
          email="ac1822@g.rit.edu"
          officeHours="T & Th: 12:30-1:30pm, W: 4:30-6:30pm"
        >
          <OfficerMajor>2nd Year - Electrical Engineering BS</OfficerMajor>
          <OfficerFunFact>My current hobby! 
            Crochet and Lobotomy Corporation</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2026/s3_image_5160001_lu_57cecbd6-fc8c-4bf4-9753-7c25c4f832e7_3316227.jpg"
          name="Emily Lu"
          position="Director of Finance"
          pronouns="She/They"
          flags="intersexinclusive"
          email="el2902@rit.edu"
          officeHours="F: 10-11am, 12-2pm, & 3-4pm"
        >
          <OfficerMajor>2nd Year - Graphic Design BA</OfficerMajor>
          <OfficerFunFact>My favorite movie! The Half of It</OfficerFunFact>
          {/* <OfficerWorkingOn></OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2025/s3_image_5160001_Elena_8f5d65d8-9559-4f1b-b9b8-f874ded7b38f_11220441.jpg"
          name="Elena Georgia Mpadanes"
          position="Director of Programming"
          pronouns="She/Her"
          flags="bi intersexinclusive"
          email="em1792@rit.edu"
          officeHours="T & Th: 11:15am-12:15pm"
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
          officeHours="T: 3:30-5:30pm"
        >
          <OfficerMajor>1st Year - B.S. Software Engineering</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced Carmel Macchiato</OfficerCoffeeOrder>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2026/s3_image_5160001_harvest_e286be30-6144-4ec9-8b81-265908fb8787_3316227.jpg"
          name="Harvest Schewe"
          position="Director of Internal Affairs"
          pronouns="They/Them"
          flags="bi unlabled poly"
          email="bjh3059@g.rit.edu"
          officeHours="F: 2-4pm"
        >
          <OfficerMajor>3rd Year - Medical Illustration BFA</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced chai with oat milk</OfficerCoffeeOrder>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
      </CenteredLayout>
    </div>
  );
}
