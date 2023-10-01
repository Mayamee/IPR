import { ReactElement } from "react";
import { useClock } from "./useClock";

export const ClockLogic = ({
  children,
  updateInterval,
}: {
  children: (time: number) => ReactElement;
  updateInterval?: number;
}) => {
  const time = useClock(updateInterval);

  return <>{children(time)}</>;
};
