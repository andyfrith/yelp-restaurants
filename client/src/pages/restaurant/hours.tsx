import React from "react";
import { useStyletron } from "baseui";
import { Table } from "baseui/table";
import { Label1, Label2, Label3, LabelSmall } from "baseui/typography";

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Th";
weekday[5] = "Fri";
weekday[6] = "Sat";

interface Hours {
  day: string;
  end: string;
  start: string;
}

interface Props {
  formatted_address: string;
  hours: Hours[];
}

export const Hours: React.FC<Props> = ({ formatted_address, hours }) => {
  const [css, theme] = useStyletron();

  const hoursLine = (item: { day: string; end: string; start: string }) => {
    return (
      <div
        key={item.day}
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            display: "flex",
            width: "75px",
          })}
        >
          <Label2>{weekday[Number(item.day)]}</Label2>
        </div>
        <div
          className={css({
            display: "flex",
          })}
        >
          <Label3>
            {item.start} - {item.end}
          </Label3>
        </div>
      </div>
    );
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        color: theme.colors.accent700,
        padding: "1em 0 1em 0",
      })}
    >
      <Label1 marginBottom="1em">Location & Hours</Label1>
      <Label3 marginBottom="2em">{formatted_address}</Label3>
      {hours.map((item) => hoursLine(item))}
    </div>
  );
};
