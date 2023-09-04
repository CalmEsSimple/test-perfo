import { GetStaticProps } from 'next'
import SEO from '../components/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import LandingImage from '@/components/LandingImage/LandingImage';
import Directions from '@/components/Directions/Directions';
import Experience from '@/components/ExperienceLocalm/Experience/Experience';
import Questions from '@/components/Questions/Questions';
import Sleep from '@/components/Sleep/Sleep';
import faqQuestions from "../jsons/FrequentQuestions/Localm.json";
import SleepTest from '@/components/SleepTest/SleepTest'
import VideoComponent from '@/components/VideoComponent/VideoComponent';


export const LocalmPage = ({ landingSEO, graphImageObject, graphWebPage, faqAccordion }: ILanding) => {
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
                faqAccordion={faqAccordion}
                showCalmRichSnippet
            />
            {render &&
                <main>
                    <LandingImage />
                    <Directions />
                    <SleepTest/>
                    <Experience/>
                    <VideoComponent
                    title="conocé nuestro"
                    boldTitle='localm'
                    url='https://calmessimple.com.ar/wp-content/uploads/2023/06/Final-Ad-Horizontal.mp4'
                    isMp4
                    hasAutoPlay
                    hasMuted
                    hasLoop
                    />
                    <Questions/>
                    <Sleep />
                </main>
            }
        </>
    )
}

export default LocalmPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
    const landingSEO = await getLandingSEO("cll5ndpm0h8m90biypvr13stw")
    const graphImageObject = {
        "@type": "ImageObject",
        "@id": "https://calmessimple.com.ar/localm/#primaryimage",
        "url": "https://calmessimple.com.ar/wp-content/uploads/2022/09/portada_localm-1.webp",
        "width": 2592,
        "height": 1076
    }
    const graphWebPage = {
        "@type": "WebPage",
        "@id": "https://calmessimple.com.ar/localm/#webpage",
        "url": "https://calmessimple.com.ar/localm/",
        "inLanguage": "es",
        "name": "localm | Calm",
        "isPartOf": {
            "@id": "https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage": {
            "@id": "https://calmessimple.com.ar/localm/#primaryimage"
        },
        "datePublished": "2022-08-24T20:27:50+00:00",
        "dateModified": "2023-08-07T16:27:45+00:00"
    }
    return { props: { landingSEO, graphImageObject, graphWebPage, faqAccordion: faqQuestions } }
}