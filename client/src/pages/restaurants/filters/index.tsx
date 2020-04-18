import React, { useCallback, useContext } from "react";
import { useStyletron } from "styletron-react";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { Label1 } from "baseui/typography";
import { SearchContext } from "../page";
import { Categories } from "./categories";
import { Term } from "./term";
import { Location } from "./location";
import { OpenNow } from "./openNow";
import { Price } from "./price";

export const Filters: React.FC<{}> = (props) => {
  const {
    actions: { clearFilters },
    dispatch,
  } = useContext(SearchContext);

  const clearAll = useCallback(async () => {
    dispatch(clearFilters());
  }, [dispatch, clearFilters]);

  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1em 3em",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
        })}
      >
        <div
          className={css({
            display: "flex",
            alignSelf: "center",
          })}
        >
          <Label1 width="120px">Filter By:</Label1>
        </div>
        <OpenNow />
        <div
          className={css({
            display: "flex",
            width: "65px",
          })}
        />
        <Price />
        <div
          className={css({
            display: "flex",
            width: "65px",
          })}
        />
        <Categories />
        <div
          className={css({
            display: "flex",
            width: "65px",
          })}
        />
        <Location />
      </div>
      <div
        className={css({
          display: "flex",
          width: "20px",
        })}
      />
      <div
        className={css({
          display: "flex",
        })}
      >
        <Button
          onClick={clearAll}
          kind={KIND.minimal}
          size={SIZE.compact}
          overrides={{
            BaseButton: {
              style: {
                border: "1px solid black",
                // height: "50px",
                // width: "150px",
              },
            },
          }}
        >
          CLEAR ALL
        </Button>
      </div>
      <div
        className={css({
          display: "flex",
          width: "20px",
        })}
      />
      <div
        className={css({
          display: "flex",
        })}
      >
        <Button onClick={clearAll} shape={SHAPE.round}>
          GO
        </Button>
      </div>
    </div>
  );
};
