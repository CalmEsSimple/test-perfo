import { ContainerContact, ContainerBoxContact, ImgContact, LinkContact } from "../404-Css";

function LinksContactNotFound() {
  return (
    <ContainerContact>
      <ContainerBoxContact>
        <ImgContact src="https://calmessimple.com.ar/wp-content/uploads/2021/04/mail.svg"></ImgContact>
        <LinkContact href="mailto:hola@calmessimple.com.ar">Escribinos</LinkContact>
        <LinkContact href="mailto:hola@calmessimple.com.ar">hola@calmessimple.com.ar</LinkContact>
      </ContainerBoxContact>
      <ContainerBoxContact>
        <ImgContact src="https://calmessimple.com.ar/wp-content/uploads/2021/04/telefono.svg"></ImgContact>
        <LinkContact  href="tel:+5491151714371">Llámanos</LinkContact>
        <LinkContact   href="tel:+5491151714371">+54 9 1151714371</LinkContact>
      </ContainerBoxContact>
    </ContainerContact>
  );
}

export default LinksContactNotFound;
