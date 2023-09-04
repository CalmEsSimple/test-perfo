import MailChimpForm from "../MailChimp/Mailchimp";
import {
    StyledContainer,
    FooterNewsletterTitle,
    Socials,
    SocialDiv,
    IconHolder,
    ChildrenIconHolder,
    ImgIcon,
    SocialIcon,
    SuscribeForm,
    SuscribeInput,
    SuscribeButton,
    ArrowIcon,
} from "./styled";

const Newsletter = () => {
    return (
        <StyledContainer>
            <FooterNewsletterTitle> suscribite al newsletter</FooterNewsletterTitle>
            <MailChimpForm tag="footer" />
            <Socials>
                <SocialDiv>
                    <a href='https://www.instagram.com/calm.es.simple/' target='_blank' rel='noreferrer'>
                        <SocialIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/0be970af-f08c-4c5d-5347-bc8cae372c00/thumbnail" alt="instagram" />
                    </a>
                </SocialDiv>
                <SocialDiv>
                    <a href='https://www.facebook.com/Calm-es-simple-103322771084627' target='_blank' rel='noreferrer'>
                        <SocialIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e6a00f04-32d7-46b5-1b6a-e411a75c9800/thumbnail" alt="facebook" />
                    </a>
                </SocialDiv>
                <SocialDiv>
                    <a href='https://www.youtube.com/channel/UCm0coGiJraahBGxuxycDb0g' target='_blank' rel='noreferrer'>
                        <SocialIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/cd34494d-a759-4ad0-2e31-0635dcfb7d00/thumbnail" alt="youtube" />
                    </a>
                </SocialDiv>
                <SocialDiv>
                    {/* <IconContext.Provider value={{ color: "white"}}> */}
                    <a href='https://www.tiktok.com/@calm.es.simple' target='_blank' rel='noreferrer'>
                        <SocialIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/75d0c56c-d4db-4c58-d4d5-3326530d2600/thumbnail" alt="tiktok" />
                    </a>
                    {/* </IconContext.Provider> */}
                </SocialDiv>
                <SocialDiv>
                    <a href='https://twitter.com/calm_essimple' target='_blank' rel='noreferrer'>
                        <SocialIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/be0af3de-6a35-4a7b-dd8a-c843888c6d00/thumbnail" alt="twitter" />
                    </a>
                </SocialDiv>
                <SocialDiv>
                    <a href='https://www.linkedin.com/company/calmessimple/' target='_blank' rel='noreferrer'>
                        <SocialIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8a4a9a61-67bf-4ce0-52dd-1dc252319a00/thumbnail" alt="linkedin" />
                    </a>
                </SocialDiv>
            </Socials>
            <IconHolder>
                <ChildrenIconHolder>
                    <a href="https://www.visa.com.ar/" target='_blank' rel='noreferrer'>
                        <ImgIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/dbc9b721-698c-4b34-09ee-98a4a3428100/thumbnail" alt='visa' />
                    </a>
                </ChildrenIconHolder>
                <ChildrenIconHolder>
                    <a href="https://www.mastercard.com.ar/es-ar.html" target='_blank' rel='noreferrer'>
                        <ImgIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/7324a890-399e-4b54-e35f-0813efae1700/thumbnail" alt='mastercard' />
                    </a>
                </ChildrenIconHolder>
                <ChildrenIconHolder>
                    <a href="https://www.americanexpress.com/es-ar/" target='_blank' rel='noreferrer'>
                        <ImgIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2f2c7973-6afc-460e-bf86-4cf2bd5f3300/thumbnail" alt='american-express' />
                    </a>
                </ChildrenIconHolder>
                <ChildrenIconHolder>
                    <a href="https://www.wibond.com.ar/" target='_blank' rel='noreferrer'>
                        <ImgIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a6089b3b-d35c-4b9c-b69b-a6944b9a6a00/thumbnail" alt='wibond' />
                    </a>
                </ChildrenIconHolder>
                <ChildrenIconHolder>
                    <a href="https://www.afip.gob.ar/landing/default.asp" target='_blank' rel='noreferrer'>
                        <ImgIcon src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/84d9829f-9190-4df2-f047-e692e64f3400/thumbnail" alt='data-fiscal' />
                    </a>
                </ChildrenIconHolder>
            </IconHolder>
        </StyledContainer>
    );
}

export default Newsletter;