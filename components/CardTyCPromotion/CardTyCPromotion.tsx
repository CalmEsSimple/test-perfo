import { useQuery } from "@apollo/client";
import { IProps } from "./types";
import { getTyCPromotion } from "@/utils/hygraphHelper";
import { useEffect } from "react"

const CardTyCPromotion = ({ id }: IProps) => {

  //Consulta Hygraph
  const { loading, data } = useQuery(getTyCPromotion, {
    variables: { id: id },
  });

  useEffect(() => {
    if(!loading) {
      const content = data.tyCPromotion.promotion.html.split("</h3>", 2);
      //Title Card
      const title = content[0] + "</h3>";
      //Text Card
      const text = content[1].replace(/<p><\/p>/g, "<br>");
      //Se debe mostrar segun prop show
      const show = data.tyCPromotion.show
    }
  }, [data])



  return (
    <>
    </>
  );
};

export default CardTyCPromotion;
