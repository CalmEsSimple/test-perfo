import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryBase.json";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import CategoryCards from '@/components/CategoryCards/CategoryCards';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import DimensionsAndSpecs from '@/components/ProductLanding/components/DimensionsAndSpecs/DimensionsAndSpecs';
import landingContent from '@/utils/baseLandingContent.json'
import CategoryFAQ from '@/components/CategoryFAQ/CategoryFAQ';

export const BaseCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const currentProductsRelated = useSelector(getCurrentProductsRelated)
  useEffect(() => {
    topPage()
    setRender(true)
    dispatch(onGetRelatedProducts("339"));
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
        faqAccordion={faqAccordion.FrequentQuestions}
        showCalmRichSnippet
      />
      {render && 
        <main>
          <CategoryCards
            title="bases de cama calm"
            textTitle="la base perfecta para tu colchón"
            items={products}
            installments={12}
            splitCharacter=" - "
          />
          <RelatedProducts relatedItems={currentProductsRelated} title="completá tu" boldTitle="descanso ideal" />
          <DimensionsAndSpecs
            specsTitle="dimensiones de la "
            specsBoldTitle="base para tu colchón"
            imageUrl={landingContent["specsImages"]}
            specs={landingContent["specsValues"]}
          />
          <CategoryFAQ
            faqAccordion={faqAccordion.FrequentQuestions}
            title='preguntas'
            boldTitle='frecuentes'
          />
        </main>
      }
    </>
  )
}

export default BaseCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO("cll71hb0waxcg0aixlm0vb5ju")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/bases/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/B100.webp",
    "width":1080,
    "height":1080,
    "caption":"Base de cama Calm"
  }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/bases/#webpage",
    "url":"https://calmessimple.com.ar/bases/",
    "inLanguage":"es",
    "name":"Bases de cama Calm | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/bases/#primaryimage"
    },
    "datePublished":"2022-10-11T15:27:53+00:00",
    "dateModified":"2023-07-13T17:54:09+00:00"
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "172659;172660;342;343;172661;172662;1993790;1993793;1993791;1993792;1993794;1993795"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_variations_by_ids.php?ids=${ids}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}