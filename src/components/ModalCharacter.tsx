import React, {FC} from 'react';
import {Modal} from "react-bootstrap";
import styled from "styled-components";

interface ModalProps {
    show: boolean;
    setShow: (a: boolean) => void;
    id: number;
    fullInfo: any
}

const Big = styled.p`
  font-size: 36px;
`

const ModalCharacter: FC<ModalProps> = ({show, setShow, id, fullInfo}) => {
    return (
        <Modal show={show} fullscreen onHide={() => setShow(false)} dialogClassName="modal-90w">
            <Modal.Header closeButton>
                Title
            </Modal.Header>
            <Modal.Body style={{
                maxHeight: 'calc(100vh)',
                overflowY: 'auto'
            }}>
                <Big>{JSON.stringify(fullInfo, null ,2)}</Big>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCharacter;
