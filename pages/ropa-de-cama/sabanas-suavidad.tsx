import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/sabanasSuavidadLandingContent.json'

export const SabanasSuavidad = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default SabanasSuavidad;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6voh875j380aix153htmht")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/04/Foto-turno-1.webp",
      "width":1920,
      "height":1280,
      "caption":"S\u00e1banas suavidad calm"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#webpage",
      "url":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/",
      "inLanguage":"es",
      "name":"S\u00e1banas suavidad: de microfibra, suaves y c\u00f3modas | Calm &#x1F49B;",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#primaryimage"
      },
      "datePublished":"2022-04-21T19:43:18+00:00",
      "dateModified":"2023-08-11T17:40:34+00:00",
      "description":"Las s\u00e1banas m\u00e1s suaves est\u00e1n en Calm. Eleg\u00ed la medida seg\u00fan el tama\u00f1o de tu colch\u00f3n. Las s\u00e1banas de microfibra est\u00e1n disponibles en varios colores."
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}