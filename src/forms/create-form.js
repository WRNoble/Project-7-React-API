import React, { useState } from "react";
//import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import axios from "axios";

function CreateForm() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Birth: "",
      BirthProvidence: "",
      Rise: "",
      ReignStart: "",
      Dynasty: "",
      CauseOfDeath: "",
    },
    onSubmit: () => {
      create().then(() => window.location.reload(true));
    },
  });

  const create = () => {
    return axios({
      method: "post",
      url: "https://roman-emperors-ga-api.herokuapp.com/post",
      data: {
        post: formik.values.post,
      },
    });
  };

  /**
   * Modal Controls
   */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCreate = () => {
    formik.handleSubmit();
    setShow(false);
  };

  return (
    <div>
      <Button>
        <p>Create an Emperor</p>
      </Button>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="post">
          <Form.Label>Create an Emperor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Create Emperor"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">Insert Emperor's Name</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Birth Year"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">
            Insert Emperor's Birth Year
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Birth Province"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">
            Insert Emperor's Birth Province
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Rise to Power"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">
            Insert Emperor's Rise to Power
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Dynasty"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">Insert Emperor's Dynasty</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Cause of Death"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">
            Insert Emperor's Cause of Death
          </Form.Text>
        </Form.Group>
        <Button variant="success" onClick={handleShow}>
          Create
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Please Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're about to create this post!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateForm;

// import React from 'react';
// import { useFormik } from 'formik';

// const CreateForm = () => {

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       birth: '',
//       birthProvidence: '',
//       rise: '',
//       reignStart: '',
//       dynasty: '',
//       causeOfDeath: ''
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//     <h2>Create an Emperor</h2>
//       <label htmlFor="name">name</label>
//       <input
//         id="name"
//         name="name"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.name}
//       />
//       <label htmlFor="Birth">Birth</label>
//       <input
//         id="birth"
//         name="birth"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.birth}
//       />
//       <label htmlFor="birthProvidence">Birth Providence</label>
//       <input
//         id="birthProvidence"
//         name="birthProvidence"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.birthProvidence}
//       />
//       <label htmlFor="rise">Rise to Power</label>
//       <input
//         id="rise"
//         name="rise"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.rise}
//       />
//        <label htmlFor="reignStart">Reign Start</label>
//         <input
//         id="reignStart"
//         name="reignStart"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.reignStart}
//       />
//       <label htmlFor="dynasty">Dynasty</label>
//         <input
//         id="dynasty"
//         name="dynasty"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.dynasty}
//       />
//       <label htmlFor="causeOfDeath">Cause of Death</label>
//         <input
//         id="causeOfDeath"
//         name="causeOfDeath"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.causeOfDeath}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CreateForm;
