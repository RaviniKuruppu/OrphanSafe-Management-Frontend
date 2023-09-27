import React from "react";
import { Button, Col, Form, Row, Table, Card ,Image} from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";

const ExternalDashboard = () => {
    return (
        <div className="responsive">
          <div className="cards">
            <div className="background">
              <h1 className="name-headers">Welcome to OrphanSafe</h1>
              <Row
                className="profile"
                style={{ paddingTop: "30px", paddingLeft: "50px" }}
              >
                  
                <Col md={4} sm={12} style={{ marginBottom: "10px" }}>
                  <Card className="shadow">
                    <Row className="CardRow">
                      <Col className="colDec text-end">
                        <i
                          className="fas fa-user-circle"
                          style={{ fontSize: "30px", marginRight: "10px" }}
                        ></i>
                        Assigned child Profiles
                      </Col>
                    </Row>
    
                    <div className="CardNumber">5</div>
                    <div className="CardItalic">Assigned child profiles</div>
                  </Card>
                </Col>
                <Col md={4} sm={12} style={{ marginBottom: "10px" }}>
                  <Card className="shadow">
                    <Row className="CardRow">
                      <Col className="colDec text-end">
                        <i
                          className="fas fa-globe"
                          style={{ fontSize: "30px", marginRight: "10px" }}
                        ></i>
                        Pending Requests
                      </Col>
                    </Row>
    
                    <div className="CardNumber">3</div>
                    <div className="CardItalic">Number of pending requests</div>
                  </Card>
                </Col>
                <Col md={4} sm={12} style={{ marginBottom: "10px" }}>
                  <Card className="shadow">
                    <Row className="CardRow">
                      <Col className="colDec text-end">
                        <i
                          className="fab fa-xbox"
                          style={{ fontSize: "30px", marginRight: "10px" }}
                        ></i>
                        Cases assigned
                      </Col>
                    </Row>
    
                    <div className="CardNumber">1</div>
                    <div className="CardItalic">Number of assigned cases</div>
                  </Card>
                </Col>

              </Row>
            </div>
          </div>
        </div>
      );
};
export default ExternalDashboard;