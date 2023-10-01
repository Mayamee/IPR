import { DateTime } from "luxon";

export const ClockView = ({
  time,
  offset,
  title,
}: {
  time: number;
  title: string;
  offset: number;
}) => (
  <div className="clock-card">
    <h2>{title}</h2>
    <div>
      {DateTime.fromMillis(time)
        .setZone(`UTC${offset >= 0 ? "+" : ""}${offset}`)
        .toFormat("HH:mm:ss")}
    </div>
  </div>
);
