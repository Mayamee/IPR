import { ClockLogic } from "./ClockLogic";
import { ClockView } from "./ClockView";
import { cities } from "../../../constants/cities";

export const ClockWidget = () => {
  return (
    <>
      <div className="clock-wrapper">
        <ClockLogic updateInterval={2000}>
          {(time) => (
            <>
              {cities.map(({ title, utcOffset }) => (
                <ClockView
                  key={title}
                  time={time}
                  title={title}
                  offset={utcOffset}
                />
              ))}
            </>
          )}
        </ClockLogic>
      </div>
      <div className="clock-wrapper">
        <ClockLogic updateInterval={1000}>
          {(time) => (
            <>
              {cities.map(({ title, utcOffset }) => (
                <ClockView
                  key={title}
                  time={time}
                  title={title}
                  offset={utcOffset}
                />
              ))}
            </>
          )}
        </ClockLogic>
      </div>
    </>
  );
};
