import { DivIndications, Hr, Title } from "./InditacionCss";
import localms from "../../../jsons/address_localm.json"
import ItemDirection from "@/components/ItemDirection/ItemDirection";
const Indications = () => {
  return (
    <DivIndications>
      <Title>Nuestros locales</Title>
      {
        localms.map((localm, index) => (
          <>
            <ItemDirection key={localm.address} direction={localm.address} serviceHours={localm.hours} urlMap={localm.url} />

            {index % 2 === 0 ? <Hr /> : <></>}
          </>
        ))
      }
    </DivIndications >
  );
};

export default Indications;
