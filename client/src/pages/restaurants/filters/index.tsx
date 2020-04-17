import React from "react";
import { useStyletron } from "styletron-react";
import { Button, KIND, SIZE } from "baseui/button";
import { Label1 } from "baseui/typography";
import { Categories } from "./categories";
import { OpenNow } from "./openNow";
import { Price } from "./price";

export const Filters: React.FC<{}> = (props) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        margin: "1em 3em",
      })}
    >
      <div
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            display: "flex",
            alignSelf: "center",
            marginRight: "45px",
          })}
        >
          <Label1>Filter By:</Label1>
        </div>
        <OpenNow />
        <div
          className={css({
            display: "flex",
            width: "35px",
          })}
        />
        <Price />
        <div
          className={css({
            display: "flex",
            width: "35px",
          })}
        />
        <Categories />
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <Button
          kind={KIND.minimal}
          size={SIZE.compact}
          overrides={{
            BaseButton: {
              style: {
                border: "1px solid black",
                width: "150px",
              },
            },
          }}
        >
          CLEAR ALL
        </Button>
      </div>
    </div>
  );
};
