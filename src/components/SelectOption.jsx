import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input} from 'reactstrap';

class SelectOption extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Container >
            <Row className="justify-content-center">
            <Col lg={4}>
            <FormGroup>
                <Label for="exampleSelect">Option 1</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>X</option>
                    <option>Y</option>
                    <option>Z</option>
                    <option>B</option>
                    <option>A</option>
                </Input>
            </FormGroup>
            </Col>
            <Col lg={4}>
            <FormGroup>
                <Label for="exampleSelect">Country</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>America</option>
                    <option>Oceania</option>
                    <option>Africa</option>
                </Input>
                </FormGroup>
                </Col>
                <Col lg={4}>
                <FormGroup>
                <Label for="exampleSelect">Type</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Lung</option>
                    <option>Breast</option>
                    <option>Prostate</option>
                    <option>Colorectal</option>
                    <option>Others ...</option>
                </Input>
                </FormGroup>
                </Col>
                </Row>
                </Container>
            </div>
         );
    }
}
 
export default SelectOption;