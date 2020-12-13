import { FC } from "react";

import styles from "./styles.module.scss";

type PropsSpacer = {
  margin?: "4" | "8" | "12" | "16" | "20";
};

export const Spacer: FC<PropsSpacer> = ({ margin = "16", ...rest }) => {
  return <div className={styles[`spacer_${margin}`]} {...rest} />;
};
