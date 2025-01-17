import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import {
  useUpdateCaseLogMutation,
  useGetCaseLogBylogIdQuery,
} from "../../slices/caseApiSlice";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const EditCaseLogs = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("logId");
  // React state to manage selected options
  const [logName, setLogName] = useState();
  const [logDescription, setLogDescription] = useState();
  const [updateCaseLog, { error, loading, success }] =
    useUpdateCaseLogMutation();
  const { data, isLoading, isError, isSuccess, refetch } =
    useGetCaseLogBylogIdQuery(paramValue);
  // Array of all options

  const submitHandler = async (e) => {
    const form = document.getElementById("form");
    e.preventDefault();
    if (logName && logDescription) {
      if (logName.trim().length != 0 && logDescription.trim().length != 0) {
        try {
          const caseLogData = {
            id: paramValue,
            name: logName,
            description: logDescription,
          };
          const res = await updateCaseLog(caseLogData).unwrap();
          toast.success("Update completed");
          form.reset();
          if (success) {
            refetch();
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("Log name and description cannot be empty");
      }
    } else if (logName) {
      if (logName.trim().length != 0) {
        try {
          const caseLogData = {
            id: paramValue,
            name: logName,
            description: data.caseLog.Description,
          };
          const res = await updateCaseLog(caseLogData).unwrap();
          toast.success("Update completed");
          form.reset();
          if (success) {
            refetch();
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("Log name cannot be empty");
      }
    } else if (logDescription) {
      if (logDescription.trim().length != 0) {
        try {
          const caseLogData = {
            id: paramValue,
            name: data.caseLog.LogName,
            description: logDescription,
          };
          const res = await updateCaseLog(caseLogData).unwrap();
          toast.success("Update completed");
          form.reset();
          if (success) {
            refetch();
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("description cannot be empty");
      }
    } else {
      toast.error("didn't change anyting");
    }
  };

  // Function triggered on selection
  return (
    isSuccess && (
      <Row>
        <Col sm={7}>
          <MyCard>
            <MyCardHeader>Create Case Log Form</MyCardHeader>
            <MyCardBody>
              <Form onSubmit={submitHandler} id="form">
                <Form.Group className="mb-3" controlId="formBasicCaseName">
                  <Form.Label>Case log name</Form.Label>
                  <Form.Text className="text-muted">
                    *name of the case log
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="eg. 1st meeting "
                    onChange={(e) => setLogName(e.target.value)}
                    defaultValue={data.caseLog.LogName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="caseDescription">
                  <Form.Label>Case log description</Form.Label>
                  <Form.Text className="text-muted">
                    *brief description about the case
                  </Form.Text>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    rows={8}
                    placeholder="eg. can we get a first meeting to talk about this case briefly"
                    onChange={(e) => setLogDescription(e.target.value)}
                    defaultValue={data.caseLog.Description}
                  />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Case log Documents</Form.Label>
                  <Form.Text className="text-muted">
                    *documents related to the Case log
                  </Form.Text>
                  <Form.Control
                    type="file"
                    multiple
                    size="sm"
                    style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    )
  );
};
export default EditCaseLogs;
