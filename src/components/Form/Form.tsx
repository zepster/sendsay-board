import React, { FormHTMLAttributes } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form = ({
  onSubmit,
  ...props
}: FormProps) => {
  const onSubmitHandelr = (event: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      event.preventDefault();
      onSubmit(event);
    }
  };

  return <form onSubmit={onSubmitHandelr} {...props} />;
};
