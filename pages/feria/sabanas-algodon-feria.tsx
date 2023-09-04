import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/sabanasAlgodonFeriaLandingContent.json'

export const SabanasAlgodonFeria = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            skusFeria={landingContent["skusFeria"]}
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

export default SabanasAlgodonFeria;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllv7xh1nct560bio17o040dt")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-2.webp",
      "width":1920,
      "height":1280,
      "caption":"S\u00e1banas calm 100% algodon en tres colores"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/#webpage",
      "url":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/",
      "inLanguage":"es",
      "name":"S\u00e1banas de algod\u00f3n - Feria | Calm",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/#primaryimage"
      },
      "datePublished":"2023-03-07T14:05:40+00:00",
      "dateModified":"2023-08-28T18:30:36+00:00"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}