import React from "react";

import { useStyletron } from "baseui";

export default (props: any) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        margin: "auto",
      })}
    >
      {props.children}
    </div>
  );
};
