import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, NavLink, Container, Row} from 'reactstrap';

export default class NavChart extends React.Component {
  render() {
    return (
    <Container >
        <Row className="justify-content-center">
      <ButtonToolbar>
        <ButtonGroup>
        <NavLink href="/Chart1"><Button color="sucess"> Chart 1</Button></NavLink>
        <NavLink href="/Chart2"><Button color="sucess"> Chart 2</Button></NavLink>
        <NavLink href="/Chart3"><Button color="sucess"> Chart 3</Button></NavLink>
        <NavLink href="/Chart4"><Button color="sucess"> Chart 4</Button></NavLink>
        </ButtonGroup>
    </ButtonToolbar>
    </Row>
    </Container>
    )
  }}