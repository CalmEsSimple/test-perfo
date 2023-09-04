import { useDispatch, useSelector } from "react-redux";
import type { } from 'redux-thunk/extend-redux';
import {
  Bold,
  ContainerComponent,
  DescriptionAccordion,
  DivAccordion,
  DivContainerAccordion,
  DivTextAccordion,
  DivTitleAccordion,
  LandingContent,
  TitleRest,
  TittleAccordion
} from "./styled";
import { IProps } from "./types";
import { IStore } from "@/state/types";
import { IProduct } from "@/state/products/types";
import { useEffect, useState } from "react";
import { getLoadingValues } from "@/state/loading/loadingSelector";
import { onGetProduct, onGetRelatedProducts, onGetSDefaultProducts } from "@/state/products/productsActions";
import { getCurrentProductsRelated, getDefaultProducts, getProductsData } from "@/state/products/productsSelector";
import SEO from "../SEO/SEO";
import MainBlock from "./components/MainBlock/MainBlock";
import SecondSection from "./components/SecondSection/SecondSection";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import DimensionsAndSpecs from "./components/DimensionsAndSpecs/DimensionsAndSpecs";
import { Unboxing } from "./components/Unboxing/Unboxing";
import ImgDescButt from "../ImgDescButt/ImgDescButt";
import Accordion from "../Accordion/Accordion";
import ReviewsLandingProduct from "./components/Reviews/ReviewsLandingProduct/ReviewsLandingProduct.jsx"
import ComboSection from "./components/ComboSection/ComboSection";
import ComboUnboxing from "./components/ComboUnboxing/ComboUnboxing";
import VideoComponent from "../VideoComponent/VideoComponent";
import CategoryOfferPillsPrice from "../../utils/CategoryOfferPillsPrice.json"
import FeriaBanner from "./components/FeriaBanner/FeriaBanner";
import ColchonFeriaSection from "./components/ColchonFeriaSection/ColchonFeriaSection";
import FeriaSection from "./components/FeriaSection/FeriaSection";

const ProductLanding = ({
  productId,
  comboIds,
  title,
  boldTitle,
  dreamDelivery,
  selectedLink,
  landingSEO,
  skus,
  skusFeria,
  isSquare,
  layoutImages,
  layoutImagesHaveVideo,
  accordionSpecsTexts,
  specsTitle,
  specsBoldTitle,
  radiographyTitle,
  radiographyBoldTitle,
  specsTexts,
  hasProgressBar,
  specsImage,
  specsValues,
  radiographyImage,
  radiographyTexts,
  blogPosts,
  hasTutorialSection,
  hasUnboxingSection,
  faqAccordionTitle,
  faqAccordionBoldTitle,
  faqAccordion,
  specsAccordionTitle,
  specsAccordionBoldTitle,
  specsAccordion,
  graphImageObject,
  graphWebPage,
  reviewsTitle,
}: IProps) => {
  const dispatch = useDispatch();
  const productsData = useSelector((state: IStore) => getProductsData(state));
  const defaultProducts = useSelector((state: IStore) => getDefaultProducts(state));
  const stateLoading = useSelector((state: IStore) => getLoadingValues(state));
  const currentProductsRelated = useSelector((state: IStore) => getCurrentProductsRelated(state))

  const [product, setProduct] = useState<IProduct>();
  const [galleryImages, setGalleryImages] = useState<string[] | undefined>();

  useEffect(() => {
    dispatch(onGetRelatedProducts(comboIds ? comboIds[0] : productId));
    dispatch(onGetSDefaultProducts());
  }, []);

  useEffect(() => {
    if (!productsData || productsData.every(product => product.id !== productId)) {
      dispatch(onGetProduct(productId))
    }
  }, []);

  useEffect(() => {
    setProduct(productsData?.find(product => product.id === productId))
  }, [productsData]);

  useEffect(() => {
    if (product?.image_url && product?.gallery_image_url) {
      setGalleryImages([product.image_url].concat(product.gallery_image_url.map(url => url)))
    }
    
  }, [product]);

  const IconIsActive = {
    LocalmQuestions: true,
    LocalmEmpathy: false,
    frequentQuestions: false,
  };

  return (
    <>
      <SEO
        title={landingSEO.title}
        description={landingSEO.description}
        imageSrc={landingSEO.image}
        url={landingSEO.url}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
        productReviewsSKUs={skusFeria ?? skus}
        faqAccordion={faqAccordion}
      />
      {selectedLink == "feria" && <FeriaBanner showCPValidator={productId == "1952731"} />}
      <MainBlock
        title={title}
        dreamDelivery={dreamDelivery}
        boldTitle={boldTitle}
        description={product?.short_description}
        category={selectedLink}
        galleryImages={galleryImages}
        children={product?.children}
        discount={product?.discount as number}
        installments={product?.installments}
        skus={skus}
        stateLoading={stateLoading?.loadingAddToCart || stateLoading.loadingUpdateToCart}
        defaultProds={defaultProducts}
        pillId={product?.discount_pill}
        pillIdPrice={CategoryOfferPillsPrice[product?.category as keyof typeof CategoryOfferPillsPrice]}
        isCombo={!!comboIds}
        idProd={product?.id}
      />
      {comboIds && <ComboSection />}
      {selectedLink == "feria" && <FeriaSection showDonation={productId == "1952731"} />}
      {!comboIds && productId != "1952731" &&
        <SecondSection
          skus={skus}
          isSquare={isSquare}
          layoutImages={layoutImages}
          layoutImagesHaveVideo={layoutImagesHaveVideo}
          accordionSpecsTexts={accordionSpecsTexts}
          specsTexts={specsTexts}
          hasProgressBar={hasProgressBar}
        />
      }
      {productId == "1952731" && <ColchonFeriaSection />}
      {selectedLink != "feria" && <RelatedProducts relatedItems={currentProductsRelated} title="completá tu" boldTitle="descanso ideal" />}
      {
        hasTutorialSection && hasTutorialSection.show && 
        <VideoComponent 
        title={hasTutorialSection.title} 
        boldTitle={hasTutorialSection.boldTitle} 
        url={hasTutorialSection.videoId}
        />
      }
      {specsValues &&
        <DimensionsAndSpecs
          specsTitle={specsTitle}
          specsBoldTitle={specsBoldTitle}
          radiographyTitle={radiographyTitle}
          radiographyBoldTitle={radiographyBoldTitle}
          imageUrl={specsImage}
          specs={specsValues}
          radiographyImage={radiographyImage}
          radiographyTexts={radiographyTexts}
        />
      }
      {!!comboIds && <ComboUnboxing />}
      {hasUnboxingSection &&
        <Unboxing
          thumbnail='https://res.cloudinary.com/djrihqr0s/image/upload/f_auto/q_auto/v1683723770/ecommerce-calm/colchones/thumpnailYoutubeUnboxing.jpg'
          videoId="arxKSRvmk10"
        />
      }
      {blogPosts && <ImgDescButt info={blogPosts} />}
      {faqAccordion && <ContainerComponent $hasBackgroundColor>
        <LandingContent>
          <TitleRest>{faqAccordionTitle}<Bold>{faqAccordionBoldTitle}</Bold></TitleRest>
          <DivAccordion>
            <Accordion
              DivContainerAccordion={DivContainerAccordion}
              DivTitleAccordion={DivTitleAccordion}
              DivTextAccordion={DivTextAccordion}
              TittleAccordion={TittleAccordion}
              DescriptionAccordion={DescriptionAccordion}
              items={faqAccordion}
              IconIsActive={IconIsActive}
              firstBoxIsActive
            />
          </DivAccordion>
        </LandingContent>
      </ContainerComponent>}
      {specsAccordion && <ContainerComponent>
        <LandingContent>
          <TitleRest>{specsAccordionTitle}<Bold>{specsAccordionBoldTitle}</Bold></TitleRest>
          <DivAccordion>
            <Accordion
              DivContainerAccordion={DivContainerAccordion}
              DivTitleAccordion={DivTitleAccordion}
              DivTextAccordion={DivTextAccordion}
              TittleAccordion={TittleAccordion}
              DescriptionAccordion={DescriptionAccordion}
              items={specsAccordion}
              IconIsActive={IconIsActive}
              firstBoxIsActive
            />
          </DivAccordion>
        </LandingContent>
      </ContainerComponent>}
      <ReviewsLandingProduct skus={skus} reviewsTitle={reviewsTitle}/>
    </>
  );
}

export default ProductLanding