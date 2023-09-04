import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import AboutUsLanding from '@/components/AboutUsLanding/AboutUsLanding';
import Industry from '@/components/Industry/Industry';
import Wellbeing from '@/components/Wellbeing/Wellbeing';
import Team from '@/components/Team/Team';
import Experience from '@/components/Experience/Experience';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import { useDispatch, useSelector } from 'react-redux';
import { onGetHomeRelatedProducts } from '@/state/products/productsActions';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import { IStore } from '@/state/types';

export const AboutUs = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const dispatch = useDispatch();
  const [render, setRender] = useState(false)
  const currentProductsRelated = useSelector((store: IStore) => getCurrentProductsRelated(store))
  
  useEffect(() => {
    topPage()
    setRender(true)
    dispatch(onGetHomeRelatedProducts());
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
          <AboutUsLanding />
          <Industry />
          <Wellbeing />
          <Team />
          <Experience />
          <RelatedProducts relatedItems={currentProductsRelated} title="tu descanso" boldTitle="ideal" isYellowTitle/>
        </main>
      }
    </>
  )
}

export default AboutUs;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cll1e2jqsjo730aip3y2erk1x")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/quienes-somos/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2021/10/ImagenHistoria.jpg",
    "width":1280,
    "height":878,
    "caption":"el equipo de calm"
}
 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/quienes-somos/#webpage",
    "url":"https://calmessimple.com.ar/quienes-somos/",
    "inLanguage":"es",
    "name":"quienes somos | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/quienes-somos/#primaryimage"
    },
    "datePublished":"2019-11-01T04:16:01+00:00",
    "dateModified":"2023-07-13T17:50:11+00:00"
 }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}