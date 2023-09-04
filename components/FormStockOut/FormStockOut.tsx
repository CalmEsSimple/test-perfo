import MailChimpForm from "../Footer/components/MailChimp/Mailchimp";
import { FormStockOutContainer, Message } from "./styled";

interface IProps {
    tag: string
}

const FormStockOut = ({ tag }: IProps) => {

    return (
        <FormStockOutContainer>
            <Message>Ups, por ahora este producto está agotado. Dejanos tu mail acá y te avisamos apenas esté disponible.</Message>
            <MailChimpForm tag={tag} btnText='avisame' />
        </FormStockOutContainer>
    );

}

export default FormStockOut;