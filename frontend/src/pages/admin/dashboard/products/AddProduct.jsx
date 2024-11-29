import React from "react";
import AdminSidebar from "../../../../components/admin/dashboard/AdminSidebar";
import { Col, Row } from "react-bootstrap";
import ProductForm from "../../../../components/admin/dashboard/products/ProductForm";
import Dashboard from "../Dashboard";

const AddProduct = () => {
  return (
    <>
      <Row>
        <Col xl={2} lg={3}>
          <AdminSidebar />
        </Col>
        <Col xl={10} lg={9}>
          <ProductForm />
        </Col>
      </Row>
    </>
  );
};

export default AddProduct;
