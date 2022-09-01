import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ExistingTask({show, setShow}) {

    return (
        <Modal show={show}>
            <Modal.Body>This tasks already exists!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}