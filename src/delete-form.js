import React from 'react';
import { useFormik } from 'formik';

const DeleteForm = () => {
  
  const formik = useFormik({
    initialValues: {
      name: '',
      birth: '',
      birthProvidence: '',
      rise: '',
      reignStart: '',
      dynasty: '',
      causeOfDeath: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <h2>Delete an Emperor</h2>
      <label htmlFor="name">name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeleteForm;