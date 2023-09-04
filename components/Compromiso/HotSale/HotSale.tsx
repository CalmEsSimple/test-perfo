import {
  DivHotSale,
  DivTexto,
  Title,
  Text,
  DivIframe,
  Video,
} from "./HotSaleCss";

const HotSale = () => {
  return (
    <DivHotSale>
      <DivTexto>
        <Title>Hot Sale Solidario</Title>
        <Text>
          En nuestro último Hot Sale nos unimos a Techo Argentina y a Cruz del
          Sur para ofrecer una propuesta solidaria.
          <br />
          <br />
          240 personas donaron su ex colchón para que más familias tengan un
          lugar donde descansar.
        </Text>
      </DivTexto>
      <DivIframe>
        <Video
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Compromiso Descansadxs - Hot Sale 2021"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/P5QaFyfjDO0?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcalmessimple.com.ar&amp;widgetid=1"
          data-gtm-yt-inspected-11="true"
        ></Video>
      </DivIframe>
    </DivHotSale>
  );
};

export default HotSale;
