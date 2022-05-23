import React, {FC, useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useGetInfoCharacterQuery} from "../store/API/CharacterAPI";

interface ModalProps {
    show: boolean;
    setShow: (a: boolean) => void;
    id: number
}

const ModalCharacter: FC<ModalProps> = ({show, setShow, id}) => {
    const {data} = useGetInfoCharacterQuery(id)

    console.log("data ",data)

    return (
        <Modal show={show} fullscreen onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal {id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    );
};

export default ModalCharacter;
