import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/sommierLandingContent.json'

export const Sommier = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default Sommier;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6sxbk62ztv0aixtbu88r9o")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/bases/sommier/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/12/Sommier_1.webp",
    "width":1920,
    "height":1278
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/bases/sommier/#webpage",
    "url":"https://calmessimple.com.ar/bases/sommier/",
    "inLanguage":"es",
    "name":"Sommier Calm | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/bases/sommier/#primaryimage"
    },
    "datePublished":"2022-12-06T20:22:29+00:00",
    "dateModified":"2023-08-11T16:25:34+00:00"
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}