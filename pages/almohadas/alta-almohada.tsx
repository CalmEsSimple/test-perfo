import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/ProductLanding/ProductLanding';
import landingContent from '@/utils/altaAlmohadaLandingContent.json'

export const AltaAlmohada = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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

export default AltaAlmohada;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll6ti2f23klu0ck00hez8akp")
    const graphImageObject = {
        "@type":"ImageObject",
        "@id":"https://calmessimple.com.ar/almohadas/alta-almohada/#primaryimage",
        "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/Render-turno-1-1.webp",
        "width":1920,
        "height":1280,
        "caption":"Alta almohada s\u00faper resistente"
    }

    const graphWebPage = {
        "@type":"WebPage",
        "@id":"https://calmessimple.com.ar/almohadas/alta-almohada/#webpage",
        "url":"https://calmessimple.com.ar/almohadas/alta-almohada/",
        "inLanguage":"es",
        "name":"Alta Almohada Suave y esponjosa, con efecto pluma | Calm",
        "isPartOf":{
            "@id":"https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage":{
            "@id":"https://calmessimple.com.ar/almohadas/alta-almohada/#primaryimage"
        },
        "datePublished":"2022-05-11T14:19:05+00:00",
        "dateModified":"2023-08-11T16:30:34+00:00",
        "description":"Ideal para dormir en todas las posiciones &#128564; Env\u00edo gratis a todo el pa\u00eds &#127873; Entrega en 24hs en CABA &#128640; 30 noches de prueba &#127769; 6 cuotas sin inter\u00e9s &#128179;"
    }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}