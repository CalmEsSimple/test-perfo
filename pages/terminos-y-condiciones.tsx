import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';
import { getLandingSEO } from '@/utils/hygraphHelper';
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types'
import { topPage } from '@/utils/topPage';
import InformationTermsAndCondition from '../components/InformationTermsAndCondition/InformationTermsAndCondition'

export const TermsAndCondition = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            <InformationTermsAndCondition
            /> 


          </main>
        }
      </>
    )
}

export default TermsAndCondition;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
    const landingSEO = await getLandingSEO("cll5i36k3bb130aixemnbl0u9")
   const graphWebPage =  {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/terminos-y-condiciones/#webpage",
    "url":"https://calmessimple.com.ar/terminos-y-condiciones/",
    "inLanguage":"es",
    "name":"terminos y condiciones | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-02T00:17:47+00:00",
    "dateModified":"2023-08-07T19:32:54+00:00"
 }
    return { props: {landingSEO, graphWebPage} }
  }