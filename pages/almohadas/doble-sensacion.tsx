import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/dobleSensacionLandingContent.json'

export const DobleSensacion = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
          />
        </main>
      }
    </>
  )
}

export default DobleSensacion;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6to76941n20biymfx39bib")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/almohadas/doble-sensacion/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/doble_sensacion_turno1.webp",
      "width":1920,
      "height":1280,
      "caption":"almohada doble sensaci\u00f3n con caja"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/almohadas/doble-sensacion/#webpage",
      "url":"https://calmessimple.com.ar/almohadas/doble-sensacion/",
      "inLanguage":"es",
      "name":"Almohada Doble Sensaci\u00f3n | Calm",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/almohadas/doble-sensacion/#primaryimage"
      },
      "datePublished":"2022-05-12T15:40:06+00:00",
      "dateModified":"2023-08-11T16:45:31+00:00",
      "description":"Almohada de espuma viscoel\u00e1stica y espuma soft &#128155; Env\u00edo gratis a todo el pa\u00eds &#127873; Entrega en 24hs en CABA &#128640; 30 noches de prueba &#127769; 6 cuotas sin inter\u00e9s &#128179;"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}