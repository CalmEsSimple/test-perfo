import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/edredonLandingContent.json'

export const EdredonAbrazo = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default EdredonAbrazo;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6v9mz155ad0ck0e3orao7y")
    const graphImageObject = {
        "@type":"ImageObject",
        "@id":"https://calmessimple.com.ar/producto/edredon-abrazo/#primaryimage",
        "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-1.webp",
        "width":1920,
        "height":1280,
        "caption":"Edred\u00f3n Calm enrollado"
    }

    const graphWebPage = {
        "@type":"WebPage",
        "@id":"https://calmessimple.com.ar/ropa-de-cama/edredon-abrazo/#webpage",
        "url":"https://calmessimple.com.ar/ropa-de-cama/edredon-abrazo/",
        "inLanguage":"es",
        "name":"Edred\u00f3n Abrazo tu ant\u00eddoto contra el fr\u00edo &#129507; | Calm",
        "isPartOf":{
           "@id":"https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage":{
           "@id":"https://calmessimple.com.ar/ropa-de-cama/edredon-abrazo/#primaryimage"
        },
        "datePublished":"2022-05-17T18:23:13+00:00",
        "dateModified":"2023-08-11T17:25:34+00:00",
        "description":"\u00bfC\u00f3mo es el Edred\u00f3n abrazo de Calm? Es un edred\u00f3n suave, liviano y resistente &#128170; Ideal para combatir el fr\u00edo y para mejorar tu descanso."
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}