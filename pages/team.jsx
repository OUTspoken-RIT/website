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
          image="https://cglink.me/2d1/d1c83cce72b7e7ce4245e77ec3a6d9e7315d097fe547dca5897307ca373517f6e"
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
          image="https://cglink.me/2d1/d722cda2a1d7f8f364d2a9260172a860bcda9cb6c98c98a58ebbab0c4d7b3733b"
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
          image="https://cglink.me/2d1/da3ce913d6384ac9f6e8746e722882b9791ce7ec90d0c77c2cc274baf4c96b4c3"
          name="Natalie Martin"
          position="Director of Finance"
          pronouns="Any/All"
          flags="ace aromantic intersexinclusive"
          email="nem7527@@rit.edu"
          officeHours="Tue: 11-12pm, 5-7PM Thurs: 11-12PM"
        >
          <OfficerMajor>4th Year - Medical Illustration</OfficerMajor>
          <OfficerFunFact>"If I was a dessert I would be an olive oil cake!" </OfficerFunFact>
          {/* <OfficerWorkingOn></OfficerWorkingOn> */}
        </OfficerBio>
        <OfficerBio
          image="https://cglink.me/2d1/d1ff9cb18533f8be4792a9c487edde3d6cdb9f7cc6878bbfac9ff79cc457c5021"
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
          image="https://cglink.me/2d1/d451dc2501d2f2f7452b33eef3e68f5e42802b524dafae3b1d79ea19dfd4dfa"
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
          image="https://cglink.me/2d1/d43286c576d24908416bbd9f484599c3c4cd384c287e47422cd2a4f5132d685b6"
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
          image="https://cglink.me/2d1/df9efc067738096dbb93229c04d2bc6928fc7a2b79069ab8f7e865a539ba36533"
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
