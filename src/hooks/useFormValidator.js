import { useState, useCallback } from 'react';

const useFormValidation = () => {
  const [values, setValues] = useState({

    name: '',
    email: '',
    password: ''
  }),

    [errors, setErrors] = useState({}),
    [isValid, setIsValid] = useState(false),
    [currentInputName, setCurrentInputName] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
    setCurrentInputName(name);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    errors,
    isValid,
    setIsValid,
    currentInputName,
    handleChange,
    resetForm,
  };
};

export default useFormValidation;


// import React, { useCallback } from "react";

// //хук управления формой и валидации формы
// function useFormValidation() {
//   const [values, setValues] = React.useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);

//   const handleChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: target.validationMessage });
//     setIsValid(target.closest("form").checkValidity());
//   };

//   const resetForm = useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues(newValues);
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, resetForm };
// }

// export default useFormValidation;
