import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/comboOriginalLandingContent.json'

export const ComboOriginal = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            comboIds={landingContent["comboIds"]}
            title={landingContent["title"]}
            boldTitle={landingContent["boldTitle"]}
            dreamDelivery={landingContent["dreamDelivery"]}
            selectedLink={landingContent["selectedLink"]}
            landingSEO={landingSEO}
            graphImageObject={graphImageObject}
            graphWebPage={graphWebPage}
            skus={landingContent["skus"]}
            specsTitle={landingContent["specsSectionTitles"][0]["title"]}
            specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
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

export default ComboOriginal;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllbd8g1oawgt0aixsys4lkaf")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/combos/combo-original/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Colchon_sbd.webp",
    "width":1922,
    "height":1282,
    "caption":"persona acostada en un colch\u00f3n calm"
 }

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/combos/combo-original/#webpage",
    "url":"https://calmessimple.com.ar/combos/combo-original/",
    "inLanguage":"es",
    "name":"Combo Original | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/producto/combo-original/#primaryimage"
    },
    "datePublished":"2022-12-07T14:39:17+00:00",
    "dateModified":"2023-05-01T21:49:55+00:00"
}
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}