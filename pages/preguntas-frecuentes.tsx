import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import QuestionsJson from "../components/FAQAccordion/FrequentQuestions.json";
import FAQPageLanding from '@/components/FAQPageLanding/FAQPageLanding';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import Bed from '@/components/Bed/Bed';

export const FAQPage = ({landingSEO, graphImageObject, graphWebPage, faqAccordion}: ILanding) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    topPage()
    setRender(true)
  }, [])

  return (
    <>
      <SEO
        title={landingSEO.title}
        description={landingSEO.description}
        imageSrc={landingSEO.image}
        url={landingSEO.url}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
        faqAccordion={faqAccordion}
        showCalmRichSnippet
      />
      {render && 
        <main>
          <FAQPageLanding />
          <FAQAccordion />
          <Bed />
        </main>
      }
    </>
  )
}

export default FAQPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll1cqlciiplu0biuwi54u1ko")
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/preguntas-frecuentes/#webpage",
    "url":"https://calmessimple.com.ar/preguntas-frecuentes/",
    "inLanguage":"es",
    "name":"preguntas frecuentes | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-03T17:08:44+00:00",
    "dateModified":"2023-02-01T14:02:04+00:00"
  }
  const faqAccordion = QuestionsJson.Products.concat(QuestionsJson.PaymentMethods).concat(QuestionsJson.Shipment)
  return { props: {landingSEO, graphWebPage, faqAccordion} }
}