import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { getLandingSEO } from "@/utils/hygraphHelper";
import SEO from "../components/SEO/SEO";
import { ILanding } from "@/types";
import { topPage } from "@/utils/topPage";
import InformationTyCPromos from "../components/InformationTyCPromos/InformationTyCPromos";

export const TermsAndConditionPromotions = ({
  landingSEO,
  graphImageObject,
  graphWebPage,
}: ILanding) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    topPage();
    setRender(true);
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
      {render && (
        <main>
          <InformationTyCPromos />
        </main>
      )}
    </>
  );
};

export default TermsAndConditionPromotions;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO("cllzi81dva59u0bitlznuyu3y");
  const graphWebPage = {
    "@type": "WebPage",
    "@id":
      "https://calmessimple.com.ar/terminos-y-condiciones-de-promociones/#webpage",
    url: "https://calmessimple.com.ar/terminos-y-condiciones-de-promociones/",
    inLanguage: "es",
    name: "terminos y condiciones de promociones | Calm",
    isPartOf: {
      "@id": "https://calmessimple.com.ar/#website",
    },
    datePublished: "2020-04-03T19:45:10+00:00",
    // dateModified: "2023-08-07T19:32:54+00:00",
    dateModified: "2023-08-11T00:56:03+00:00",
  };
  return { props: { landingSEO, graphWebPage } };
};
