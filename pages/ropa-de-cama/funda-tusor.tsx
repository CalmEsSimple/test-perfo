import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/fundaTusorLandingContent.json'

export const FundaTusor = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            specsTexts={landingContent["specsTexts"]}
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

export default FundaTusor;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6vgr4x5b2u0ck06s0sizse")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1.webp",
      "width":1920,
      "height":1280,
      "caption":"Funda de Tusor 4 estaciones calm"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/#webpage",
      "url":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/",
      "inLanguage":"es",
      "name":"Funda de Tusor 4 Estaciones | Calm &#128155;",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/#primaryimage"
      },
      "datePublished":"2022-05-03T14:28:27+00:00",
      "dateModified":"2023-08-11T17:35:34+00:00",
      "description":"La mejor funda de edred\u00f3n de tusor est\u00e1 en Calm. La Funda de Tusor 4 estaciones la vas a usar todo el a\u00f1o, eleg\u00ed la medida seg\u00fan tu colch\u00f3n."
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}