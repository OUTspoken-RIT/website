import { OfficerBio } from "@/components/";
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
          image="https://campusgroups.rit.edu/images/ico/male_user_large.png"
          name="Angelis Cordero"
          position="President"
          pronouns="She/her"
          flags="lesbian"
          email="ajc4439@g.rit.edu"
          officeHours="M-Th 3-4pm"
        >
          <OfficerMajor>5th Year - Robotics and Manufacturing Engineering Technology BS</OfficerMajor>
          <OfficerFunFact>Fun fact about me!</OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/images/ico/male_user_large.png"
          name="Leonel Garcia"
          position="Vice President"
          pronouns="he/him"
          flags="lgbt"
          email="lag8761@g.rit.edu"
          officeHours="M: 4-6pm, T&Th: 11am-12pm"
        >
          <OfficerMajor>2nd Year - Finance and Accounting BS</OfficerMajor>
          <OfficerFunFact>Fun fact about me!</OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
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
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/images/ico/male_user_large.png"
          name="Emily Lu"
          position="Director of Marketing"
          pronouns="she/her"
          flags="lgbt"
          email="el2902@rit.edu"
          officeHours="M: 1-3pm"
        >
          <OfficerMajor>2nd Year - Graphic Design BFA</OfficerMajor>
          <OfficerFunFact>I can make 11 different types of buttercream!</OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2024/s3_image_upload_5150490_farbe_583212.jpeg"
          name="Elena Georgia Mpadanes"
          position="Director of Programming"
          pronouns="she/her"
          flags="lgbt"
          email="em1792@rit.edu"
          officeHours="T&Th: 12:30-1:30pm"
        >
          <OfficerMajor>2nd Year - Cognitive Science PhD</OfficerMajor>
          <OfficerFunFact>Fun fact about me!</OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
        <OfficerBio
          image="https://campusgroups.rit.edu/upload/rit/2021/s3_image_885649_upload_828132210_828132210.jpg"
          name="Tadhg Hicken"
          position="Director of Internal Relations"
          pronouns="they/he"
          flags="trans nb ace"
          email="blh1342@rit.edu"
          officeHours="T&Th: 2-3pm"
        >
          <OfficerMajor>2nd Year - Cognitive Science PhD</OfficerMajor>
          <OfficerFunFact>Fun fact about me!</OfficerFunFact>
          <OfficerWorkingOn>I'm excited to work on ...</OfficerWorkingOn>
        </OfficerBio>
      </CenteredLayout>
    </div>
  );
}
