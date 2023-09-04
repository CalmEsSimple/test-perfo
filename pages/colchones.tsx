import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryColchon.json";
import CategoryCards from '@/components/CategoryCards/CategoryCards';
import ColchonIdeal from '@/components/ColchonCategory/ColchonIdeal/ColchonIdeal';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import CategoryFAQ from '@/components/CategoryFAQ/CategoryFAQ';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import VideoComponent from '@/components/VideoComponent/VideoComponent';
import axios from 'axios';

export const ColchonCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const currentProductsRelated = useSelector(getCurrentProductsRelated)
  useEffect(() => {
    topPage()
    setRender(true)
    dispatch(onGetRelatedProducts("334"));
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
            title="colchones calm"
            textTitle="elegí el colchón perfecto para vos"
            items={products}
            installments={12}
          />
          {products.length > 2 && <ColchonIdeal colchonPrice={products[0].price} hibridoPrice={products[1].price}/>}
          <RelatedProducts relatedItems={currentProductsRelated} title="completá tu" boldTitle="descanso ideal" />
          <VideoComponent
          title=''
          boldTitle='unboxing calm'
          url='arxKSRvmk10'
          />
          <CategoryFAQ
            faqAccordion={faqAccordion}
            title=''
            boldTitle='preguntas frecuentes sobre colchones calm'
          />
        </main>
      }
    </>
  )
}

export default ColchonCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO("cll707xdo9t490aixofx71uie")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2023/06/ComparativaOriginal.webp",
    "width":2634,
    "height":1528,
    "caption":"Colch\u00f3n Calm Original"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/#webpage",
    "url":"https://calmessimple.com.ar/colchones/",
    "inLanguage":"es",
    "name":"Colchones Calm: Medidas y Tipos de Colch\u00f3n",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/#primaryimage"
    },
    "datePublished":"2022-09-19T20:16:08+00:00",
    "dateModified":"2023-07-25T19:53:17+00:00",
    "description":"Eleg\u00ed el colch\u00f3n ideal y hac\u00e9 que tu descanso sea \u00fanico. Colchones de 1 plaza, 2 plazas, plaza y media, queen, king y super king."
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "334;2067781;1835538;1835498"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}