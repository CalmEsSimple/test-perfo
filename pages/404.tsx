import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import NotFoundComponent from '@/components/404/404-Component';

export const NotFoundLanding = ({landingSEO, graphImageObject, graphWebPage, faqAccordion}: ILanding) => {
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
          <NotFoundComponent isYellowTitle={true} isMobile={true}></NotFoundComponent>
        </main>
      }
    </>
  )
}

export default NotFoundLanding;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllzmqkcwf8lu0bit53ufzhcf")
  return { props: {landingSEO} }
}