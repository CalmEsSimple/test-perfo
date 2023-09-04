import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import SliderBigBanner from '@/components/SliderBigBanner/SliderBigBanner';
import TagShipment from '@/components/TagShipment/TagShipment';
import PaymentMethod from '@/components/PaymentMethod/PaymentMethod';
import Experience from '@/components/Experience/Experience';
import DreamRest from '@/components/DreamRest/DreamRest';
import Simple from '@/components/Simple/Simple';
import Colchon from '@/components/Colchon/Colchon';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@/state/types';
import { useEffect, useState } from 'react';
import { topPage } from '@/utils/topPage';
import { onGetHomeRelatedProducts } from '@/state/products/productsActions';
import Donate from '@/components/Donate/Donate';
import Trials from '@/components/Trial/Trial';
import ImgDescButt from '@/components/ImgDescButt/ImgDescButt';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';

export const Home = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const dispatch = useDispatch();
  const currentProductsRelated = useSelector((store: IStore) => getCurrentProductsRelated(store))
  const [render, setRender] = useState(false)

  useEffect(() => {
    topPage()
    dispatch(onGetHomeRelatedProducts())
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
        productReviewsSKUs='C140'
      />
      {render &&
        <main>
          <SliderBigBanner bannerId="cll3ss8ke197g0biu1yz5rxfa" />
          <TagShipment />
          <PaymentMethod />
          <Experience />
          <DreamRest />
          <Simple />
          <Colchon />
          <RelatedProducts relatedItems={currentProductsRelated} title="completá tu descanso" boldTitle="ideal" />
          <Donate />
          <Trials />
          <ImgDescButt />
        </main>
      }
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("clklkyvx3900h0bka5jwd0qtj")

  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/11/Colch\u00f3nPlusTwitter.png",
    "width":1500,
    "height":1000,
    "caption":"colchon calm"
 }
 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/#webpage",
    "url":"https://calmessimple.com.ar/",
    "inLanguage":"es",
    "name":"Calm: El Colchon Perfecto para Todxs | Probalo 30 noches en casa",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "about":{
      "@id":"https://calmessimple.com.ar/#organization"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/#primaryimage"
    },
    "datePublished":"2019-10-22T11:34:46+00:00",
    "dateModified":"2023-07-24T23:37:43+00:00",
    "description":"Compr\u00e1 online colchones y todo lo que necesitas para descansar bien. Env\u00edo gratis  &#x1F6FB; Hasta 12 cuotas sin inter\u00e9s &#x1F4B3; El mejor puntuado &#x2B50;"
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}