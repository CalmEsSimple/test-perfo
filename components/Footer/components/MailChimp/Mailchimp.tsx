import { useState, useEffect } from 'react';
import { ArrowIcon, ErrorText, SuscribeButton, SuscribeForm, SuscribeInput, ThankMsg } from '../NewsLetter/styled';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@/state/types';
import { onAddEmailToNewsletterFailed, onAddEmailMailchimp, onSubscribeStockoutFailed, onCleanErrorsNewsletter, onCleanErrorsStockout } from '@/state/mailchimp/mailchimpActions';
import { getNewsLetterResponse, getSubscribeStockoutResponse } from '@/state/mailchimp/mailchimpSelector';
import { isValidEmail } from '@/utils/emailValidator';
import { IProps } from './types';
import { getLoadingNewsletter, getLoadingSubscribeStockout } from '@/state/loading/loadingSelector';

const MailChimpForm = ({ tag, btnText }: IProps) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const loadingSubsStockout = useSelector((state: IStore) => getLoadingSubscribeStockout(state));
    const loadingNewsletter = useSelector((state: IStore) => getLoadingNewsletter(state));
    const newsletter = useSelector((state: IStore) => getNewsLetterResponse(state))
    const subscribe = useSelector((state: IStore) => getSubscribeStockoutResponse(state))
    const [mailchimpReq, setMailchimpReq] = useState(tag === 'footer' ? newsletter : subscribe)
    const [loadingMailchimp, setLoadingMailchimp] = useState(tag === 'footer' ? loadingNewsletter : loadingSubsStockout)


    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isValidEmail(email)) {

            setMailchimpReq(tag === 'footer' ? newsletter : subscribe)
            setLoadingMailchimp(tag === 'footer' ? loadingNewsletter : loadingSubsStockout)

            dispatch(onAddEmailMailchimp(email, tag))
        } else {
            if (tag === 'footer') {
                dispatch(onAddEmailToNewsletterFailed({ error: "Formato de mail incorrecto" }))
            } else {
                dispatch(onSubscribeStockoutFailed({ error: "Formato de mail incorrecto" }))
            }
        }
    };

    useEffect(() => {
        if (tag === 'footer') {
            dispatch(onCleanErrorsNewsletter())
        } else {
            dispatch(onCleanErrorsStockout())
        }
    }, [email])

    useEffect(() => {
        setLoadingMailchimp(tag === 'footer' ? loadingNewsletter : loadingSubsStockout)
    }, [loadingNewsletter, loadingSubsStockout])

    useEffect(() => {
        setMailchimpReq(tag === 'footer' ? newsletter : subscribe)
    }, [newsletter, subscribe])

    const showContentBtn = () => {
        return btnText ?? (
            < ArrowIcon
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a26881a3-9194-484e-491f-642e0818ac00/fit=scale-down"
                alt="flecha"
            />
        )
    }

    return (
        <div>
            {
                mailchimpReq.response && mailchimpReq.response.message == "success" ? (
                    <ThankMsg $center={tag !== 'footer'}>¡Gracias por suscribirte!</ThankMsg>
                ) : (
                    <SuscribeForm>
                        <SuscribeInput
                            type="email"
                            name="EMAIL"
                            placeholder="Tu correo electrónico"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            with_border={btnText}
                            required
                            disabled={loadingMailchimp}
                        />
                        <SuscribeButton with_border={btnText} onClick={handleSubmit} disabled={loadingMailchimp}>
                            {
                                loadingMailchimp ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="xMidYMid"
                                    >
                                        <circle cx="50" cy="50" fill="none" stroke="#ffd500" strokeWidth="10" r="24" strokeDasharray="113.09733552923255 39.69911184307752">
                                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.8695652173913042s" values="0 50 50;360 50 50" keyTimes="0;1" />
                                        </circle>
                                    </svg>

                                ) : (
                                    showContentBtn()
                                )
                            }
                        </SuscribeButton>
                    </SuscribeForm>
                )
            }
            {
                mailchimpReq.error && <ErrorText>{!mailchimpReq.errorMessage
                    ? "Hubo un error"
                    : mailchimpReq.errorMessage.toLowerCase().includes("exist")
                        ? "Tu email ya estaba suscripto!"
                        : mailchimpReq.errorMessage.toLowerCase().includes("formato")
                            ? mailchimpReq.errorMessage
                            : "Hubo un error"}</ErrorText>}
        </div >
    );
};

export default MailChimpForm;