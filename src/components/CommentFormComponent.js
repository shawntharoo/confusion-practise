import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const require = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }

        this.toggleModalOpen = this.toggleModalOpen.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModalOpen() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.toggleModalOpen();
        this.props.postComment(this.props.dishId, values.rating, values.name, values.comment)
    }

    render() {
        return (
            <div>
                <Button default onClick={this.toggleModalOpen}>
                    <span className="fa fa-sign-in fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModalOpen}>
                    <ModalHeader toggle={this.toggleModalOpen}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label> Rating </Label>
                                    <Control.select name="rating" model=".rating" className="form-control">
                                        <option>1</option>
                                        <option> 2 </option>
                                        <option>3</option>
                                        <option> 4 </option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="name"> Your Name </Label>
                                    <Control.text id="name" name="name" placeholder="Your Name" model=".name" className="form-control" validators={{ require , minLength : minLength(3) , maxLength : maxLength(13)}}/>
                                    <Errors
                                    className ="text-danger"
                                    model = ".name"
                                    show = "touched"
                                    messages = {{
                                        require : "Required",
                                        minLength : "Length shpud be greater than 3 charcters",
                                        maxLength : "Maximum lenght shoud be 13"
                                    }}
/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="comment"> Comment </Label>
                                    <Control.textarea id="comment" name="comment" rows="6" model=".comment" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;