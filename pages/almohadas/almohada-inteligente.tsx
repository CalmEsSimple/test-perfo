import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/almohadaInteligenteLandingContent.json'

export const AlmohadaInteligente = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default AlmohadaInteligente;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6up43m4pbg0aixp1hyhwqh")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/almohadas/almohada-inteligente/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Almohada-Inteligente-Sola.webp",
      "width":1920,
      "height":1280,
      "caption":"Almohada inteligente"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/almohadas/almohada-inteligente/#webpage",
      "url":"https://calmessimple.com.ar/almohadas/almohada-inteligente/",
      "inLanguage":"es",
      "name":"La Almohada Perfecta Para Todos | Probala 30 Noches en Casa | Calm",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/almohadas/almohada-inteligente/#primaryimage"
      },
      "datePublished":"2019-10-21T22:54:27+00:00",
      "dateModified":"2023-08-11T17:15:33+00:00",
      "description":"Nuestra almohada inteligente es una combinaci\u00f3n super confortable de suavidad, apoyo y frescura. Envios gratis a todo el pa\u00eds + 6 cuotas sin interes"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}