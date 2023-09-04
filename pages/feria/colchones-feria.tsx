import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/colchonCalmFeriaLandingContent.json'

export const ColchonCalmFeria = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default ColchonCalmFeria;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllv6yb33buou0biokco13y8z")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/feria/colchones-feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/1280x854_Colch\u00f3n-05.jpg",
    "width":1281,
    "height":854,
    "caption":"colch\u00f3n calm en caja"
  }

  const graphWebPage = {   
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/feria/colchones-feria/#webpage",
    "url":"https://calmessimple.com.ar/feria/colchones-feria/",
    "inLanguage":"es",
    "name":"Colchones feria | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/feria/colchones-feria/#primaryimage"
    },
    "datePublished":"2022-07-05T20:48:57+00:00",
    "dateModified":"2023-08-28T18:00:36+00:00"
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}