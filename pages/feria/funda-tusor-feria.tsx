import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/fundaTusorFeriaLandingContent.json'

export const FundaTusorFeria = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            specsAccordionTitle={landingContent["specsAccordionTitle"]["title"]}
            specsAccordionBoldTitle={landingContent["specsAccordionTitle"]["bold"]}
            specsAccordion={landingContent["specsAccordion"]}
          />
        </main>
      }
    </>
  )
}

export default FundaTusorFeria;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllv7dykacdr80bitrdkhbttp")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/feria/funda-tusor-feria/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1.webp",
      "width":1920,
      "height":1280,
      "caption":"Funda de Tusor 4 estaciones calm"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/feria/funda-tusor-feria/#webpage",
      "url":"https://calmessimple.com.ar/feria/funda-tusor-feria/",
      "inLanguage":"es",
      "name":"Funda de Tusor Feria Calm | Calm",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/feria/funda-tusor-feria/#primaryimage"
      },
      "datePublished":"2023-03-07T14:22:16+00:00",
      "dateModified":"2023-08-28T18:15:33+00:00"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}