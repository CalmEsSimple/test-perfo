import {
  // Iframe, 
  DivMap, ImageMap
} from "./MapCss";

const MapLocalm = () => {
  return (
    <DivMap>
      {/* <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.649274454514!2d-58.433231000000006!3d-34.58741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5894b293057%3A0x43bddfc00f065dbe!2sGodoy%20Cruz%201737%2C%20C1414CYK%20CABA%2C%20Argentina!5e0!3m2!1ses!2sus!4v1686869686908!5m2!1ses!2sus"></Iframe> */}
      <ImageMap src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/eff53fb4-1eda-4bfb-6999-173d60d1a800/fit=crop" />
    </DivMap>
  );
};

export default MapLocalm;
