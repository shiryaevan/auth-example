import { SyntheticEvent, useCallback, useState } from "react";
import { Form, Field } from "react-final-form";

import styles from "./styles.module.scss";
import { Button, Field as UIField, Input, Spacer, Icon } from "../../ui/";
import { formRequestAnswer, validateForm } from "./utils";

export type ModelAuthForm = {
  email?: string;
  password?: string;
};

export const AuthForm = () => {
  const [formIsValid, setFormIsValid] = useState<Boolean | undefined>();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const onSubmitHandler = useCallback((formData: ModelAuthForm) => {
    setFormIsValid(formRequestAnswer(formData));
  }, []);

  const onPasswordVisibilityClickHandler = useCallback(
    (e: SyntheticEvent) => {
      setPasswordIsVisible(!passwordIsVisible);
      e.preventDefault();
    },
    [passwordIsVisible]
  );

  return (
    <Form
      onSubmit={onSubmitHandler}
      validate={validateForm}
      render={({ handleSubmit, submitting, valid, submitFailed }) => (
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.authForm__reaction}>
            <Icon
              className={styles.authForm__emoji}
              name={
                formIsValid === false || submitFailed
                  ? "EggDoubt"
                  : formIsValid === true
                  ? "EggHappy"
                  : "EggQuiet"
              }
              size="inherit"
            />
            <Spacer margin="8" />
            <div>
              {formIsValid === false
                ? "The email or password is incorrect"
                : formIsValid === true
                ? "You are logged in!"
                : "Just do it!"}
            </div>
          </div>
          <Spacer />
          <Field name="email">
            {({ input, meta }) => (
              <UIField label="Email">
                <Input
                  aria-required={true}
                  type="email"
                  autoComplete="username"
                  autoFocus
                  isInvalid={meta.error && meta.touched}
                  {...input}
                />
              </UIField>
            )}
          </Field>
          <Spacer />
          <Field name="password">
            {({ input, meta }) => (
              <UIField label="Password">
                <Input
                  aria-required={true}
                  autoComplete="current-password"
                  type={passwordIsVisible ? "text" : "password"}
                  icon={{
                    name: passwordIsVisible ? "Eye" : "Blink",
                    onClick: onPasswordVisibilityClickHandler
                  }}
                  iconButtonAttrs={{
                    "aria-label": passwordIsVisible
                      ? "Hide password"
                      : "Show password"
                  }}
                  isInvalid={meta.error && meta.touched}
                  {...input}
                />
              </UIField>
            )}
          </Field>
          <Spacer />
          <Button
            type="submit"
            disabled={submitting || !valid}
            aria-label={
              formIsValid === false || submitFailed
                ? "Form is invalid"
                : "Form is valid"
            }
          >
            Login
          </Button>
        </form>
      )}
    />
  );
};
