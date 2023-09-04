import { useEffect, useState } from "react";
import FooterDesktop from "./components/FooterDesktop";
import FooterMobile from "./components/FooterMobile";
import { StyledContainer } from "./styled";
import { deviceSizes } from "@/utils/Theme";
import { useWidth } from "@/hooks/useWidth";
import { useRouter } from "next/router";

const Footer = () => {
    const width = useWidth();
    const [showNavBar, setShowNavBar] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(router && !router.asPath.includes("pago")) {
            setShowNavBar(true)
        }
    }, [router.asPath])
    
    return (
        <>
            {showNavBar &&
                <StyledContainer>
                    {width < deviceSizes.mobile && <FooterMobile />}
                    {width > deviceSizes.mobile && <FooterDesktop />}
                </StyledContainer>
            }
        </>
    )
}

export default Footer;