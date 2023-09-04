import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/sabanasAlgodonLandingContent.json'

export const SabanasAlgodon = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default SabanasAlgodon;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6vy9l95z9g0biyznqmf8ru")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-2.webp",
      "width":1920,
      "height":1280,
      "caption":"S\u00e1banas calm 100% algodon en tres colores"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/#webpage",
      "url":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/",
      "inLanguage":"es",
      "name":"S\u00e1banas de algod\u00f3n: 200 hilos del mejor algod\u00f3n | Calm &#x1F49B;",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/#primaryimage"
      },
      "datePublished":"2022-05-06T18:21:47+00:00",
      "dateModified":"2023-08-11T17:45:34+00:00",
      "description":"Tu pr\u00f3ximas s\u00e1banas de 2 plazas, 2 plazas y media y 1 plaza est\u00e1n en Calm. S\u00e1banas algod\u00f3n y frescura, de 200 hilos del mejor algod\u00f3n."
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}