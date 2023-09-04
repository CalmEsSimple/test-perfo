import Script from "next/script";
import { IProps } from "./types";
import Head from 'next/head'
import { useEffect, useState } from "react";

const SEO = ({title, description, imageSrc, url, graphImageObject, graphWebPage, faqAccordion, showCalmRichSnippet, productReviewsSKUs}: IProps) => {
   const [graph, setGraph] = useState<any[]>([])

   useEffect(() => {
      let aux = [
         {
            "@type": "Organization",
            "@id": "https://calmessimple.com.ar/#organization",
            "name": "Calm es simple",
            "url": "https://calmessimple.com.ar/",
            "sameAs": [
               "https://www.facebook.com/Calm-es-simple-103322771084627",
               "https://www.instagram.com/calm.es.simple/",
               "https://www.linkedin.com/company/30576424",
               "https://www.youtube.com/channel/UC9RPfhjV0tWj_p2CLDZLzhg"
            ],
            "logo": {
               "@type": "ImageObject",
               "@id": "https://calmessimple.com.ar/#logo",
               "url": "https://calmessimple.com.ar/wp-content/uploads/2019/11/Pag-1-calm-entero.png",
               "width": 1275,
               "height": 709,
               "caption": "Calm es simple"
            },
            "image": {
               "@id": "https://calmessimple.com.ar/#logo"
            }
         },
         {
            "@type": "WebSite",
            "@id": "https://calmessimple.com.ar/#website",
            "url": "https://calmessimple.com.ar/",
            "name": "Calm",
            "description": "es simple",
            "publisher": {
               "@id": "https://calmessimple.com.ar/#organization"
            },
            "potentialAction": {
               "@type": "SearchAction",
               "target": "https://calmessimple.com.ar/?s={search_term_string}",
               "query-input": "required name=search_term_string"
            }
         }
      ]
      if (graphImageObject) {
         aux = (aux as any[]).concat(graphImageObject)
      }
      if (graphWebPage) {
         aux = (aux as any[]).concat(graphWebPage)
      }
      setGraph(aux)
   }, [])

  return (
   <>
      {productReviewsSKUs && 
         <>
            <Script
               src="https://widget.reviews.io/rich-snippet/dist.js"
               onLoad={() => {
                  const script = document.createElement("script");
                  script.innerHTML = `richSnippet({store: 'calmessimple.com.ar',sku: '${productReviewsSKUs}'});`;
                  document.head.appendChild(script);
               }}
            />
         </>
      }

      {showCalmRichSnippet && 
         <Script
            src="https://widget.reviews.co.uk/rich-snippet/dist.js?ver=5.3.15"
            onLoad={() => {
               const script = document.createElement("script");
               script.innerHTML = `richSnippet({store: "calmessimple.com.ar"})`
               document.head.appendChild(script);
            }}
         />
      }

      <Head>
         <title>{title}</title>
         <meta name="description" content={description} />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta property="og:title" content={title} />
         <meta name='og:description' content={description} />
         <meta property="og:url" content={`https://calmessimple.com.ar${url}`} />

         <meta property="og:image" content={imageSrc} />
         <meta property="og:image:secure_url" content={imageSrc} />

         <meta property="twitter:card" content="summary_large_image" />
         <meta property="twitter:url" content={`https://calmessimple.com.ar${url}`} />
         <meta property="twitter:title" content={title} />
         <meta property="twitter:description" content={description} />
         <meta name="twitter:image" content={imageSrc} />

         {process.env.NODE_ENV != "development" &&
            <>
               <link rel="preload" href="https://astounding-fudge-d98f38.netlify.app/_next/static/css/ae4ed9c503fd1e33.css" as="style"></link>
               <link rel="stylesheet" href="https://astounding-fudge-d98f38.netlify.app/_next/static/css/ae4ed9c503fd1e33.css" data-n-g=""></link>
               <link rel="preload" href="https://astounding-fudge-d98f38.netlify.app/_next/static/media/Gilroy-ExtraBold.2cc226be.ttf" as="font" type="font/ttf" data-next-font="size-adjust" />
               <link rel="preload" href="https://astounding-fudge-d98f38.netlify.app/_next/static/media/Gilroy-Medium.e018f97c.ttf" as="font" type="font/ttf" data-next-font="size-adjust" />
               <link rel="preload" href="https://astounding-fudge-d98f38.netlify.app/_next/static/media/Gilroy-Bold.ea58f09d.ttf" as="font" type="font/ttf" data-next-font="size-adjust" />
               <link rel="preload" href="https://astounding-fudge-d98f38.netlify.app/_next/static/media/Gilroy-Regular.670696e4.ttf" as="font" type="font/ttf" data-next-font="size-adjust" />
               <link rel="preload" href="https://astounding-fudge-d98f38.netlify.app/_next/static/media/Gilroy-Light.feb2c15a.ttf" as="font" type="font/ttf" data-next-font="size-adjust" />
            </>
         }

         <script type="application/ld+json">
            {JSON.stringify({
               "@context": "http://schema.org",
               "@type": "WebPage",
               "publisher": {
                  "@type": "Organization",
                  "image": "https://calmessimple.com.ar/wp-content/uploads/2019/11/Pag-1-calm-entero.png",
                  "name": "Calm es simple",
                  "telephone": "+5491133206076",
                  "address": "Godoy Cruz 1737, C1414 CABA"
               }
            })}
         </script>

         <script type="application/ld+json">
            {JSON.stringify({
               "@context": "https://schema.org",
               "@graph": graph
            })}
         </script>

         {faqAccordion && (
            <script type="application/ld+json">
               {JSON.stringify({
                  "@context": "https:\/\/schema.org",
                  "@type": "FAQPage",
                  "mainEntity": faqAccordion.map(item => {
                     return {
                        "@type": "Question",
                        "name": item.title,
                        "acceptedAnswer": {
                           "@type": "Answer",
                           "text": item.answer
                        }
                     }
                  })
               })}
            </script>
         )}
      </Head>
      </>
   );
};

export default SEO;