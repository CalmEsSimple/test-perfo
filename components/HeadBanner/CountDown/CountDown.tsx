import CountdownBanner from "@/components/CountDownBanner/CountDownBanner";
import { Container } from "./styles";

const Countdown = ({endPromotion} : {endPromotion?: Date} ) => {

  const Times = {
    days: 'd',
    minutes: 'm',
    seconds: 's',
    hours: 'h',
  };

  return (
    <CountdownBanner
      Container={Container}
      days={Times.days}
      minutes={Times.minutes}
      hours={Times.hours}
      seconds={Times.seconds}
      Time={endPromotion}
    />
  );
};

export default Countdown;