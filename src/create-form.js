import React from 'react';
import { useFormik } from 'formik';

const CreateForm = () => {
  
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
        <h2>Create Emperor</h2>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
        />
        <label htmlFor="birth">birth</label>
        <input
            id="birth"
            name="birth"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.birth}
        />
        <label htmlFor="birthProvidene">Birth Providence</label>
        <input
            id="birthProvidence"
            name="birthProvidence"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.birthProvidence}
        />
        <label htmlFor="rise">rise</label>
        <input
            id="rise"
            name="rise"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.rise}
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
    </div>
  );
};

export default CreateForm;