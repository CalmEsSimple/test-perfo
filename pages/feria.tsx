import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryFeria.json";
import CategoryCards from '@/components/CategoryCards/CategoryCards';
import CategoryFAQ from '@/components/CategoryFAQ/CategoryFAQ';
import axios from 'axios';
import FeriaCategoryBanner from '@/components/FeriaCategoryBanner/FeriaCategoryBanner';

export const FeriaCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
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
          <FeriaCategoryBanner />
          <div id='productos'>
            <CategoryCards
              title="productos feria."
              textTitle="tu descanso al mejor precio"
              items={products}
              installments={-1}
            />
          </div>
          <CategoryFAQ
            faqAccordion={faqAccordion}
            title='preguntas'
            boldTitle='frecuentes.'
          />
        </main>
      }
    </>
  )
}

export default FeriaCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO("clle2yyb11p8w0ak5ag5mtgqc")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2023/06/1346.webp",
    "width":1280,
    "height":853,
    "caption":"colchon hibrido calm con ropa de cama"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/feria/#webpage",
    "url":"https://calmessimple.com.ar/feria/",
    "inLanguage":"es",
    "name":"Feria | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/feria/#primaryimage"
    },
    "datePublished":"2023-03-23T15:20:53+00:00",
    "dateModified":"2023-07-13T17:51:10+00:00"
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "1952731;2024064;2024048;2024024;2023992;2023969"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}