import React from "react";
import { useStyletron } from "baseui";

export const Layout: React.FC<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        // background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};
