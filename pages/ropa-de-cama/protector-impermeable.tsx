import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/protectorLandingContent.json'

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
            reviewsTitle={landingContent["reviewsTitle"]}
          />
        </main>
      }
    </>
  )
}

export default EdredonAbrazo;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6wm7kc6d860aixw5dob0gj")
    const graphImageObject = {
      "@type":"ImageObject",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/#primaryimage",
      "url":"https://calmessimple.com.ar/wp-content/uploads/2022/06/foto-turno-1.webp",
      "width":1920,
      "height":1280,
      "caption":"Protector de Colch\u00f3n Calm"
    }

    const graphWebPage = {
      "@type":"WebPage",
      "@id":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/#webpage",
      "url":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/",
      "inLanguage":"es",
      "name":"Protector de Colch\u00f3n Impermeable | Calm &#x1F49B;",
      "isPartOf":{
         "@id":"https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage":{
         "@id":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/#primaryimage"
      },
      "datePublished":"2022-06-08T13:49:02+00:00",
      "dateModified":"2023-08-11T18:00:34+00:00",
      "description":"Eleg\u00ed el protector de colch\u00f3n impermeable perfecto para el tama\u00f1o de tu cama. Alarg\u00e1 la vida de tu colch\u00f3n con este complemento ideal."
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}