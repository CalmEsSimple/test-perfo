import {
    Title,
    Description,
    ImgContainer, Bold, ImageOverlay
} from "./styled";

const LandingImage = () => {
    return (
        <ImgContainer>
            <ImageOverlay />
            <div>
                <Title>Localm.</Title>
                <Description>vení a visitarnos y llevate<br />
                    <Bold> el mejor descanso</Bold>
                </Description>
            </div>
        </ImgContainer>
    );
};

export default LandingImage;
