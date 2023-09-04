import { IProps } from "./types";
import { useQuery } from "@apollo/client";
import parse from "html-react-parser";
import { getTermsAndConditions } from "@/utils/hygraphHelper";
import { DivTerms, TitleTerms, TitlesTerms, TextTerms } from "./styled";

const InformationTermsAndCondition = ({
  info = "cll5hckxxakdc0biygt8pq6kl",
}: IProps) => {
  const { loading, data } = useQuery(getTermsAndConditions, {
    variables: { id: info },
  });

  interface TextOffer {
    __typename: string;
    html: string;
  }

  return (
    <DivTerms>
      <TitleTerms>Términos y Condiciones</TitleTerms>
      <TextTerms>
        <p>
          Los presentes Términos y Condiciones rigen la relación entre usted (en
          adelante referido como “Usuario”) y SLEEP CALM SA (en adelante
          referido como “Calm”) con relación a los servicios y productos
          disponibles al Usuario a través del sitio web www.calmessimple.com.ar
          (en adelante referido como “Sitio Web”); a su vez, los presentes
          términos y condiciones regulan el uso del Sitio Web, del que Calm es
          propietario.
        </p>
      </TextTerms>
      {!loading ? (
        data.termsAndConditions.textOffer.map((text: TextOffer) => {
          var separator = text.html.split("</h4>", 2);
          const addBr = separator[1].replace(/<p><\/p>/g, "<br>");

          return (
            <div key={separator[0]}>
              <TitlesTerms>{parse(separator[0])}</TitlesTerms>
              <TextTerms>{parse(addBr)}</TextTerms>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </DivTerms>
  );
};

export default InformationTermsAndCondition;
