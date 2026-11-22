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
          image git agg src="/Users/anaissantiago/Documents/GitHub/website/pictures/Lu_Emily_Headshot.jpg" width={500} height={500} 
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
          image="https://outspoken-rit.github.io/website/cglink.me/2d1/d5c45fab9a16c3c9289fc147e80c9edc76813cceac5415ec9ffb2b98a6cfda51c"
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
          image="https://cglink.me/2d1/d52b237a4e5420f5aaca190af5c2d274787bdab51bb022468a497b1a625be8b2"
          name="Natalie Martin"
          position="Director of Finance"
          pronouns="Any/All"
          flags="ace aromantic intersexinclusive"
          email="nem7527@rit.edu"
          officeHours="Tue: 11-12pm, 5-7PM Thurs: 11-12PM"
        >
          <OfficerMajor>4th Year - Medical Illustration</OfficerMajor>
          <OfficerFunFact>"If I was a dessert I would be an olive oil cake!" </OfficerFunFact>
          {/* <OfficerWorkingOn></OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://cglink.me/2d1/da57d051328d4b3fcef7cd33f6155a861837427b30bc4d63e75e40a32070ade3f"
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
          image="https://cglink.me/2d1/de4782cc175b5f0fef55ae8ba40af3f61754b673dea477c2f72d399a17fcbab68"
          name="Harvest Schewe"
          position="Director of Internal Affairs"
          pronouns="They/She"
          flags="bi unlabled intersexinclusive"
          email="bjh3059@rit.edu"
          officeHours="Wed: 5-7pm"
        >
          <OfficerMajor>4th Year - Medical Illustration BFA</OfficerMajor>
          <OfficerCoffeeOrder>My go-to coffee order!
            Iced chai with oat milk</OfficerCoffeeOrder>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
       <OfficerBio
          image="https://cglink.me/2d1/d43286c576d24908416bbd9f484599c3c4cd384c287e47422cd2a4f5132d685b6"
          name="Jada Farquharson"
          position="Director of Programming"
          pronouns="She/Her"
          flags="lesbian intersexinclusive"
          email="jef5186@rit.edu"
          officeHours="Thurs: 4-6PM"
        >
          <OfficerMajor>4th year - Psychology</OfficerMajor>
          <OfficerFunFact>I love reading, painting, ceramics, and 
            collecting smiskis!</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://cglink.me/2d1/d5bab5d44f7ed8c1ac7ecfbf5c610d21545d7ac7880c01f123d6db7229bd458d"
          name="Josie Verive-Cain"
          position="Director of Programming"
          pronouns="Any/All"
          flags="intersexinclusive"
          email="jmv2690@rit.edu"
          officeHours="Mon: 1-2PM, Wed: 1-2PM"
        >
          <OfficerMajor>3rd year - Game Design & Development</OfficerMajor>
          <OfficerFunFact>My fav color is pastel pink!</OfficerFunFact>
          {/* <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn> */}
        </OfficerBio>
      </CenteredLayout>
    </div>
  );
}
