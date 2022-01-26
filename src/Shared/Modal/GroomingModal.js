import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import "./Modal.scss";


const GroomingModal = (props) => {

  return (
     <>
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal'
         >
            <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter" >
               Isa Grooming
            </Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <p className="modal-info">
               Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
               dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
               consectetur ac, vestibulum at eros.
            </p>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide} className="modal_btn">Close</Button>
            </Modal.Footer>
         </Modal>
     </>
   
  )
  

};

export default GroomingModal;
