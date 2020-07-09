import * as Yup from 'yup';

export const doSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email('Eamil is invalid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
};
