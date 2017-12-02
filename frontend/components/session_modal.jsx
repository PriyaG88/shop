import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Modal, Nav,
  Row, Col, FormGroup }
  from 'react-bootstrap';
import { login } from '../actions/session_actions';

class SessionModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.close();
      this.props.handleLogin();
    });

  }

  render () {
    return (
      <div>
        <span onClick={this.open.bind(this)}>LOG IN</span>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Your Account for everything Style</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <form>
                <FormGroup >
                  <Row>
                    <Col md={12}>
                      <input className="session-input"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}/>
                      <input className="session-input"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}/>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <ButtonGroup vertical block>
                      <Button className="session-form-submit login-button"
                        onClick={this.handleSubmit.bind(this)}>LOG IN</Button>
                      <br />
                      <Button className="session-form-submit signup-button">SIGN UP</Button>
                    </ButtonGroup>
                  </Row>
                </FormGroup>
              </form>
            </Row>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SessionModal);
