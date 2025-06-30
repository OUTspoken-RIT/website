import {
  IconTitle,
  IconTitleIcon,
  PageIntro,
  SecondaryLogo,
  Subheading,
  ClubListing,
  ClubListingDescription,
  ClubListingMeetingInfo,
  CenteredLayout,
} from "@/components";

export default function Clubs() {
  return (
    <div>
      <CenteredLayout>
        <IconTitle>
          <IconTitleIcon>
            <SecondaryLogo logo="rainbow-heart" />
          </IconTitleIcon>
          <div>
            <h1>LGBTQ+ Clubs</h1>
            <Subheading>@ outspoken</Subheading>
          </div>
        </IconTitle>
        <PageIntro>
          <p>
            Our mission is to bring people together. We partner with clubs for
            every identity on the LGBTQ+ spectrum so you can find a community
            that understands you. Continue on to find meeting information and
            social links for all our queer clubs on campus!
          </p>
        </PageIntro>
      </CenteredLayout>
      <CenteredLayout color="foam">
        {/* ASPACE */}
        <ClubListing
          clubName="A-Space"
          shortName="aspace"
          logo="https://campusgroups.rit.edu/upload/rit/2017/s3_image_upload_548117_A_SPACE01_1112111_crop.jpeg"
          underline="ace"
          instagram="aspacerit"
          email="aspace@rit.edu"
          flags="aro ace"
        >
          <ClubListingDescription>
            <p>
              A-Space is a group dedicated to establishing a safe space for
              those on the asexual and aromantic spectrum or questioning to meet
              and talk and learn and share ideas.
            </p>
            <p>
              Anyone on either spectrum, or anyone questioning whether they may
              be on either spectrum, is welcome to attend meetings.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>A-Space's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* COSLISC */}
        <ClubListing
          clubName="COSLISC"
          shortName="coslisc"
          logo="https://ugc.production.linktr.ee/7xEXGDRkZsPLODFBguM8_5TcFD1nuWUha80nn?io=true&size=avatar-v3_0"
          underline="rainbow"
          instagram="coslisc"
          email="coslisc.rit@gmail.com"
          flags="lgbt"
        >
          <ClubListingDescription>
            <p>
              We are the College of Science LGBTQ+ Inclusivity in Science Club
              (COSLISC) at Rochester Institute of Technology.
            </p>
            <p>
              Our purpose is to work diligently to promote inclusivity efforts
              within the College of Science in order to create a more
              comfortable and productive environment for LGBTQ+ students.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>COSLISC's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* DQA */}
        <ClubListing
          clubName="Deaf Queer Alliance"
          shortName="dqa"
          logo="https://campusgroups.rit.edu/upload/rit/2022/s3_image_upload_553852_DQA_flag_logo_42618440.png"
          underline="rainbow"
          facebook="RITDQA"
          twitter="UpDqa"
          instagram="ritdqa"
          email="ritdqa@gmail.com"
          flags="lgbt"
        >
          <ClubListingDescription>
            <p>
              Deaf Queer Alliance is the LGBTQQIAA (Lesbian, Gay, Bisexual,
              Transgender, Queer, Questioning, Intersex, Asexual and Allies)
              student group at RIT/NTID.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>Deaf Queer Alliance's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* DRAG CLUB */}
        <ClubListing
          clubName="Drag Club"
          shortName="dragclub"
          logo="https://campusgroups.rit.edu/upload/rit/2020/s3_image_upload_885302_logojpg_10612358.jpeg"
          underline="rainbow"
          instagram="ritdrag_club"
          email="ritdragclub@rit.edu"
          flags="lgbt"
        >
          <ClubListingDescription>
            <p>
              Drag Club expresses an important queer art form through gender
              expression, all are welcome!
            </p>
            <p>
              We have a weekly meeting on Tuesdays from 8–10 p.m., where we run
              workshops, educate members on the art of drag, and practice for
              upcoming shows. We host multiple drag shows per semester.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>Drag Club's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* LABRYS */}
        <ClubListing
          clubName="Labrys Alliance"
          shortName="labrys"
          logo="https://campusgroups.rit.edu/upload/rit/2017/s3_image_upload_556186_labry_o_1016152346_crop.jpg"
          underline="lesbian"
          email="Labrys@rit.edu"
          flags="lesbian bi trans"
        >
          <ClubListingDescription>
            <p>
              Labrys is a space for Lesbian, Bisexual, Trans, Queer, and
              questioning women and nonbinary students.
            </p>
            <p>
              We have a meeting once a week generally. Sometimes our activities
              are just chill hangout sessions, but we do educational
              presentations about queer topics and trivia every now and then.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>Labrys's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* QNC */}
        <ClubListing
          clubName="Queer N Color"
          shortName="qnc"
          logo="https://campusgroups.rit.edu/upload/rit/2022/s3_image_upload_1570675_campusgroup_9812642.png"
          underline="rainbow"
          instagram="queerncolor_rit"
          email="qnc@rit.edu"
          flags="lgbt"
        >
          <ClubListingDescription>
            <p>
              Queer n’ Color is a community organization for those who are
              within the LGBTQ+ and ALANA (African, Latin, Asian, Native
              American) communities.
            </p>
            <p>
              We strive to foster an environment of fellowship, support, and
              acceptance through fun and discussion-based meetings and events.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>Queer N Color's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* QSTEM */}
        <ClubListing
          clubName="Queer in STEM"
          shortName="qstem"
          logo="https://cglink.me/2d1/d4395d6f5e7ce2ef5ac53b03d2abae8ed4b585efdd44ce16e923f8bba27eeeb96"
          underline="rainbow"
          instagram="qstemrit"
          email="qstem@rit.edu"
          flags="lgbt"
        >
          <ClubListingDescription>
            <p>
              We are Queer in STEM! We are a club aiming to create a fun,
              inclusive community for queer students in STEM and perform
              outreach to other STEM groups and allies. Our club is open to all.
            </p>
            <p>
              We host small, informal meetings. We typically have a cool
              activity planned for each meeting.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>Queer in STEM's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* SAGA */}
        <ClubListing
          clubName="SAGA"
          shortName="ritga"
          logo="https://campusgroups.rit.edu/upload/rit/2017/flyer_image_upload_548562_ritgalogooriginal_101910646_crop.jpg"
          underline="rainbow"
          email="ritga@rit.edu"
          flags="lgbt trans"
        >
          <ClubListingDescription>
            <p>
              SAGA is RIT’s group for gay, lesbian, bisexual, transgender,
              and/or any queer identifying persons and allies.
            </p>
            <p>
              The goal of SAGA is to provide a space for people in the
              community to come together and feel safe in their identities
              through general meetings and club events.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>SAGA's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>

        {/* TANGENT */}
        <ClubListing
          clubName="Tangent"
          shortName="tangent"
          logo="https://campusgroups.rit.edu/upload/rit/2020/s3_image_upload_642141_logo_81911310.png"
          underline="trans"
          email="tangent@rit.edu"
          flags="trans nb"
        >
          <ClubListingDescription>
            <p>
              Tangent is a club welcoming transgender, nonbinary, and
              questioning students.
            </p>
            <p>
              We host meetings where trans and nonbinary people can hang out and
              have a reprieve from the chaotic and often hurtful outside world,
              to build connections and community.
            </p>
          </ClubListingDescription>
          <ClubListingMeetingInfo>
            <p>Tangent's meeting times are TBD.</p>
          </ClubListingMeetingInfo>
        </ClubListing>
      </CenteredLayout>
    </div>
  );
}
