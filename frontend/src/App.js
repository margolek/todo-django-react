import React, { useState } from 'react';
import { Button, Container, Card, Row, Col } 
from 'react-bootstrap';
import {AiFillCheckCircle} from 'react-icons/ai';
import {MdUpdate} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import {BsArrowDownCircleFill} from 'react-icons/bs';
import { IconContext } from "react-icons";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function App() {

  const [showDescription,setShowDescription] = useState(true);

  return ( 
  <Container>
    <Card>
      <Card.Title>
        <h1>To Do List</h1>
      </Card.Title>
      <div className="underline"></div>
      <Card.Body>
        <div className="task-items">
            <Row>
              <Col className="task-text">
                <h5>In here I will map data using API</h5>
                {showDescription ? <AiOutlineMinus/> : <AiOutlinePlus/>}
              </Col>
              <Col  className="icons">
                <IconContext.Provider value={{ className: "done" }}>
                  <AiFillCheckCircle onClick={() => console.log("do nothing done")}/>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "update" }}>
                  <MdUpdate onClick={() => console.log("do nothing update")}/>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "delete" }}>
                  <AiFillDelete onClick={() => console.log("do nothing delete")}/>
                </IconContext.Provider>
              </Col>
              <div>text description will be here</div>
              <hr/>
            </Row>
            
        </div>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default App;
