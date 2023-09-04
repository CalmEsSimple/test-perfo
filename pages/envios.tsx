import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import Bed from '@/components/Bed/Bed';
import Envios from '@/components/EnviosLanding/EnviosLanding';

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
        showCalmRichSnippet
      />
      {render && 
        <main>
            <Envios/>
            <Bed />
        </main>
      }
    </>
  )
}

export default FAQPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllzj7vekbwk80bk75bes4gzd")
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/envios/#webpage",
    "url":"https://calmessimple.com.ar/envios/",
    "inLanguage":"es",
    "name":"Envios | Es simple, envío gratis a todo el país | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-03T15:00:48+00:00",
    "dateModified":"2022-02-11T15:27:43+00:00"
  }
  return { props: {landingSEO, graphWebPage} }
}