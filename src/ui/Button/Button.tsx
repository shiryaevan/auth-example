import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

type PropsButton = {
  variant?: "default" | "unstyled";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsButton> = ({
  variant = "default",
  className,
  ...rest
}: PropsButton) => {
  return (
    <button
      className={cn([
        styles.button,
        className,
        styles[`button_variant_${variant}`]
      ])}
      {...rest}
    />
  );
};
