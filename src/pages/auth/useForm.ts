import React from 'react';

type InitialValues = {
  [fieldName: string]: string,
};

type Errors = {
  [fieldName: string]: boolean,
};

type Validations = {
  [fieldName: string]: (fieldValue: string) => boolean,
};

export const useForm = <T extends InitialValues>(
  initValues: T,
  validations: Validations = {},
) => {
  const [values, setValue] = React.useState<T>(initValues);
  const [errors, setErrors] = React.useState<Errors>({});

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValue((prevValues) => ({ ...prevValues, [name]: value }));
    }, [],
  );

  const validate = () => {
    let valid = true;
    const err: Errors = {};
    Object.keys(initValues).forEach(
      (fieldName) => {
        if (!validations[fieldName]) {
          err[fieldName] = false;
        } else {
          const validateFn = validations[fieldName];
          const isFieldValid = validateFn(values[fieldName]);
          err[fieldName] = !isFieldValid;
          valid = valid && isFieldValid;
        }
      },
    );
    setErrors(err);
    return valid;
  };

  return {
    handleChange,
    validate,
    values,
    errors,
  };
};
