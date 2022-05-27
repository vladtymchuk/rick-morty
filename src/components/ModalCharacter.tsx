import React, {FC} from 'react';
import {CloseButton, Col, Container, Modal, Row} from "react-bootstrap";
import styled from "styled-components";
import Slider from "./Slider";

interface ModalProps {
    show: boolean;
    setShow: (a: boolean) => void;
    id: number;
    fullInfo: any
}

interface FlexProps {
    direction?: string;
    justify?: string;
    align?: string
}

const Big = styled.p`
  font-size: 36px;
  font-family: Inconsolata;
  font-weight: 600;
  color: #fff
`

export const Text = styled.p`
  font-size: 24px;
  color: #fff
`

const Flex = styled.div<FlexProps>`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
  
  background-color: black;
`

const Header = styled(Modal.Header)`
  background-color: #000;
`

const ModalCharacter: FC<ModalProps> = ({show, setShow, id, fullInfo}) => {


    


    return (
        <Modal show={show} fullscreen onHide={() => setShow(false)} dialogClassName="modal-90w">
            <Header>
                <Col lg={11}>
                    <Big>Name: {fullInfo[0].name}</Big>
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
                            <img src={fullInfo[0].image} alt="" style={
                                {
                                    borderRadius: "100%",
                                    borderColor: "#376363",
                                    borderWidth: "3px",
                                    borderStyle: "solid"
                                }
                            }/>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Text>Status: {fullInfo[0].status}</Text>
                            <Text>Species: {fullInfo[0].species}</Text>
                            <Text>Type: {fullInfo[0].type}</Text>
                            <Text>Gender: {fullInfo[0].gender}</Text>
                            <Text>Origin: <b>{fullInfo[0].origin.name}</b></Text>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Text>Location: {fullInfo[0].location.name}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Slider episode={fullInfo[0].episode}/>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCharacter;
