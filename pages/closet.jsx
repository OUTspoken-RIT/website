import {
  CenteredLayout,
  IconTitle,
  IconTitleIcon,
  SecondaryLogo,
  Subheading,
  PageIntro,
  ImageFill,
} from "@/components";
import { ClothesListing } from "@/components/composite";
import { LeftColumn, RightColumn, TwoColumnLayout } from "@/components/layouts";

export default function Closet() {
  return (
    <div>
      <CenteredLayout>
        <IconTitle>
          <IconTitleIcon>
            <SecondaryLogo logo="closet" />
          </IconTitleIcon>
          <div>
            <h1>The Closet</h1>
            <Subheading>@ outspoken</Subheading>
          </div>
        </IconTitle>
        <PageIntro>
          <p>
            We partner with the Women, Gender, and Sexuality Resouce Center to
            stock all the resources you'll need to thrive. Continue on to see
            what we provide to students at no cost!
          </p>
        </PageIntro>
      </CenteredLayout>
      <CenteredLayout>
        <ClothesListing
          image="https://campusgroups.rit.edu/upload/rit/2024/flyer_image_upload_2735125_binderperson_1021222113.png"
          imageAlt="model wearing a spectrum binder"
          imageSide="left"
          itemName="Binders"
          itemColors="#DEC6A8 #9B6049"
          itemSizes="XS SM MD LG XL 2X 3X 4X 5X"
          sizingLink="https://www.spectrumoutfitters.us/products/deep-short-chest-binder"
        >
          We carry Spectrum binders in our office. If you need a size we don't
          have, we’ll let you know when we restock! Come to our office to pick
          one up for free!
        </ClothesListing>
        <ClothesListing
          image="https://campusgroups.rit.edu/upload/rit/2024/flyer_image_upload_2735125_braperson_1021222422.png"
          imageAlt="model wearing a tomboy X bra"
          imageSide="right"
          itemName="Bras"
          itemColors="rainbow"
          itemSizes="XS SM MD LG XL 2X 3X 4X"
          sizingLink="https://tomboyx.com/products/loungebra-blackrb"
        >
          We also carry TomboyX bras. If you need a size we don't have, we’ll
          let you know when we restock! Come to our office to pick one up for
          free!
        </ClothesListing>
        <TwoColumnLayout stack="right-over-left">
          <LeftColumn>
            <h2>Menstrual Products</h2>
            <p>
              We stock pads and tampons available in our office! For specific
              needs, we partner with the Women, Gender, and Sexuality Resource
              Center to provide reusable and organic options.
            </p>
          </LeftColumn>
          <RightColumn>
            <ImageFill
              rounded
              alt="grid of tampons"
              src="https://campusgroups.rit.edu/upload/rit/2024/banner_image_upload_2735125_tampongrid_1021223133.jpg"
            />
          </RightColumn>
        </TwoColumnLayout>
        <TwoColumnLayout stack="right-over-left">
          <LeftColumn>
            <h2>Contraception</h2>
            <p>
              Our partner organization the Women, Gender, and Sexuality Resource
              Center carries condoms and lube. You can get them at their office
              in room 2010 in the Campus Center.
            </p>
          </LeftColumn>
          <RightColumn>
            <ImageFill
              rounded
              alt="grid of tampons"
              src="https://campusgroups.rit.edu/upload/rit/2024/banner_image_upload_2735125_condomgrid_102122314.jpg"
            />
          </RightColumn>
        </TwoColumnLayout>
      </CenteredLayout>
    </div>
  );
}
