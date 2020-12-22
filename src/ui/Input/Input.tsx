import { HTMLAttributes, InputHTMLAttributes, SyntheticEvent } from "react";
import cn from "classnames";

import { Button } from "../Button";
import { Icon, IconProps } from "../Icon";
import styles from "./styles.module.scss";

type PropsInput = {
  isInvalid?: boolean;
  icon?: {
    name: IconProps["name"];
    onClick: (e: SyntheticEvent) => void;
  };
  iconButtonAttrs?: HTMLAttributes<HTMLButtonElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  icon,
  isInvalid,
  iconButtonAttrs,
  ...rest
}: PropsInput) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={cn([styles.input, isInvalid && styles._error])}
        {...rest}
      />

      {icon && (
        <Button
          onClick={icon.onClick}
          className={styles.inputWrapper__icon}
          variant="unstyled"
          type="button"
          {...iconButtonAttrs}
        >
          <Icon name={icon.name} />
        </Button>
      )}
    </div>
  );
};
