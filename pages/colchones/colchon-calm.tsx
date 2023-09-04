import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/colchonCalmLandingContent.json'

export const ColchonCalm = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            isSquare
            layoutImages={landingContent["layoutImages"]}
            layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
            accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
            specsTitle={landingContent["specsSectionTitles"][0]["title"]}
            specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
            radiographyTitle={landingContent["specsSectionTitles"][1]["title"]}
            radiographyBoldTitle={landingContent["specsSectionTitles"][1]["bold"]}
            specsTexts={landingContent["specsTexts"]}
            hasProgressBar
            hasUnboxingSection={landingContent["hasUnboxingSection"]}
            specsImage={landingContent["specsImages"]}
            specsValues={landingContent["specsValues"]}
            radiographyImage={landingContent["radiographyImage"]}
            radiographyTexts={landingContent["radiographyTexts"]}
            blogPosts={landingContent["blogPosts"]}
            faqAccordionTitle={landingContent["faqAccordionTitle"]["title"]}
            faqAccordionBoldTitle={landingContent["faqAccordionTitle"]["bold"]}
            faqAccordion={landingContent["faqAccordion"]}
            specsAccordionTitle={landingContent["specsAccordionTitle"]["title"]}
            specsAccordionBoldTitle={landingContent["specsAccordionTitle"]["bold"]}
            specsAccordion={landingContent["specsAccordion"]}
            reviewsTitle={landingContent["reviewsTitle"]}
          />
        </main>
      }
    </>
  )
}

export default ColchonCalm;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll59cxqi3k810aix5lmg6z4r")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-calm/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Colchon_sbd.webp",
    "width":1922,
    "height":1282,
    "caption":"persona acostada en un colch\u00f3n calm"
  }

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/colchon-calm/#webpage",
    "url":"https://calmessimple.com.ar/colchones/colchon-calm/",
    "inLanguage":"es",
    "name":"El Colch\u00f3n Perfecto para Todos | Probalo 30 noches en casa | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/colchones/colchon-calm/#primaryimage"
    },
    "datePublished":"2019-10-19T17:13:19+00:00",
    "dateModified":"2023-08-10T14:35:34+00:00",
    "description":"Compra Online el Colch\u00f3n perfecto para todos los Argentinos. Envio gratis a todo el pa\u00eds y 12 cuotas sin interes con todas las tarjetas\u2705"
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}