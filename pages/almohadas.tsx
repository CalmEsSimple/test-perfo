import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ICategoryLanding, ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryAlmohadas.json";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import CategoryCards from '@/components/CategoryCards/CategoryCards';
import Dream from '@/components/AlmohadasCategories/Dream/Dream';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import CategoryFAQ from '@/components/CategoryFAQ/CategoryFAQ';

export const AlmohadasCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const currentProductsRelated = useSelector(getCurrentProductsRelated)
  useEffect(() => {
    topPage()
    setRender(true)
    dispatch(onGetRelatedProducts("537"));
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
            title="almohadas."
            textTitle="elegí la almohada perfecta para vos"
            items={products}
            installments={6}
          />
          <Dream />
          <RelatedProducts relatedItems={currentProductsRelated} title="completá tu" boldTitle="descanso ideal" />
          <CategoryFAQ
            faqAccordion={faqAccordion}
            title=''
            boldTitle='preguntas frecuentes sobre almohadas calm'
          />
        </main>
      }
    </>
  )
}

export default AlmohadasCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO("cll728dk8bvkq0biyrvbhqsad")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/almohadas/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-espacio-2.webp",
    "width":1920,
    "height":914,
    "caption":"Dos Altas Almohadas en colch\u00f3n calm"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/almohadas/#webpage",
    "url":"https://calmessimple.com.ar/almohadas/",
    "inLanguage":"es",
    "name":"Almohadas | Encontr\u00e1 tu almohada ideal | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/almohadas/#primaryimage"
    },
    "datePublished":"2021-08-03T13:39:15+00:00",
    "dateModified":"2023-07-10T15:16:35+00:00",
    "description":"Eleg\u00ed entre la Almohada Inteligente la combinaci\u00f3n perfecta de soporte y frescura, o la Almohada Infinita con firmeza regulable y suavidad irresistible."
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "537;1855350;1831947;724708"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}