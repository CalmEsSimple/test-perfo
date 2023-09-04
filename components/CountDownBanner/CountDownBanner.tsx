import { useEffect, useState } from "react";
import { IStyledComponent } from "styled-components";
import parse from 'html-react-parser';

interface IProps {
    Container: IStyledComponent<"web", any>
    Time?: Date
    days: string
    hours: string
    seconds: string
    minutes: string
}

const CountdownBanner = ({
  Container,
  Time,
  days,
  hours,
  seconds,
  minutes,
}: IProps) => {
  const targetDate = new Date(`${Time}T23:59:59`);

  useEffect(() => {
    const timerID = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDate.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours % 24).padStart(2, "0"),
      minutes: String(minutes % 60).padStart(2, "0"),
      seconds: String(seconds % 60).padStart(2, "0"),
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  return (
    <Container>
        {remainingTime.days != 0 && parse(`termina en <span>${remainingTime.days}</span>${days}  <span>${remainingTime.hours}</span>${hours}  <span>${remainingTime.minutes}</span>${minutes}  <span>${remainingTime.seconds}</span>${seconds}`)}

        {remainingTime.days == 0 && parse(`termina en <span>${remainingTime.hours}</span>${hours}  <span>${remainingTime.minutes}</span>${minutes}  <span>${remainingTime.seconds}</span>${seconds}`)}
    </Container>
  );
};

export default CountdownBanner;