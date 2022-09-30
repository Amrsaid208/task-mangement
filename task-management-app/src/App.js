import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/homePage";
import HeaderNav from "./app-components/headerNav";
import { Col, Row } from "antd";
import SideNav from "./app-components/sideNav";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Row>
        <Col span={4}>
          <SideNav />
        </Col>
        <Col span={20}>
          <HomePage />
        </Col>
      </Row>
    </div>
  );
}

export default App;
