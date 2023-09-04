import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/colchonPerroLandingContent.json'

export const ColchonPerro = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            hasUnboxingSection={landingContent["hasUnboxingSection"]}
            faqAccordionTitle={landingContent["faqAccordionTitle"]["title"]}
            faqAccordionBoldTitle={landingContent["faqAccordionTitle"]["bold"]}
            faqAccordion={landingContent["faqAccordion"]}
          />
        </main>
      }
    </>
  )
}

export default ColchonPerro;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6rbxg71e080aixx0knnth0")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-perros/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/06/Perros_Turno1_GrisClaro-1.webp",
    "width":1920,
    "height":1280
 }

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/colchon-perros/#webpage",
    "url":"https://calmessimple.com.ar/colchones/colchon-perros/",
    "inLanguage":"es",
    "name":"Colch\u00f3n para Perros | Calm &#x1F49B;",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/colchon-perros/#primaryimage"
    },
    "datePublished":"2022-06-07T19:24:02+00:00",
    "dateModified":"2023-08-11T15:40:32+00:00",
    "description":"Eleg\u00ed el colch\u00f3n perfecto para tu perro. Tama\u00f1o del colch\u00f3n para perros: Peque\u00f1os, medianos o grandes. Colch\u00f3n100% antidesgarros."
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}