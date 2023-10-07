import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import { useViewSocialWorkerProfilesQuery } from "../../slices/profileApiSlice";

const SocialWorkerProfileContent = () => {

  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("workerId");
  const {data, isLoading,isError,isSuccess}=
  useViewSocialWorkerProfilesQuery(paramValue);

  return (
    <div>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Personal Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Name with initials</td>
                      <td className="td">{data.socialWorkerProfile.Name}</td>
                    </tr>
                    <tr>
                      <td className="td">Date Of Birth</td>
                      <td className="td">{data.socialWorkerProfile.DOB}</td>
                    </tr>
                    <tr>
                      <td className="td">NIC number</td>
                      <td className="td">{data.socialWorkerProfile.NIC}</td>
                    </tr>
                    <tr>
                      <td className="td">Mobile number</td>
                      <td className="td">{data.socialWorkerProfile.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <td className="td">Address</td>
                      <td className="td">
                      {data.socialWorkerProfile.Address}
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="td">Email</td>
                      <td className="td">{data.socialWorkerProfile.Email}</td>
                    </tr>
                    <tr>
                      <td className="td">Purpose of interaction</td>
                      <td className="td">{data.socialWorkerProfile.Category}</td>
                    </tr>
                    <tr>
                      <td className="td">Organization Name</td>
                      <td className="td">{data.socialWorkerProfile.Organization}</td>
                    </tr>
                    <tr>
                      <td className="td">Role</td>
                      <td className="td">{data.socialWorkerProfile.Role}</td>
                    </tr>
                    <tr>
                      <td className="td">Past Experiences</td>
                      <td className="td">{data.socialWorkerProfile.Experience}</td>
                    </tr>
                    <tr>
                      <td className="td">Orphanage Name</td>
                      <td className="td">{data.socialWorkerProfile.OrphanageName}</td>
                    </tr>
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Personal Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">NIC copy</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Birthday certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Occupation Certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default SocialWorkerProfileContent;
