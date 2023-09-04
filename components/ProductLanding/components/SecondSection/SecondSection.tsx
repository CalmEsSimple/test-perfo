import type {} from 'redux-thunk/extend-redux';
import { LayoutGallery } from '../LayoutGallery/LayoutGallery';
import { NuggetsReview } from '../NuggetReview/NuggetReview';
import { 
    ActualProgressBar,
    ColumnWrapper,
    DescriptionAccordion,
    DescriptionColumn,
    DivAccordion,
    DivContainerAccordion,
    DivTextAccordion,
    DivTitleAccordion,
    Img,
    MobileImg,
    ProgressBarContent,
    ProgressBarText,
    ProgressBarWrapper,
    SectionSubitle,
    SectionTitle,
    Separator,
    SpecsContainer,
    TittleAccordion,
    SeparatorMobile,
    Wrapper
} from './styled';
import { LandingContent } from '../../styled';
import Accordion from '../../../../components/Accordion/Accordion';
import { IProps } from './types';
import parse from 'html-react-parser';
import { useEffect } from 'react';

const SecondSection = ({
    skus,
    isSquare,
    layoutImages,
    layoutImagesHaveVideo,
    accordionSpecsTexts,
    specsTexts,
    hasProgressBar
}: IProps) => {
    const IconIsActive = {
        LocalmQuestions: false,
        LocalmEmpathy: false,
        frequentQuestions: true
    };

    useEffect(() => {
        const isInViewport = (elem: HTMLElement) => {
            let elementTop = elem.offsetTop;
            let elementBottom = elementTop + elem.offsetHeight;
            let viewportTop = window.scrollY;
            let viewportBottom = viewportTop + window.innerHeight;
            return elementBottom > viewportTop && elementTop < viewportBottom;
        }

        let progress: HTMLElement | null = document.querySelector("#progress");
        if(progress) {
            let progressBar: HTMLElement | null = progress.querySelector("#progress-bar");
            window.addEventListener("scroll", () => {
                if (progress && isInViewport(progress) && progressBar) {
                    progressBar.style.width = "99%";
                    progressBar.style.transition = "width 1s";
                }
            });
        }
    }, [])

    return (
        <LandingContent>
            <Wrapper>
                {layoutImages && <LayoutGallery images={layoutImages} isSquare={isSquare} layoutImagesHaveVideo={layoutImagesHaveVideo} />}
                <DescriptionColumn>
                    <ColumnWrapper>
                        <NuggetsReview skus={skus} />
                        <DivAccordion>
                            <Accordion
                                DivContainerAccordion={DivContainerAccordion}
                                DivTitleAccordion={DivTitleAccordion}
                                DivTextAccordion={DivTextAccordion}
                                TittleAccordion={TittleAccordion}
                                DescriptionAccordion={DescriptionAccordion}
                                items={accordionSpecsTexts}
                                IconIsActive={IconIsActive}
                                firstBoxIsActive
                            />
                        </DivAccordion>
                        <SpecsContainer>
                            {specsTexts?.map((item, index) => (
                                <div key={index}>
                                    {item.mobileImg && <MobileImg src={item.mobileImg} />}
                                    <SectionTitle $hasProgressBar={hasProgressBar}>{item.title}</SectionTitle>
                                    <SectionSubitle $hasProgressBar={hasProgressBar}>{parse(item.subtitle)}</SectionSubitle>
                                    {hasProgressBar && (
                                        <>
                                            {index == 0 ? (
                                                <>
                                                    <ProgressBarWrapper id="progress">
                                                        <ActualProgressBar id="progress-bar" />
                                                        <ProgressBarContent>
                                                            <ProgressBarText>¿Cuántos eligen quedarse con su calm?</ProgressBarText>
                                                            <ProgressBarText>99%</ProgressBarText>
                                                        </ProgressBarContent>
                                                    </ProgressBarWrapper>
                                                </>
                                            ) : (
                                                <>
                                                    {index == specsTexts.length - 1 && (
                                                        <>
                                                            <Img src='https://calmessimple.com.ar/wp-content/uploads/2022/07/grafico-firmeza.png' />
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                    {index != specsTexts.length - 1 && (
                                        <Separator/>
                                    )}
                                    {
                                        !item.mobileImg && index != specsTexts.length - 1 && <SeparatorMobile/>
                                    }
                                </div>
                            ))}
                        </SpecsContainer>
                    </ColumnWrapper>
                </DescriptionColumn>
            </Wrapper>
        </LandingContent>
      );
}

export default SecondSection