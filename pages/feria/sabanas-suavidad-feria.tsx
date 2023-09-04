import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/sabanasSuavidadFeriaLandingContent.json'

export const SabanasSuavidadFeria = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default SabanasSuavidadFeria;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllv88hu1d6ck0bitlle6zvpj")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/feria/sabanas-suavidad-feria/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/04/Foto-turno-1.webp",
      "width":1920,
      "height":1280,
      "caption":"S\u00e1banas suavidad calm"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/feria/sabanas-suavidad-feria/#webpage",
      "url":"https://calmessimple.com.ar/feria/sabanas-suavidad-feria/",
      "inLanguage":"es",
      "name":"S\u00e1banas Suavidad - Feria | Calm",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/feria/sabanas-suavidad-feria/#primaryimage"
      },
      "datePublished":"2023-03-07T14:01:41+00:00",
      "dateModified":"2023-08-28T18:35:34+00:00"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}