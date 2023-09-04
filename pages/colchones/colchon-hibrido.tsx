import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/colchonHibridoLandingContent.json'

export const ColchonHibrido = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    topPage()
    setRender(true)
  }, [])

  return (
    <>
      {render && 
        <main>
          <ProductLanding
            productId={landingContent["productId"]}
            title={landingContent["title"]}
            boldTitle={landingContent["boldTitle"]}
            dreamDelivery={landingContent["dreamDelivery"]}
            selectedLink={landingContent["selectedLink"]}
            landingSEO={landingSEO}
            graphImageObject={graphImageObject}
            graphWebPage={graphWebPage}
            skus={landingContent["skus"]}
            isSquare={landingContent["isSquare"]}
            layoutImages={landingContent["layoutImages"]}
            layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
            accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
            specsTitle={landingContent["specsSectionTitles"][0]["title"]}
            specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
            radiographyTitle={landingContent["specsSectionTitles"][1]["title"]}
            radiographyBoldTitle={landingContent["specsSectionTitles"][1]["bold"]}
            hasUnboxingSection={landingContent["hasUnboxingSection"]}
            specsTexts={landingContent["specsTexts"]}
            specsImage={landingContent["specsImages"]}
            specsValues={landingContent["specsValues"]}
            radiographyImage={landingContent["radiographyImage"]}
            radiographyTexts={landingContent["radiographyTexts"]}
            blogPosts={landingContent["blogPosts"]}
            faqAccordionTitle={landingContent["faqAccordionTitle"]["title"]}
            faqAccordionBoldTitle={landingContent["faqAccordionTitle"]["bold"]}
            faqAccordion={landingContent["faqAccordion"]}
            specsAccordionTitle={landingContent["specsAccordionTitle"]["title"]}
            specsAccordionBoldTitle={landingContent["specsAccordionTitle"]["bold"]}
            specsAccordion={landingContent["specsAccordion"]}
            reviewsTitle={landingContent["reviewsTitle"]}
          />
        </main>
      }
    </>
  )
}

export default ColchonHibrido;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6ox285zm480aixhlkg6j9u")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-hibrido/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2023/06/1319.webp",
    "width":1280,
    "height":853,
    "caption":"colchon hibrido calm"
 }

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/colchon-hibrido/#webpage",
    "url":"https://calmessimple.com.ar/colchones/colchon-hibrido/",
    "inLanguage":"es",
    "name":"Colch\u00f3n H\u00edbrido | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/colchon-hibrido/#primaryimage"
    },
    "datePublished":"2023-06-15T15:04:16+00:00",
    "dateModified":"2023-08-11T14:30:33+00:00"
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}