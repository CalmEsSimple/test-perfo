import { StyledBanner, MarqueeContainer, MarqueeContent, Bullet  } from "./styled";
import { useState, useEffect } from "react";
import { IProps } from "./types";
import { getDateCountDown, getHeaderBanner } from "@/utils/hygraphHelper";
import { useQuery } from "@apollo/client";
import CountDown from "./CountDown/CountDown";
import parse from 'html-react-parser';

const HeadBanner = ({bannerId, promotionBanner, countDownId = 'clkv6elfy0jk20bk3gbgbgoap', isUpperBanner}: IProps) => {
    const {loading: loadingBanner, data: dataBanner} = useQuery(getHeaderBanner, { 
        variables: { id: bannerId }
    });

    const {loading: loadingCountDown, data: dataCountDown} = useQuery(getDateCountDown,{
        variables: {id: countDownId}
    });

    const [iniCountDownHygraph, setIniCountDownHygraph ] = useState();
    const [endPromotionHygraph, setEndPromotionHygraph ] = useState();

    useEffect(() => {
        if(!loadingBanner && !loadingCountDown) {
            setEndPromotionHygraph(dataCountDown.dateCountDown.endPromotion);
            setIniCountDownHygraph(dataCountDown.dateCountDown.iniCountDown);
        }
    } , [loadingBanner, loadingCountDown]);

    const initCountdown = new Date(`${iniCountDownHygraph}T00:00:00`);
    const endPromotion = endPromotionHygraph;
    const dateNow = new Date();

    const showCountDown = promotionBanner && initCountdown < dateNow && endPromotion && new Date(`${endPromotion}T00:00:00`) > dateNow;
    return (
        <StyledBanner style={loadingBanner ? {backgroundColor: "#eee"} : {backgroundColor:dataBanner.headBanner.backgroundColor.hex, color:dataBanner.headBanner.textColor.hex}}>
            <MarqueeContainer>
                {
                    isUpperBanner ?
                        <MarqueeContent>{!loadingBanner && dataBanner.headBanner.richText && parse(dataBanner.headBanner.richText.html)}</MarqueeContent> : 
                        <MarqueeContent>{loadingBanner ? "" : dataBanner.headBanner.text} { showCountDown && <><Bullet>●</Bullet> <CountDown endPromotion={endPromotion}/> </> }</MarqueeContent>
                }
            </MarqueeContainer>
        </StyledBanner>
    )
}
 
export default HeadBanner;