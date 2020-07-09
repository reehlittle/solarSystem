import React from 'react';
import {Form as UnForm} from '@unform/mobile';
import * as Yup from 'yup';

const Form = ({children, propRef, submitAction, schema, ...rest}) => {
  const handleSubmit = async () => {
    const data = propRef.current.getData();

    if (await handleValidation()) {
      submitAction(data);
    }
  };

  const handleValidation = async () => {
    try {
      const data = propRef.current.getData();

      console.log(data);
      // Remove all previous errors
      propRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      return true;
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        propRef.current.setErrors(validationErrors);
      }

      return false;
    }
  };

  return (
    <UnForm ref={propRef} onSubmit={handleSubmit} {...rest}>
      {children}
    </UnForm>
  );
};

export default Form;
