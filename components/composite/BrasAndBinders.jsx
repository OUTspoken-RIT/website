import {
  BigBorder,
  FancyBox,
  FancyBoxContent,
  FancyBoxHeader,
  LinkButton,
} from "../ui";

export function BrasAndBinders() {
  return (
    <FancyBox color="fern" className="bras-and-binders">
      <FancyBoxHeader>
        <h2>Your one-stop shop for free resources</h2>
        <div className="images">
          <p className="h2">
            from <span className="emph">bras</span>
          </p>
          <img
            alt="tomboy X bra"
            src="https://campusgroups.rit.edu/upload/rit/2024/flyer_image_upload_2735125_bra_1016131237.jpg"
          />
          <p className="h2">
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="83"
              viewBox="0 0 29 83"
              fill="none"
            >
              <path
                d="M3.39784 0.955099C2.54462 0.253609 1.28428 0.376612 0.582792 1.22983C-0.118697 2.08305 0.00430536 3.3434 0.857526 4.04489L3.39784 0.955099ZM7.62999 81.0596C7.91733 82.1261 9.01487 82.7578 10.0814 82.4705L27.4617 77.788C28.5282 77.5007 29.1599 76.4032 28.8726 75.3366C28.5852 74.2701 27.4877 73.6384 26.4212 73.9257L10.972 78.0879L6.80984 62.6388C6.52251 61.5722 5.42497 60.9405 4.35843 61.2279C3.29189 61.5152 2.66022 62.6128 2.94756 63.6793L7.62999 81.0596ZM0.857526 4.04489C13.2083 14.1993 19.0861 25.6827 19.8939 38.1837C20.707 50.7689 16.3982 64.6504 7.82773 79.5417L11.2945 81.537C20.077 66.2772 24.7687 51.5947 23.8855 37.9258C22.9969 24.1728 16.4815 11.7121 3.39784 0.955099L0.857526 4.04489Z"
                fill="#252B32"
              />
            </svg>
            to <span className="emph">binders</span>
          </p>
          <img
            alt="spectrum binder"
            src="https://campusgroups.rit.edu/upload/rit/2024/flyer_image_upload_2735125_binder_1016131325.jpg"
          />
        </div>
      </FancyBoxHeader>
      <FancyBoxContent>
        We partner with the Women, Gender, and Sexuality Resouce Center to stock
        all the resources you'll need to thrive. We provide a variety of free
        resources for LGBTQ+ students including bras, binders, contraception,
        menstrual products, and clothing.
        <LinkButton href="/closet">Get resources</LinkButton>
      </FancyBoxContent>
    </FancyBox>
  );
}
