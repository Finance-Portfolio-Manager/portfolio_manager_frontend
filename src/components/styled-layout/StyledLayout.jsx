/* 
* Component by Team 2 | Carlos Galvan Jr

*/
import React from "react";
import "antd/dist/antd.css";
// import "./index.css";
import { Layout, Menu, Breadcrumb, Card, Col, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
// import GrandFetchCard from "./chart.js-components/Total/GrandFetchCard";
import FetchCard from "./chart.js-components/Single/FetchCard";
import { ChartVanilla } from "./chart.js-components/vanilla/ChartCanvas";
// import { Chart } from "react-chartjs-2";
export const StyledLayout = (props) => {

  return (
    <React.Fragment>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          {/* <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <FetchCard></FetchCard>
            {/* <FetchCard></FetchCard> */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Team 2 | Component
        </Footer>
      </Layout>
    </React.Fragment>
  );
};
