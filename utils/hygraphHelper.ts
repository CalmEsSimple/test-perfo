import { ILandingSEO } from "../types";
import client from "./apolloClient";
import { gql } from "@apollo/client";

export const getLandingSEO = async (id: string) => {
  const { data }: { data: { landingSEO: ILandingSEO } } = await client.query({
    query: gql`
            query getLandingSEO {
                landingSEO(where:{id: "${id}"}) {
                    title
                    description
                    image
                    url
                }
            }
        `,
  });
  return data.landingSEO;
};

export const getBannerSidecart = gql`
  query getBannerSidecart($id: ID!) {
    bannerSidecart(where: { id: $id }) {
      colorBackground
      colorText
      textBanner
      show
    }
  }
`;

export const getHeaderBanner = gql`
  query getHeaderBanner($id: ID!) {
    headBanner(where: { id: $id }) {
      id
      text
      backgroundColor {
        hex
      }
      textColor {
        hex
      }
      iniCountDown
      endPromotion
      richText {
        html
      }
    }
  }
`;

export const getPlainImagesSlider = gql`
  query getPlainImagesSliderBanner($id: ID!) {
    plainImagesSliderBanner(where: { id: $id }) {
      imagesData
    }
  }
`;

export const getBigBanner = gql`
  query getBigBanner($id: ID!) {
    bigBanner(where: { id: $id }) {
      imagesData
    }
  }
`;

export const getPillOfferProduct = gql`
  query getPillOfferProduct($id: ID!) {
    pillOfferProduct(where: { id: $id }) {
      id
      text
      backgroundColor {
        hex
      }
      textColor {
        hex
      }
    }
  }
`;

export const getDateCountDown = gql`
  query getDateCountDown($id: ID!) {
    dateCountDown(where: { id: $id }) {
      id
      iniCountDown
      endPromotion
    }
  }
`;

export const getTermsAndConditions = gql`
  query getTermsAndConditions($id: ID!) {
    termsAndConditions(where: { id: $id }) {
      id
      textOffer {
        html
      }
    }
  }
`;

export const getTyCPromotion = gql`
  query getTyCPromotion($id: ID!) {
    tyCPromotion(where: { id: $id }) {
      id
      promotionData
    }
  }
`;
