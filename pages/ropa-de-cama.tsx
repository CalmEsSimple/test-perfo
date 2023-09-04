import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ICategoryLanding, ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryBedClothes.json";
import { useDispatch, useSelector } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import axios from 'axios';
import Combinations from '@/components/BedClothes/Combinations/Combinations';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import CategoryFAQ from '@/components/CategoryFAQ/CategoryFAQ';
import CategoryCards from '@/components/CategoryCards/CategoryCards';

export const RopaDeCamaCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const currentProductsRelated = useSelector(getCurrentProductsRelated)
  useEffect(() => {
    topPage()
    setRender(true)
    dispatch(onGetRelatedProducts("1835538"));
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
          <CategoryCards        
            title="ropa de cama."
            textTitle="vestí de gala tu colchón"
            items={products}
            installments={6}
          />
          <Combinations/>
          <RelatedProducts relatedItems={currentProductsRelated} title="completá tu" boldTitle="descanso ideal" />
          <CategoryFAQ
            faqAccordion={faqAccordion}
            title=''
            boldTitle='preguntas frecuentes sobre ropa de cama calm'
          />
        </main>
      }
    </>
  )
}

export default RopaDeCamaCategory;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll72c91cbzfr0biyevsaxg82")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-2.webp",
    "width":1920,
    "height":1280,
    "caption":"Colores funda tusor 4 estaciones"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/",
    "inLanguage":"es",
    "name":"Ropa de cama Calm | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/ropa-de-cama/#primaryimage"
    },
    "datePublished":"2022-09-30T12:17:10+00:00",
    "dateModified":"2023-07-13T17:55:10+00:00"
  }
  const ids = "1851772;1835935;1851405;1851178"
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}