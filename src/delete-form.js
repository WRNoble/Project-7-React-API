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
    <div>
        <h2>Delete Emperor</h2>
        <form onSubmit={formik.handleSubmit}>
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
    </div>
  );
};

export default DeleteForm;