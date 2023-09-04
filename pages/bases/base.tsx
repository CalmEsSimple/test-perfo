import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/baseLandingContent.json'

export const Base = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            faqAccordionTitle={landingContent["faqAccordionTitle"]["title"]}
            faqAccordionBoldTitle={landingContent["faqAccordionTitle"]["bold"]}
            faqAccordion={landingContent["faqAccordion"]}
            specsAccordionTitle={landingContent["specsAccordionTitle"]["title"]}
            specsAccordionBoldTitle={landingContent["specsAccordionTitle"]["bold"]}
            specsAccordion={landingContent["specsAccordion"]}
            hasTutorialSection={landingContent["hasTutorialSection"]}
          />
        </main>
      }
    </>
  )
}

export default Base;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6skzst2g800ck0ujzldn6u")
  const graphImageObject =  {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/bases/base/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Base_sbd-1.webp",
    "width":1922,
    "height":1282,
    "caption":"Foto base de cama calm"
 }

    const graphWebPage = {
        "@type":"WebPage",
        "@id":"https://calmessimple.com.ar/bases/base/#webpage",
        "url":"https://calmessimple.com.ar/bases/base/",
        "inLanguage":"es",
        "name":"Base de cama Calm | La Cama Perfecta Para Todxs | Calm",
        "isPartOf":{
            "@id":"https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage":{
            "@id":"https://calmessimple.com.ar/bases/base/#primaryimage"
        },
        "datePublished":"2019-10-19T17:19:56+00:00",
        "dateModified":"2023-08-11T16:15:35+00:00",
        "description":"Se arma en menos de 15\u00b4 y de hierro para una m\u00e1xima estabilidad en la base de cama.12 cuotas sin inter\u00e9s \u2705 30 noches de prueba en casa \u2705 env\u00edo gratis \u2705"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}