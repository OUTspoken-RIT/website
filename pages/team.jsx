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
          image="../pictures/Lu_Emily_Headshot.jpg"
          name="Emily Lu"
          position="President"
          pronouns="She/Her"
          flags="intersexinclusive"
          email="el2902@rit.edu"
          officeHours="Friday 10am-2pm"
          // officeHoursUrl="https://rit.zoom.us/j/95076270332"
        >
          <OfficerMajor>2nd Year - Graphic Design BFA</OfficerMajor>
          <OfficerFunFact>My favorite movie! The Half of It</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2026/s3_image_5160001_Anand_2425e381-12d7-471c-b88a-e05dcabf0676_3316227.jpg"
          name="Ananda Caloh"
          position="Vice President"
          pronouns="He/They"
          flags="trans nb pan"
          email="ac1822@rit.edu"
          officeHours="Wed: 3-5pm, Thurs: 12-2pm"
        >
          <OfficerMajor>3rd Year - Electrical Engineering BS</OfficerMajor>
          <OfficerFunFact>My current hobby! 
            Crochet and Lobotomy Corporation</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="Nat.jpg"
          name="Natalie Martin"
          position="Director of Finance"
          pronouns="Any/All"
          flags="ace aromantic intersexinclusive"
          email="nem7527@@rit.edu"
          officeHours="Tue: 11-12pm, 5-7PM Thurs: 11-12PM"
        >
          <OfficerMajor>4th Year - Medical Illustration</OfficerMajor>
          <OfficerFunFact>"It I was a dessert I would be an olive oil cake!" </OfficerFunFact>
          {/* <OfficerWorkingOn></OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/get_file?eid=5f0e501c25191f8580e2ccfdd8911634"
          name="Anais Santiago"
          position="Director of Marketing"
          pronouns="She/He/They"
          flags="nb lesbian "
          email="ars8533@rit.edu"
          officeHours="Tues: 2-4PM"
        >
          <OfficerMajor>4th Year - Graphic Design BFA</OfficerMajor>
          <OfficerCoffeeOrder>I loveee a pizookie!</OfficerCoffeeOrder>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
       <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2026/s3_image_5160001_harvest_e286be30-6144-4ec9-8b81-265908fb8787_3316227.jpg"
          name="Harvest Schewe"
          position="Director of Internal Affairs"
          pronouns="They/She"
          flags="bi unlabled flagprogress"
          email="bjh3059@g.rit.edu"
          officeHours="Wed: 5-7pm"
        >
          <OfficerMajor>4th Year - Medical Illustration BFA</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced chai with oat milk</OfficerCoffeeOrder>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
       <OfficerBio
          image="https://campusgroups.rit.edu/get_file?eid=5f0e501c25191f8580e2ccfdd8911634"
          name="Jada Farquharson"
          position="Director of Programming"
          pronouns="She/Her"
          flags="lesbian"
          email="jef5186@rit.edu"
          officeHours="Thurs: 4-6PM"
        >
          <OfficerMajor>4th year - Psychology</OfficerMajor>
          <OfficerFunFact>I love reading, painting, ceramics, and 
            collecting smiskis!</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/get_file?eid=5f0e501c25191f8580e2ccfdd8911634"
          name="Josie Verive-Cain"
          position="Director of Programming"
          pronouns="Any/All"
          flags="intersexinclusive"
          email="jmv2690@rit.edu"
          officeHours="Mon: 1-2PM, Wed: 1-2PM"
        >
          <OfficerMajor>4th year - Psychology</OfficerMajor>
          <OfficerFunFact>I love reading, painting, ceramics, and collecting smiskis!</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
      </CenteredLayout>
    </div>
  );
}
