import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import Landing from '@/components/Compromiso/Landing/Landing';
import Help from '@/components/Compromiso/Help/Help';
import helpJson from "../utils/helpComponent.json"
import Withdrawals from '@/components/Compromiso/Withdrawals/Withdrawals';
import Cyber from '@/components/Compromiso/Cyber/Cyber';
import HotSale from '@/components/Compromiso/HotSale/HotSale';
import Questions from '@/components/Compromiso/Questions/Questions';
import { Title, Text } from '@/components/Compromiso/Landing/propStylesCss/propStyleLanding';
export const CompromisoDescansados = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
          <Landing />
          <Help cards={helpJson.cardsCompromisosDescansados} background={"compromiso"} Title={Title} Text={Text} carousel={false} />
          <Withdrawals/>
          <Cyber />
          <HotSale />
          <Questions />
        </main>
      }
    </>
  )
}

export default CompromisoDescansados;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6ybkci82q00ck0345nx6u0")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/compromiso-descansados/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2021/09/LogoHSSolidariX-10.svg"
 }
 const graphWebPage = {
  "@type":"WebPage",
  "@id":"https://calmessimple.com.ar/compromiso-descansados/#webpage",
  "url":"https://calmessimple.com.ar/compromiso-descansados/",
  "inLanguage":"es",
  "name":"Compromiso Descansados \u00a1Don\u00e1 tu &quot;ex&quot; Colch\u00f3n! | Calm",
  "isPartOf":{
     "@id":"https://calmessimple.com.ar/#website"
  },
  "primaryImageOfPage":{
     "@id":"https://calmessimple.com.ar/compromiso-descansados/#primaryimage"
  },
  "datePublished":"2020-07-07T22:10:09+00:00",
  "dateModified":"2023-07-25T12:39:29+00:00",
  "description":"Este CyberMonday don\u00e1 el colch\u00f3n que dejas a TECHO Argentina y convertilo en un mayor descuento. Ahora no 1, sino 2 van a descansar mejor."
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}