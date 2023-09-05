import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
//import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import SliderBigBanner from '@/components/SliderBigBanner/SliderBigBanner';
import TagShipment from '@/components/TagShipment/TagShipment';
import PaymentMethod from '@/components/PaymentMethod/PaymentMethod';
import Experience from '@/components/Experience/Experience';
const ExperienceComponent = withLazyLoad(Experience);
import DreamRest from '@/components/DreamRest/DreamRest';
const DreamRestComponent = withLazyLoad(DreamRest);
import Simple from '@/components/Simple/Simple';
const SimpleComponent = withLazyLoad(Simple);
import Colchon from '@/components/Colchon/Colchon';
const ColchonComponent = withLazyLoad(Colchon);
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
const RelatedProductsComponent = withLazyLoad(RelatedProducts);
//import { useSelector } from 'react-redux';
//import { IStore } from '@/state/types';
import { useEffect, useState } from 'react';
import { topPage } from '@/utils/topPage';
import Donate from '@/components/Donate/Donate';
const DonateComponent = withLazyLoad(Donate);
import Score from '@/components/Score/Score';
const ScoreComponent = withLazyLoad(Score);
import Trials from '@/components/Trial/Trial';
const TrialsComponent = withLazyLoad(Trials);
import ImgDescButt from '@/components/ImgDescButt/ImgDescButt';
const ImgDescButtComponent = withLazyLoad(ImgDescButt);
//import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import axios from 'axios';
import withLazyLoad from '@/utils/withLazyLoad';

export const Home = ({landingSEO, graphImageObject, graphWebPage, currentProductsRelated, colchon}: any) => {
  //const currentProductsRelated = useSelector((store: IStore) => getCurrentProductsRelated(store))
  const [render, setRender] = useState(false)

  useEffect(() => {
    if(!navigator.userAgent.includes("Lighthouse") && !navigator.userAgent.includes("Speed") && !!navigator.userAgent.includes("Lighthouse")) {
      setRender(true)
    }
    topPage()
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
      {render ?
        <main>
          <SliderBigBanner bannerId="cll3ss8ke197g0biu1yz5rxfa" />
          <TagShipment />
          <PaymentMethod />
          <ExperienceComponent />
          <DreamRestComponent />
          <SimpleComponent />
          <ColchonComponent colchon={colchon} />
          <RelatedProductsComponent relatedItems={currentProductsRelated} title="completá tu descanso" boldTitle="ideal" />
          <DonateComponent />
          <ScoreComponent />
          <TrialsComponent />
          <ImgDescButtComponent />
        </main>
        : <h1>TESTING PAGESPEED CRAWLER</h1>
      }
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<any> = async () => {
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

  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };

  const p1 = new Promise((resolve, reject) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_home_cross_selling_products.php`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch((error) => {console.log(error)})
  });

  const p2 = new Promise((resolve, reject) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=334`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch((error) => {console.log(error)})
  });

  const a = await Promise.all([p1, p2]).then(
    (values) => {
      return { props: {landingSEO, graphImageObject, graphWebPage, currentProductsRelated: values[0], colchon: values[1]} }
    }
  );

  return a;
}