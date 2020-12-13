import { FC } from "react";
import { Spacer } from "../Spacer";

type PropsField = {
  label: String;
};

export const Field: FC<PropsField> = ({ label, children, ...rest }) => {
  return (
    <label {...rest}>
      <div>{label}</div>
      <Spacer margin="4" />
      {children}
    </label>
  );
};
