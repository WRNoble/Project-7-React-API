import React from 'react';
import { useFormik } from 'formik';

const EditForm = () => {
  
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
        <h2>Edit an Emperor's information</h2>
      <label htmlFor="name">name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="Birth">Birth</label>
      <input
        id="birth"
        name="birth"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.birth}
      />
      <label htmlFor="birthProvidence">Birth Providence</label>
      <input
        id="birthProvidence"
        name="birthProvidence"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.birthProvidence}
      />
      <label htmlFor="rise">Rise to Power</label>
      <input
        id="rise"
        name="rise"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.rise}
      />
       <label htmlFor="reignStart">Reign Start</label>
        <input
        id="reignStart"
        name="reignStart"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.reignStart}
      />
      <label htmlFor="dynasty">Dynasty</label>
        <input
        id="dynasty"
        name="dynasty"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.dynasty}
      />
      <label htmlFor="causeOfDeath">Cause of Death</label>
        <input
        id="causeOfDeath"
        name="causeOfDeath"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.causeOfDeath}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditForm;