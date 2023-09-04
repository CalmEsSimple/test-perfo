import { productURLRedirectionByURL } from "@/utils/productURLById";
import { DivTrials, Title, Button, DivInfo, Bold } from "./TrialCss";

const Trials = () => {
  return (
    <DivTrials>
      <DivInfo>
        <Title>
          Lo probás 30 noches en <br />
          tu casa,
          <Bold>
            no 5 minutos con <br />
            un vendedor al lado
          </Bold>
          .
        </Title>
        <Button
          href={productURLRedirectionByURL("334")}
          role="button"
        >
            <span>¡quiero probarlo!</span>
        </Button>
      </DivInfo>
    </DivTrials>
  );
};

export default Trials;
