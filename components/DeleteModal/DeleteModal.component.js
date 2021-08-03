import React from 'react';
import { Modal, Button } from 'native-base';

const DeleteModal = ({ isOpen, onClose, contact, onConfirm }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body>
          {`Are you sure want to delete ${contact?.firstName}`}
        </Modal.Body>
        <Modal.Footer>
          <Button.Group variant="ghost" space={2}>
            <Button onPress={onClose}>CANCEL</Button>
            <Button onPress={onConfirm}>
              CONFIRM
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default DeleteModal;