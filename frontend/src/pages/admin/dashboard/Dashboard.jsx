import React from "react";
import "../../../components/admin/styles/dashboard.css";
import { Row, Col } from "react-bootstrap";
import AdminSidebar from "../../../components/admin/dashboard/AdminSidebar";
const Dashboard = () => {
  return (
    <>
      <Row>
        <Col xl={2} lg={3}>
          <AdminSidebar />
        </Col>
        <Col xl={10} lg={9}></Col>
      </Row>
    </>
  );
};

export default Dashboard;
