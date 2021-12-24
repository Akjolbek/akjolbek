import React from "react";
import { Row, Col } from "antd";
import "./AdminPage.css"
import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
import AddNewsModal from "../components/AddNewsModal/AddNewsModal";
import AdminNewsList from "../components/AdminNewsList/AdminNewsList";

const AdminPage = () => {
  return (
    <div className="page" style={{ marginTop: "15px" }}>
      <Row>
        <Col span={12}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductsList />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <AddNewsModal />
            <AdminNewsList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
