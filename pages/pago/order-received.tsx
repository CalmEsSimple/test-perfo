import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { topPage } from '@/utils/topPage';
import { onGetOrder } from '@/state/order/orderActions';
import SEO from '@/components/SEO/SEO';

export const OrderReceived = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const dispatch = useDispatch();
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
        showCalmRichSnippet
      />
      {render &&
        <main>
          <button onClick={() => dispatch(onGetOrder("2101991", "wc_order_KMmTbEPxNQsIf"))}>GET ORDER</button>
        </main>
      }
    </>
  )
}

export default OrderReceived;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllqtif8ps7oq0bkarzlwqsk7")

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/pago/#webpage",
    "url":"https://calmessimple.com.ar/pago/",
    "inLanguage":"es",
    "name":"Pago | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-10-19T13:39:12+00:00",
    "dateModified":"2019-10-25T21:48:50+00:00"
  }
  return { props: {landingSEO, graphWebPage} }
}