import React from "react";
import { Row, Col } from "antd";
import "./AdminPage.css"
import AddProductModal from "../components/AddWindowModal/AddProductModal";
import AdminProductsList from "../components/AdminWindowsList/AdminProductsList";
import AddNewsModal from "../components/AddNewsModal/AddNewsModal";
import AdminNewsList from "../components/AdminNewsList/AdminNewsList";
import AddDoorModal from "../components/AddDoorModal/AddDoorModal";
import AdminDoorsList from "../components/AdminDoorsList/AdminDoorsList";

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
        <Col span={12}>
          <Col span={22}>
            <AddDoorModal />
            <AdminDoorsList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
