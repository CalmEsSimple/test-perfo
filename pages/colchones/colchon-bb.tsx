import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/colchonBBLandingContent.json'

export const ColchonBB = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            specsTexts={landingContent["specsTexts"]}
            specsImage={landingContent["specsImages"]}
            specsValues={landingContent["specsValues"]}
            hasUnboxingSection={landingContent["hasUnboxingSection"]}
            faqAccordionTitle={landingContent["faqAccordionTitle"]["title"]}
            faqAccordionBoldTitle={landingContent["faqAccordionTitle"]["bold"]}
            faqAccordion={landingContent["faqAccordion"]}
            specsAccordionTitle={landingContent["specsAccordionTitle"]["title"]}
            specsAccordionBoldTitle={landingContent["specsAccordionTitle"]["bold"]}
            specsAccordion={landingContent["specsAccordion"]}
          />
        </main>
      }
    </>
  )
}

export default ColchonBB;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6qn0p00or70ck0afq62kin")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-bb/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/06/render-turno-1.webp",
    "width":1920,
    "height":1280,
    "caption":"colch\u00f3n para bebe Calm"
 }

 const graphWebPage = {
  "@type":"WebPage",
  "@id":"https://calmessimple.com.ar/colchones/colchon-bb/#webpage",
  "url":"https://calmessimple.com.ar/colchones/colchon-bb/",
  "inLanguage":"es",
  "name":"Colch\u00f3n para Cuna de Beb\u00e9 | Calm &#x1F49B;",
  "isPartOf":{
     "@id":"https://calmessimple.com.ar/#website"
  },
  "primaryImageOfPage":{
     "@id":"https://calmessimple.com.ar/colchones/colchon-bb/#primaryimage"
  },
  "datePublished":"2022-06-08T13:21:12+00:00",
  "dateModified":"2023-08-11T15:15:32+00:00",
  "description":"Que el primer colch\u00f3n de tu beb\u00e9 sea un Calm. Eleg\u00ed la medida del colch\u00f3n seg\u00fan la medida de la cuna de tu beb\u00e9: 70x100cm o 80x140cm."
}
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}