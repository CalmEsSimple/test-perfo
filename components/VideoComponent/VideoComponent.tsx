import { DivVideoComponent, Title, Video, Bold, Iframe } from "./styled";
import { IProps } from "./types";

const VideoComponent = ({title, boldTitle, url, isMp4, hasAutoPlay, hasLoop, hasMuted}: IProps) => {
  return (
    <DivVideoComponent>
      <Title>
        {title} <Bold>{boldTitle}</Bold>
      </Title>
      {
        isMp4 ? (
          <Video
          src={url}
          autoPlay={hasAutoPlay}
          loop={hasLoop}
          muted={hasMuted}
          controlsList="nodownload"
        ></Video>
        ) : (
          <Iframe
            src={`https://www.youtube.com/embed/${url}`}
        ></Iframe>
        )
      }

    </DivVideoComponent>
  );
};

export default VideoComponent;
