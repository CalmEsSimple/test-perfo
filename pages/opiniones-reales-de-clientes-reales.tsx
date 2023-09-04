import { useDispatch, useSelector } from "react-redux";
import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import Reviews from '../components/Reviews/Reviews'
import { IStore } from "@/state/types";
import { getCurrentProductsRelated} from "@/state/products/productsSelector";
import { onGetHomeRelatedProducts} from "@/state/products/productsActions";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

export const ClientReviews = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    topPage()
    setRender(true)
  }, [])
  const dispatch = useDispatch();
  const currentProductsRelated = useSelector((state: IStore) => getCurrentProductsRelated(state))

  useEffect(() => {
    dispatch(onGetHomeRelatedProducts());
  }, []);

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
            <Reviews/>
            <RelatedProducts relatedItems={currentProductsRelated} title="tu descanso" boldTitle="ideal" isYellowTitle />
        </main>
      }
    </>
  )
}

export default ClientReviews;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("clldv94aqc07i0ak4vykj8ytq")
 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/opiniones-reales-de-clientes-reales/#webpage",
    "url":"https://calmessimple.com.ar/opiniones-reales-de-clientes-reales/",
    "inLanguage":"es",
    "name":"Opiniones reales de clientes reales | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-20T20:42:23+00:00",
    "dateModified":"2022-09-08T18:30:11+00:00"
  }
  return { props: {landingSEO, graphWebPage} }
}