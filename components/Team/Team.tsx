import {
  DivTeam,
  DivTexto,
  Title,
  Text,
  DivIframe,
  Button,
  Video,
  DivButton,
} from "./TeamCss";

const Team = () => {
  return (
    <DivTeam>
      <DivIframe>
        <Video
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Cultura Calm 💛"
          width="640"
          src="https://www.youtube.com/embed/x2KIxQYrtsM?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcalmessimple.com.ar&amp;widgetid=1"
          id="widget2"
        ></Video>
      </DivIframe>
      <DivTexto>
        <Title>Nuestro principal valor es el equipo</Title>
        <Text>
          Queremos personas increíbles en Calm. El compromiso con nuestra misión
          requiere de un equipo de alto rendimiento que esté a la altura del
          desafío y trabajamos continuamente para mantenerlo en ese nivel.
        </Text>
        <DivButton>
          <Button href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/sumate"}>
            ¡Me quiero sumar!
          </Button>
        </DivButton>
      </DivTexto>
    </DivTeam>
  );
};

export default Team;
