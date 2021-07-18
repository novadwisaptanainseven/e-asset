import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import SampahBarang from "./SampahBarang";
import SampahKendaraan from "./SampahKendaraan";

const RecycleBin = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <Row>
      <Col>
        <Card className="shadow">
          <CardHeader>
            <h2>Recycle Bin</h2>
          </CardHeader>
          <CardBody>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={tabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 1,
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      setTabs(1);
                    }}
                    href="#pablo"
                    role="tab"
                  >
                    Barang
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={tabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 2,
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      setTabs(2);
                    }}
                    href="#pablo"
                    role="tab"
                  >
                    Kendaraan
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"tabs" + tabs}>
                  <TabPane tabId="tabs1">
                    <SampahBarang />
                  </TabPane>
                </TabContent>
                <TabContent activeTab={"tabs" + tabs}>
                  <TabPane tabId="tabs2">
                    <SampahKendaraan />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RecycleBin;
