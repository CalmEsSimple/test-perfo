import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import { NochesLanding } from '@/components/30NochesLanding/30NochesLanding';
import Bed from '@/components/Bed/Bed';
import CategoryFaq from "@/components/CategoryFAQ/CategoryFAQ"
import faqAccordion from "@/jsons/FrequentQuestions/FrequentQuestions.json"
import Help from '@/components/Compromiso/Help/Help';
import helpJson from "@/utils/helpComponent.json"

export const FAQPage = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
        faqAccordion={faqAccordion.TestNights}
        showCalmRichSnippet
      />
      {render && 
        <main>
          <NochesLanding/>
          <Help cards={helpJson.cards30Noches}/>
          <CategoryFaq is30night={true} faqAccordion={faqAccordion.TestNights} title='' boldTitle='Preguntas frecuentes'/>
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

  return { props: {landingSEO, graphWebPage, } }
}