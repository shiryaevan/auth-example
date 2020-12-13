import React from "react";
import cn from "classnames";

import * as Svg from "./dist";
import styles from "./styles.module.scss";

export type IconProps = {
  name: keyof typeof Svg;
  className?: string;
  size?: "default" | "inherit";
};

export const Icon = ({
  name,
  className,
  size = "default",
  ...rest
}: IconProps) => {
  const IconComponent = Svg[name];

  return (
    <div className={cn(styles.icon, styles[`icon_${size}`], className)}>
      {IconComponent && <IconComponent {...rest} />}
    </div>
  );
};
