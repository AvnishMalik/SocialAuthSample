import React from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const responseGoogle = user => {
  console.log(user);
};

const componentClicked = data => {
  console.log(data);
};
const responseFacebook = err => {
  console.log(err);
};

export default class AuthModal extends React.Component {
  constructor() {
    super();
    this.render.bind(this);
    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open(modalType) {
    this.setState({
      showModal: true,
      modalType: modalType
    });
  }

  handleSelect(eventKey) {
    //event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <div>
        <span onClick={this.open.bind(this)}>Sign Up</span>
        <Modal
          size="lg"
          centered="true"
          show={this.state.showModal}
          onHide={this.close.bind(this)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up to the Portal</Modal.Title>
          </Modal.Header>
          <Modal.Body bsPrefix="centerLoc">
            <Container fluid="true">
              <Row>
                <GoogleLogin
                  clientId="SS-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Signup with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cssClass="btnFacebook"
                  cookiePolicy={"single_host_origin"}
                />
              </Row>
              <Row>
                <p />
              </Row>
              <Row>
                <FacebookLogin
                  appId="1088597931155576"
                  size="medium"
                  autoLoad={false}
                  fields="name,email,picture"
                  cssClass="btnFacebook"
                  textButton="&nbsp;&nbsp;Sign In with Facebook"
                  onClick={componentClicked}
                  callback={responseFacebook}
                />
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
