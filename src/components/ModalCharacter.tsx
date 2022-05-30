import React, {FC} from 'react';
import {Col, Container, Modal, Row} from "react-bootstrap";
import styled from "styled-components";
import Slider from "./Slider";

interface ModalProps {
    show: boolean;
    setShow: (a: boolean) => void;
    id: number;
    fullInfo: any
}

const Big = styled.p`
  font-size: 36px;
  font-family: Inconsolata,serif;
  font-weight: 600;
  color: #fff
`

export const Text = styled.p`
  font-size: 24px;
  color: #fff
`

const Header = styled(Modal.Header)`
  background-color: #000;
`

const ModalCharacter: FC<ModalProps> = ({show, setShow, fullInfo}) => {
    const [character] = fullInfo

    return (
        <Modal show={show} fullscreen onHide={() => setShow(false)} dialogClassName="modal-90w">
            <Header>
                <Col lg={11}>
                    <Big>Name: {character.name}</Big>
                </Col>
                <Col lg={1}>
                    <button onClick={() => setShow(false)}>X
                    </button>
                </Col>
            </Header>
            <Modal.Body style={{
                maxHeight: 'calc(100vh)',
                overflowY: 'auto',
                overflowX: "hidden",
                padding: 0,
                backgroundColor: "#000"
            }}>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={8} lg={3} style={{marginTop: "5px"}}>
                            <img src={character.image} alt="" style={
                                {
                                    borderRadius: "100%",
                                    borderColor: "#376363",
                                    borderWidth: "3px",
                                    borderStyle: "solid"
                                }
                            }/>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Text>Status: {character.status}</Text>
                            <Text>Species: {character.species}</Text>
                            <Text>Type: {character.type}</Text>
                            <Text>Gender: {character.gender}</Text>
                            <Text>Origin: <b>{character.origin.name}</b></Text>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Text>Location: {character.location.name}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Slider episode={character.episode}/>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCharacter;
